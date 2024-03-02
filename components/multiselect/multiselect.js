import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import FloatingContainer from '../floating-container/floating-container.js';
import './multiselect.css';
import Value from './values/values.js';
import List from './list/list.js';

function Multiselect({
	className,
	label,
	placeholder,
	values = [],
	items = [],
	tags = true,
	strict = false,
	error,
	note,
	disabled,
	showIcon = true,
	floatingContainerOptions = {},
	onChange = () => {},
}) {
	let [isOpened, setIsOpened] = useState(false);
	let [innerValues, setInnerValues] = useState(values.map(toInnerValue));
	let [inputValue, setInputValue] = useState('');
	let [highlightedItemId, setHighlightedItemId] = useState(null);
	let rootRef = useRef(null);
	let compRef = useRef(null);
	let multiselectRef = useRef(null);
	let baseClass = 'ui-multiselect';
	let classes = [
		'ui-form-element',
		baseClass,
		className,
		error && `${baseClass}-error`,
		disabled && `${baseClass}-disabled`
	].filter(Boolean).join(' ');
	let multiselectListClasses = [
    `${baseClass}-list-wrapper`,
    className,
	].filter(Boolean).join(' ');

	let filteredItems = useMemo(() => {
		if (!inputValue) return items;
		return items.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));
	}, [inputValue, items]);

	let onMessage = useCallback((name, data) => {
		if(name === 'values.click' && !disabled) setIsOpened(!isOpened);

		if(name === 'list.item-click') {
			let selectedItem = items.find(i => i.id === data.id);
			let isSelected = innerValues.some(v => v.id === data.id);
			let newInnerValues = isSelected
				? innerValues.filter(v => v.id !== data.id)
				: [...innerValues, selectedItem];
			setInnerValues(newInnerValues);
			onChange(newInnerValues);
			setIsOpened(false);
			if (inputValue) setInputValue('');
		}

		if (name === 'list.item-hover') {
			setHighlightedItemId(data.id);
		}

		if (name === 'value.remove') {
			let newInnerValues = innerValues.filter(v => v.id !== data.id);
			setInnerValues(newInnerValues);
			onChange(newInnerValues);
		}

		if (name === 'input.change') {
			setInputValue(data.value);
			setHighlightedItemId(null);
		}

		if (name === 'input.submit') {
			if (highlightedItemId && filteredItems.length > 0) {
				onMessage('list.item-click', { id: highlightedItemId });
			} else {
				let existingValue = innerValues.find(v => v.name.toLowerCase() === inputValue.toLowerCase());
				if (existingValue) return;

				let existingItem = items.find(i => i.name.toLowerCase() === inputValue.toLowerCase());
				let newInnerValues;
				if (existingItem) {
					newInnerValues = [...innerValues, existingItem];
				} else {
					let id = inputValue.toLowerCase();
					newInnerValues = strict ? innerValues : [...innerValues, { id, name: id }];
				}
				setInputValue('');
				setInnerValues(newInnerValues);
				onChange(newInnerValues);
			}
			setHighlightedItemId(null);
		}

		if (name === 'input.arrow-down' && filteredItems.length > 0) {
			if (highlightedItemId) {
				let highlightedItemIndex = filteredItems.findIndex(fi => fi.id === highlightedItemId);
				let nextIndex = filteredItems.length > highlightedItemIndex + 1 ? highlightedItemIndex + 1 : 0;
				setHighlightedItemId(filteredItems[nextIndex].id);
			} else {
				setHighlightedItemId(filteredItems[0].id);
			}
		}

		if (name === 'input.arrow-up' && filteredItems.length > 0) {
			if (highlightedItemId) {
				let highlightedItemIndex = filteredItems.findIndex(fi => fi.id === highlightedItemId);
				let nextIndex = highlightedItemIndex > 0 ? highlightedItemIndex - 1 : filteredItems.length - 1;
				setHighlightedItemId(filteredItems[nextIndex].id);
			} else {
				setHighlightedItemId(filteredItems.at(-1).id);
			}
		}

		if(name === 'input.focus' && !disabled) setIsOpened(true);

		if(name === 'input.blur' && !disabled) {
			setIsOpened(false);
			setHighlightedItemId(null);
		}
	}, [disabled, filteredItems, highlightedItemId, innerValues, inputValue, isOpened, items, strict, onChange]);

	useEffect(() => {
		window.addEventListener('click', handleDocumentClick, true);
		return () => window.removeEventListener('click', handleDocumentClick, true);
	}, []);

	useEffect(() => setInnerValues(values.map(toInnerValue)), [values]);

	return (
		<div className={classes} ref={rootRef}>
			<label className="ui-form-element-label">
				{label && (
					<div>{label}</div>
				)}
				<div className={`${baseClass}-comp`} ref={compRef}>
					<Value
						placeholder={placeholder}
						inputValue={inputValue}
						values={innerValues}
						tags={tags}
						showIcon={showIcon}
						disabled={disabled}
						sendMessage={onMessage}
					/>
					{isOpened && items.length > 0 && (
						<FloatingContainer
							className={multiselectListClasses}
							element={compRef}
							size="matchElement"
							offset={-2}
							{...floatingContainerOptions}
							ref={multiselectRef}
						>
							<List
								values={innerValues}
								items={filteredItems}
								highlightedItemId={highlightedItemId}
								sendMessage={onMessage}
							/>
						</FloatingContainer>
					)}
				</div>
			</label>
			{error && (
				<div className="ui-form-element-error">{error}</div>
			)}
			{note && (
				<div className="ui-form-element-note">{note}</div>
			)}
		</div>
	);

	function toInnerValue(v) {
		if(v instanceof Object) return v;
		return {id: v, name: v};
	}

	function handleDocumentClick(e) {
		let isClickInside = rootRef.current && rootRef.current.contains(e.target)
      || multiselectRef.current && multiselectRef.current.contains(e.target);
		if (!isClickInside) setIsOpened(false);
	}
}

export default Multiselect;

import React, {useEffect, useRef, useState} from 'react';

import FloatingContainer from '../floating-container/floating-container.js';
import Value from './value/value.js';
import List from './list/list.js';

function Dropdown({
	className,
	label,
	placeholder,
	value,
	items = [],
	mode = 'normal', // normal || menu
	error,
	note,
	disabled,
	showIcon = true,
	floatingContainerOptions = {},
	onChange = () => {},
}) {
	let [isOpened, setIsOpened] = useState(false);
	let [innerValue, setInnerValue] = useState(toInnerValue(value));
	let rootRef = useRef(null);
	let compRef = useRef(null);
	let dropdownRef = useRef(null);
	let baseClass = 'ui-dropdown';
	let classes = [
		'ui-form-element',
		baseClass,
		className,
		error && `${baseClass}-error`,
		disabled && `${baseClass}-disabled`
	].filter(Boolean).join(' ');
	let dropdownListClasses = [
    `${baseClass}-list-wrapper`,
    className,
	].filter(Boolean).join(' ');

	useEffect(() => {
		window.addEventListener('click', handleDocumentClick, true);
		return () => window.removeEventListener('click', handleDocumentClick, true);
	}, []);

	useEffect(() => setInnerValue(toInnerValue(value)), [value]);

	return (
		<div className={classes} ref={rootRef}>
			<label className="ui-form-element-label">
				{label && (
					<div>{label}</div>
				)}
				<div className={`${baseClass}-comp`} ref={compRef}>
					<Value
						placeholder={placeholder}
						value={innerValue}
						mode={mode}
						showIcon={mode === 'menu' ? false : showIcon}
						sendMessage={onMessage}
					/>
					{isOpened && (
						<FloatingContainer
							className={dropdownListClasses}
							element={compRef}
							size={mode === 'normal' ? 'matchElement' : 'auto'}
							offset={-2}
							{...floatingContainerOptions}
							ref={dropdownRef}
						>
							<List
								value={innerValue}
								items={items}
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
		if(mode === 'menu' || v instanceof Object) return v;
		return {id: v, name: v};
	}

	function handleDocumentClick(e) {
		let isClickInside = rootRef.current && rootRef.current.contains(e.target)
      || dropdownRef.current && dropdownRef.current.contains(e.target);
		if (!isClickInside) setIsOpened(false);
	}

	function onMessage(name, data) {
		if(name === 'value.click' && !disabled) setIsOpened(!isOpened);
		if(name === 'list.item-click') {
			let v = items.find(i => i.id === data.id);
			if (mode === 'normal') setInnerValue(toInnerValue(v));
			onChange(v);
			setIsOpened(false);
		}
	}
}

export default Dropdown;

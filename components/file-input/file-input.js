import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';

import Icon from '../icon/icon';
import './file-input.css';

function FileInput({
	value: valueProp = [],
	className,
	label,
	error,
	note,
	disabled,
	inputRef,
	preview = false,
	replace = true,
	multiple = false,
	onChange = () => {},
	...rest
}) {
	let value = useMemo(() => Array.isArray(valueProp) ? valueProp : valueProp ? [valueProp] : [], [valueProp]);
	let classes = [
		'ui-form-element',
		'ui-file-input',
		className,
		error && 'ui-file-input-error',
		disabled && 'ui-file-input-disabled',
	].filter(Boolean).join(' ');
	let [files, setFiles] = useState(value);

	let innerInputRef = useRef();
	useImperativeHandle(inputRef, () => innerInputRef.current);

	function removeFile(index) {
		let v = [
			...files.slice(0, index),
			...files.slice(index + 1)
		];
		setFiles(v);
		onChange(multiple ? v : (v[0] ?? null));
		if (v.length === 0) innerInputRef.current.value = null;
	}

	useEffect(() => {
		if (value.length === 0) innerInputRef.current.value = null;
		if (value.length === 0 && files.length === 0) return;
		setFiles([...value]);
	}, [value, files.length]);

	return (
		<div className={classes}>
			<label className="ui-form-element-label">
				{label && (
					<div>{label}</div>
				)}
				{preview && files.length !== 0 && (
					<ul className="ui-file-input-preview">
						{files.map((f, i) => (
							<li key={`${f.name}-${i}`}>
								{f.name}
								<Icon
									name="close"
									onClick={e => {
										e.preventDefault();
										e.stopPropagation();
										removeFile(i);
									}}
								/>
							</li>
						))}
					</ul>
				)}
				<div className="input-wrapper">
					<input
						{...rest}
						disabled={disabled}
						multiple={multiple}
						onChange={e => {
							let v = replace
								? [...e.target.files]
								: [...files, ...e.target.files];
							setFiles(v);
							onChange(multiple ? v : (v[0] ?? null), e);
						}}
						ref={innerInputRef}
						type="file"
					/>
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
}

export default FileInput;

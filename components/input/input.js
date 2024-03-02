import React from 'react';
import './input.css';

function Input({
	className,
	label,
	error,
	note,
	disabled,
	iconLeft,
	iconRight,
	inputRef,
	onChange = () => {},
	...rest
}) {
	let classes = [
		'ui-form-element',
		'ui-input',
		className,
		error && 'ui-input-error',
		disabled && 'ui-input-disabled',
		iconLeft && 'has-icon-left',
		iconRight && 'has-icon-right'
	].filter(Boolean).join(' ');

	return (
		<div className={classes}>
			<label className="ui-form-element-label">
				{label && (
					<div>{label}</div>
				)}
				<div className="input-wrapper">
					{iconLeft}
					<input
						{...rest}
						disabled={disabled}
						onChange={e => onChange(e.target.value, e)}
						{...(inputRef ? { ref: inputRef } : {})}
					/>
					{iconRight}
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

export default Input;

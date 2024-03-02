import React from 'react';
import './textarea.css';

function Textarea({
	className,
	label,
	value,
	error,
	note,
	disabled,
	onChange = () => {},
	...rest
}) {
	let classes = [
		'ui-form-element',
		'ui-textarea',
		className,
		error && 'ui-textarea-error',
		disabled && 'ui-input-disabled'
	].filter(Boolean).join(' ');

	return (
		<div className={classes}>
			<label className="ui-form-element-label">
				<div>{label}</div>
				<textarea
					rows="3"
					{...rest}
					value={value}
					disabled={disabled}
					onChange={e => onChange(e.target.value, e)}
				></textarea>
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

export default Textarea;

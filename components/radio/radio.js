import React from 'react';
import './radio.css';

function Radio({
	checked = false,
	className,
	label,
	error,
	note,
	disabled,
	onChange = () => {},
	...rest
}) {
	let classes = [
		'ui-form-element',
		'ui-radio',
		className,
		error && 'ui-radio-error',
		disabled && 'ui-radio-disabled'
	].filter(Boolean).join(' ');

	return (
		<div className={classes}>
			<label className="ui-form-element-label">
				<div className="ui-radio-replacer">
					<input
						{...rest}
						disabled={disabled}
						type="radio"
						checked={checked}
						onChange={e => onChange(e.target.value, e)}
						style={{ visibility: 'hidden' }}
					/>
					<div>
						{checked && (
							<div className="ui-radio-replacer-checked-circle" />
						)}
					</div>
				</div>
				<div>{label}</div>
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

export default Radio;

import React, { forwardRef } from 'react';
import DP from 'react-datepicker';
import './datepicker.css';

import Input from '../input/input.js';


let CustomInput = forwardRef(function CustomInput({ value: cValue, onClick, onChange: cOnChange, disabled, placeholder }, ref) {
	return (
		<div className="ui-datepicker-input">
			<Input value={cValue} onFocus={onClick} onChange={(_, e) => cOnChange(e)} disabled={disabled} placeholder={placeholder} inputRef={ref} />
			<div className="ui-datepicker-input-icon"></div>
		</div>
	);
});

function DatePicker({
	className,
	value,
	label,
	error,
	disabled,
	note,
	dateFormat = 'dd/MM/yyyy',
	onChange = () => {},
	...rest
}) {
	let classes = [
		'ui-form-element',
		'ui-datepicker',
		className,
		error && 'ui-datepicker-error',
		disabled && 'ui-datepicker-disabled'
	].filter(Boolean).join(' ');
	let dpValue = (value && typeof value === 'string') ? new Date(value) : value;

	return (
		<div className={classes}>
			<label className="ui-form-element-label">
				<div>{label}</div>
				<DP
					{...rest}
					selected={dpValue}
					customInput={<CustomInput placeholder={rest.placeholder ?? ''} />}
					placeholder={rest.placeholder}
					dateFormat={dateFormat}
					disabled={disabled}
					onChange={onChange}
					shouldCloseOnSelect
					showPopperArrow={false}
					portalId="ui-datepicker"
					calendarClassName="ui-datepicker-calendar"
				/>
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

export default DatePicker;

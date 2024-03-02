import React from 'react';
import './checkbox.css';

import Icon from '../icon/icon';

function Checkbox({
	value = false,
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
		'ui-checkbox',
		className,
		error && 'ui-checkbox-error',
		disabled && 'ui-checkbox-disabled'
	].filter(Boolean).join(' ');

	return (
		<div className={classes}>
			<label className="ui-form-element-label">
				<div className="ui-checkbox-replacer">
					<input
						{...rest}
						disabled={disabled}
						type="checkbox"
						checked={value}
						onChange={e => onChange(e.target.checked, e)}
						style={{ visibility: 'hidden' }}
					/>
					<div>
						{value && (
							<Icon name="check" />
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

export default Checkbox;

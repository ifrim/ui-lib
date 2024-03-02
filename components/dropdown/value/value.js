import React from 'react';

import './value.css';
import Icon from '../../icon/icon';

function Value({placeholder, value, mode, showIcon, sendMessage}) {
	let displayValue = mode === 'menu' ? value : value.name;
	return (
		<div
			className={`ui-dropdown-value ${!displayValue ? 'has-placeholder' : ''}`}
			onClick={() => sendMessage('value.click')}
		>
			{displayValue ? displayValue : placeholder}
			{showIcon && <Icon name="angle-down" />}
		</div>
	);
}

export default Value;

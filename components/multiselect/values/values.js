import React from 'react';

import './values.css';
import Icon from '../../icon/icon';
import Tag from '../../tag/tag.js';

function Values({placeholder, inputValue, values, tags, showIcon, disabled, sendMessage}) {
	let classes = [
		'ui-multiselect-value',
		values.length === 0 && 'has-placeholder',
		tags && 'as-tags'
	].filter(Boolean).join(' ');

	return (
		<div
			className={classes}
			onClick={() => sendMessage('values.click')}
		>
			{values.length ? (
				tags ? (
					values.map(v => (
						<Tag
							key={v.name}
							size="sm"
							onClose={e => {
								e.stopPropagation();
								sendMessage('value.remove', { id: v.id });
							}}
						>
							{v.name}
						</Tag>
					))
				) :
					values.map(v => v.name).join(', ')
			) : placeholder}
			{!disabled && (
				<input
					className="ui-multiselect-value-input"
					value={inputValue}
					onClick={e => e.stopPropagation()}
					onFocus={() => sendMessage('input.focus')}
					onBlur={() => sendMessage('input.blur')}
					onChange={e => sendMessage('input.change', { value: e.target.value })}
					onKeyDown={e => {
						if (e.key === 'Enter') sendMessage('input.submit');
						if (e.key === 'ArrowDown') sendMessage('input.arrow-down');
						if (e.key === 'ArrowUp') sendMessage('input.arrow-up');
					}}
				/>
			)}
			{showIcon && <Icon name="angle-down" />}
		</div>
	);
}

export default Values;

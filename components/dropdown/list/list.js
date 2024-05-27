import React from 'react';

import './list.css';

function List({ value, items, sendMessage }) {
	return (
		<div className="ui-dropdown-list">
			{items.map(item => (
				<div
					key={item.id}
					className={getItemClasses(item).join(' ')}
					onClick={() => sendMessage('list.item-click', { id: item.id })}
					onMouseDown={() => sendMessage('list.item-mousedown', { id: item.id })}
				>
					{item.name}
				</div>
			))}
		</div>
	);

	function getItemClasses(item) {
		return [
			'ui-dropdown-list-item',
			item.className,
			value.id === item.id && 'selected'
		].filter(Boolean);
	}
}

export default List;

import React from 'react';

import './list.css';

function List({values, items, highlightedItemId, sendMessage}) {
	return (
		<div className="ui-multiselect-list">
			{items.length ? items.map(item => (
				<div
					key={item.id}
					className={getItemClasses(item).join(' ')}
					onMouseDown={() => sendMessage('list.item-click', { id: item.id })}
					onMouseEnter={() => sendMessage('list.item-hover', { id: item.id })}
				>
					{item.name}
				</div>
			)) : (
				<span>No items</span>
			)}
		</div>
	);

	function getItemClasses(item) {
		return [
			'ui-multiselect-list-item',
			values.some(v => v.id === item.id) && 'selected',
			item.id === highlightedItemId && 'is-highlighted'
		].filter(Boolean);
	}
}

export default List;

import React from 'react';

function Navigation({ tabs, activeTab, sendMessage }) {
	return (
		<div className="ui-tabs-navigation">
			{tabs.map(t => (
				<div
					key={t.name}
					className={`ui-tabs-navigation-item ${activeTab === t.name ? 'is-active' : ''}`}
					onClick={() => sendMessage('nav.item-click', { name: t.name })}
				>
					{t.label}
				</div>
			))}
		</div>
	);
}

export default Navigation;

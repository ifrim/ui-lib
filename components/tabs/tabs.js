import React, { useState } from 'react';

import './tabs.css';
import context from './context';
import Navigation from './navigation';

function Tabs({ children, className, activeTab: activeTabProp }) {
	let [tabs, setTabs] = useState([]);
	let [activeTab, setActiveTab] = useState(activeTabProp);
	let classes = [
		'ui-tabs',
		className
	].filter(Boolean).join(' ');

	function sendMessage(name, data) {
		if (name === 'register') {
			let isNameRegistered = tabs.some(t => t.name === data.name);
			if (!isNameRegistered) setTabs(ts => [...ts, data]);
		}
		if (name === 'nav.item-click') setActiveTab(data.name);
	}

	function getTabByName(name) {
		return tabs.find(t => t.name === name);
	}

	return (
		<div className={classes}>
			<Navigation tabs={tabs} activeTab={activeTab} sendMessage={sendMessage} />
			<div className="ui-tabs-content">
				<context.Provider value={{ activeTab, getTabByName, sendMessage }}>
					{children}
				</context.Provider>
			</div>
		</div>
	);
}

export default Tabs;

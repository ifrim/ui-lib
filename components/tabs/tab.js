import React, { useContext, useEffect } from 'react';

import context from './context';

function Tab({ children, name, label, hidden }) {
	let { activeTab, getTabByName, sendMessage } = useContext(context);
	let tab = getTabByName(name);

	useEffect(() => {
		sendMessage('register', { name, label, isVisible: !hidden });
	}, [name, label, hidden, sendMessage]);

	if (activeTab !== name || !tab?.isVisible) return null;

	return (
		<div className="ui-tab">
			{children}
		</div>
	);
}

export default Tab;

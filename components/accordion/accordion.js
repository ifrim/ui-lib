import React from 'react';

import './accordion.css';
import accordionContext from './accordion-context';
import Item from './item/item';

function Accordion({ children, className, singleExpand, fullHeaderTrigger, triggerIcon, triggerPosition = 'right' }) {
	let items = new Map();

	function onMessage(name, data) {
		if (name === 'item.register') items.set(data.ref, data.sendMessage);
		if (name === 'item.header.click') {
			items.forEach((sendMessage, ref) => {
				if (ref !== data.ref) sendMessage('close');
			});
		}
	}

	return (
		<div className={['ui-accordion', className].filter(Boolean).join(' ')}>
			<accordionContext.Provider
				value={{ singleExpand, triggerIcon, triggerPosition, fullHeaderTrigger, sendMessage: onMessage }}
			>
				{children}
			</accordionContext.Provider>
		</div>
	);
}

Accordion.Item = Item;

export default Accordion;

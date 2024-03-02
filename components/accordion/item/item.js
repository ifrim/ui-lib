import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import Collapsible from '../../collapsible/collapsible';
import Icon from '../../icon/icon';
import accordionContext from '../accordion-context';
import itemContext from './item-context';

function Item({ children, isOpened: isOpenedProp }) {
	let itemRef = useRef();
	let { singleExpand, sendMessage } = useContext(accordionContext);
	let [isOpened, setIsOpened] = useState(isOpenedProp);

	let onMessage = useCallback(name => {
		if (name === 'close') setIsOpened(false);
		if (name === 'header.click') {
			setIsOpened(!isOpened);
			if (singleExpand) {
				sendMessage('item.header.click', { ref: itemRef });
			}
		}
	}, [isOpened, singleExpand, sendMessage]);

	let context = useMemo(() => ({ isOpened, sendMessage: onMessage }), [isOpened, onMessage]);

	useEffect(() => {
		sendMessage('item.register', { ref: itemRef, sendMessage: onMessage });
	}, [onMessage, sendMessage]);

	return (
		<div className="ui-accordion-item">
			<itemContext.Provider value={context}>
				{children}
			</itemContext.Provider>
		</div>
	);
}

function Header({ children }) {
	let { triggerIcon, triggerPosition, fullHeaderTrigger } = useContext(accordionContext);
	let { isOpened, sendMessage } = useContext(itemContext);

	let trigger = (
		<div className="ui-accordion-item-header-trigger" onClick={() => sendMessage('header.click')}>
			{triggerIcon
				? triggerIcon(isOpened)
				: <Icon className={`${isOpened ? 'is-opened' : ''} trigger-icon`} name="caret-down" />
			}
		</div>
	);

	return (
		<div className="ui-accordion-item-header">
			{triggerPosition === 'left' && trigger}
			<div
				className={['ui-accordion-item-header-content', fullHeaderTrigger ? 'is-trigger' : ''].filter(Boolean).join(' ')}
				onClick={() => fullHeaderTrigger && sendMessage('header.click')}
			>
				{ children }
			</div>
			{triggerPosition === 'right' && trigger}
		</div>
	);
}

function Content({ children }) {
	let { isOpened } = useContext(itemContext);

	return (
		<Collapsible className="ui-accordion-item-content" isOpened={isOpened}>
			{children}
		</Collapsible>
	);
}

Item.Header = Header;
Item.Content = Content;

export default Item;
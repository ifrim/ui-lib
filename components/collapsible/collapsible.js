import React, { useEffect, useRef } from 'react';

import './collapsible.css';

function Collapsible({ children, className = '', isOpened }) {
	const COLLAPSE_CLASS = 'collapsed';
	let rootRef = useRef();

	useEffect(() => {
		let elem = rootRef.current;
		if (!elem) return;

		elem.style.height = '';
		elem.style.transition = 'none';

		let startHeight = window.getComputedStyle(elem).height;
		elem.classList[isOpened ? 'remove' : 'add'](COLLAPSE_CLASS);
		let endHeight = window.getComputedStyle(elem).height;
		elem.style.height = startHeight;

		requestAnimationFrame(() => {
			elem.style.transition = '';
			requestAnimationFrame(() => elem.style.height = endHeight);
		});

		function onTransitionEnd() {
			elem.style.height = '';
			elem.removeEventListener('transitionend', onTransitionEnd);
		}
		elem.addEventListener('transitionend', onTransitionEnd);

		let observer = new MutationObserver(() => elem.style.height = 'auto');
		observer.observe(elem, { attributes: false, childList: true, subtree: true });
		return () => observer.disconnect();
	}, [isOpened]);

	return (
		<div className={['ui-collapsible', className].filter(Boolean).join(' ')} ref={rootRef}>
			{children}
		</div>
	);
}

export default Collapsible;

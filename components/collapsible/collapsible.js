import React from 'react';

import './collapsible.css';

function Collapsible({ children, className = '', isOpened }) {
	const COLLAPSE_CLASS = 'collapsed';

	return (
		<div className={['ui-collapsible', className, !isOpened && COLLAPSE_CLASS].filter(Boolean).join(' ')}>
			<div style={{ minHeight: 0 }}>
				{children}
			</div>
		</div>
	);
}

export default Collapsible;

import React from 'react';

import './tag.css';
import Icon from '../icon/icon';

function Tag({ className, theme = 'default', size = 'md', onClose, children }) {
	let hasClose = typeof onClose === 'function';
	let classes = [
		'ui-tag',
		className,
    `size-${size}`,
    hasClose && 'has-close',
    ...theme.split(' ').map(t => `theme-${t}`)
	].filter(Boolean).join(' ');

	return (
		<div className={classes}>
			{children}
			{hasClose && (
				<Icon name="close" onClick={onClose} />
			)}
		</div>
	);
}

export default Tag;

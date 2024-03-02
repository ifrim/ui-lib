import React from 'react';
import './message.css';

function Message({ className, theme = 'default', children }) {
	let classes = [
		'ui-message',
		className,
		...theme.split(' ').map(t => `theme-${t}`)
	].filter(Boolean).join(' ');

	return (
		<div className={classes}>
			{children}
		</div>
	);
}

export default Message;

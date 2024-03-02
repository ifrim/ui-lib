import React, { forwardRef } from 'react';
import './button.css';

function Button({
	children,
	className = '',
	theme = 'default',
	size = 'md',
	...rest
}, ref) {
	let classes = [
		'ui-button',
		...theme.split(' ').map(t => `theme-${t}`),
    `size-${size}`,
    className
	].filter(Boolean).join(' ');

	return (
		<button ref={ref} type="button" {...rest} className={classes}>
			{children}
		</button>
	);
}

export default forwardRef(Button);

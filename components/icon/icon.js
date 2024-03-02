import React from 'react';
import './icon.css';

function Icon({ className, family, name, ...rest }) {
	let classes = [
		className,
		'ui-icon',
		family ?? 'fa-solid',
    `fa-${name}`
	].filter(Boolean);

	return (
		<i className={classes.join(' ')} {...rest} />
	);
}

export default Icon;

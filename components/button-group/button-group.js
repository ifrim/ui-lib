import React from 'react';
import './button-group.css';

function ButtonGroup({ children }) {
	return (
		<div className="ui-button-group">
			{children}
		</div>
	);
}

export default ButtonGroup;

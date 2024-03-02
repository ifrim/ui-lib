import React from 'react';
import { createRoot } from 'react-dom/client';
import './toast.css';

import Icon from '../icon/icon';

const DISPLAY_TIME_MS = 5000;
let container = null;

function addContainer() {
	container = document.createElement('div');
	container.classList.add('ui-toast-container');
	document.body.appendChild(container);
}

function removeContainer() {
	document.body.removeChild(container);
	container = null;
}

function removeToast(toastElement) {
	container.removeChild(toastElement);
	if (!container.hasChildNodes()) removeContainer();
}

function show(message, {theme = 'default'} = {}) {
	if (!container) addContainer();

	let toastElement = document.createElement('div');
	toastElement.classList.add('ui-toast', `theme-${theme}`);
	container.appendChild(toastElement);

	let timeoutId = setTimeout(removeToast, DISPLAY_TIME_MS, toastElement);
	let root = createRoot(toastElement);
	let displayMessage = typeof message === 'string' && theme === 'error' && message.indexOf('\n') !== -1
		? (
			<>
				<span>Some problems occured:</span>
				<ul className="ui-toast-message-list">
					{message.split('\n').map((m, mi) => (
						<li key={mi}>
							{m}
						</li>
					))}
				</ul>
			</>
		)
		: message;
	root.render(
		<>
			<div className="ui-toast-content" onClick={() => clearTimeout(timeoutId)}>
				{displayMessage}
			</div>
			<Icon
				className="ui-toast-close"
				name="xmark"
				onClick={() => {
					clearTimeout(timeoutId);
					removeToast(toastElement);
				}}
			/>
		</>
	);
}

function success(message, options) {
	show(message, {...options, theme: 'success'});
}

function error(message, options) {
	show(message, {...options, theme: 'error'});
}

function warning(message, options) {
	show(message, {...options, theme: 'warning'});
}

export default {
	show,
	success,
	error,
	warning
};

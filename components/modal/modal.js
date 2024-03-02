import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

function Modal({ opened = false, theme = 'default', buttons = [], onClose, children }) {
	if (!opened) return null;

	return (
		<>
			{createPortal(
				<div className="ui-modal-backdrop" onClick={onClose} />,
				document.querySelector('body'),
			)}
			{
				createPortal(
					<div className="ui-modal-wrapper">
						<div className={`ui-modal ui-modal-theme-${theme}`}>
							{children}
							{buttons.length !== 0 && (
								<div className="ui-modal-footer">
									{buttons.map((b, i) => (
										<Fragment key={i}>
											{b}
										</Fragment>
									))}
								</div>
							)}
						</div>
					</div>,
					document.querySelector('body')
				)
			}
		</>
	);
}

export default Modal;

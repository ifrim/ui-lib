import React, { useCallback, useEffect, useRef, useState } from 'react';

import './tooltip.css';
import FloatingContainer from '../floating-container/floating-container';

function Tooltip({
	render,
	className,
	theme = 'default',
	children,
	position = 'top',
}) {
	let [isOpened, setIsOpened] = useState(false);
	let wrapperRef = useRef(null);
	let tooltipRef = useRef(null);
	let activeEvents = {
		onMouseEnter: () => setIsOpened(true),
		onMouseLeave: () => setIsOpened(false),
		onFocus: () => setIsOpened(true),
		onBlur: () => setIsOpened(false),
	};

	let handleDocumentClick = useCallback((e) => {
		if (tooltipRef.current?.contains?.(e.target)) {
			return;
		}
		setIsOpened(false);
	}, []);

	useEffect(() => {
		document.addEventListener('click', handleDocumentClick, true);
		return () => document.removeEventListener('click', handleDocumentClick, true);
	}, [handleDocumentClick]);

	let classes = ['ui-tooltip', className, `theme-${theme}`].filter(Boolean).join(' ');
	return (
		<div
			className="ui-tooltip-wrapper"
			ref={wrapperRef}
			{...activeEvents}
		>
			{children}
			{isOpened && (
				<FloatingContainer
					className="ui-tooltip-floating-container"
					element={wrapperRef}
					forceDisplay={position}
					offset={20}
				>
					<div className={classes} ref={tooltipRef}>
						{render}
					</div>
				</FloatingContainer>
			)}
		</div>
	);
}

export default Tooltip;
import React, { useCallback, useEffect, useRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import './floating-container.css';

let int = v => Number.parseInt(v);

function FloatingContainer(props) {
	let {
		element,
		/** The size of the container.
		 * If `auto` the size will be determined by its contents.
		 * If `matchElement` it will take the width or the height of the element depending
		 * on the `displayAxis` prop.
		 * It can also be a function that returns a number representing the width
		 * or the height in pixels.
		 */
		size = 'auto',
		/**
		 * If `auto` the component will try to determine where to display the container relative to the
		 * element (top, bottom, left, right).
		 * It can also be one of top, bottom, left, right, to force the floating container to always be
		 * displayed in that position.
		 */
		forceDisplay = 'auto',
		/**
		 * It can be `vertical` or `horizontal`. It specifies the axis where
		 * it will be displayed when `forceDisplay` is `auto`.
		 */
		displayAxis = 'vertical',
		/**
		 * The distance between the element and the floating container.
		 * It can be positive or negative.
		 */
		offset = 0,
		/**
		 * The distance to move the floating container in the opposite axis of display.
		 * It can be positive or negative.
		 */
		offsetOppositeAxis = 0,
		className,
		children,
		showDropdownPointer = false,
		/**
		 * A reference for the container. Used in cases where you need some DOM
		 * control from outside the component.
		 */
		passedRef,
	} = props;
	let localRef = useRef(null);
	let floatingContainerRef = passedRef || localRef;
	let contentWrapperRef = useRef(null);
	let dropdownPointerRef = useRef(null);
	let requestAnimationRef = useRef(null);

	let determineDisplay = useCallback(() => {
		let target = element.current;
		let container = floatingContainerRef.current;
		if (!container) return displayAxis === 'vertical' ? 'bottom' : 'right';

		if (displayAxis === 'vertical') {
			let { top } = target.getBoundingClientRect();
			let windowHeight = window.innerHeight;
			let topSpace = top;
			let bottomSpace = windowHeight - top - target.offsetHeight;
			let hasBottomSpace = bottomSpace > container.scrollHeight;
			return hasBottomSpace || bottomSpace > topSpace ? 'bottom' : 'top';
		}

		let { left } = target.getBoundingClientRect();
		let windowWidth = window.innerWidth;
		let leftSpace = left;
		let rightSpace = windowWidth - left - target.offsetWidth;
		let hasRightSpace = rightSpace > container.offsetWidth;
		return hasRightSpace || rightSpace > leftSpace ? 'right' : 'left';
	}, [displayAxis, element, floatingContainerRef]);

	let adjustPosition = useCallback(() => {
		let display = forceDisplay !== 'auto' ? forceDisplay : determineDisplay();
		let target = element.current;
		let container = floatingContainerRef.current;

		if (!target || !container) return;

		let targetPosition = target.getBoundingClientRect();

		if (display === 'top') {
			let topPos = targetPosition.top - container.offsetHeight - offset;
			container.style.top = `${topPos}px`;
			let containerLeft = size === 'auto'
				? int(targetPosition.left + target.offsetWidth / 2 - container.offsetWidth / 2)
				: targetPosition.left;
			containerLeft += offsetOppositeAxis;
			container.style.left = `${containerLeft}px`;
			if (size === 'matchElement') {
				container.style.width = `${target.offsetWidth}px`;
			} else if (typeof size === 'function') {
				container.style.width = `${size(target.offsetWidth)}px`;
			}
			container.style.maxHeight = `${targetPosition.top - offset}px`;
		}

		if (display === 'bottom') {
			container.style.top = `${targetPosition.bottom + offset}px`;
			let containerLeft = size === 'auto'
				? int(targetPosition.left + target.offsetWidth / 2 - container.offsetWidth / 2)
				: targetPosition.left;
			containerLeft += offsetOppositeAxis;
			container.style.left = `${containerLeft}px`;
			if (size === 'matchElement') {
				container.style.width = `${target.offsetWidth}px`;
			} else if (typeof size === 'function') {
				container.style.width = `${size(target.offsetWidth)}px`;
			}
			container.style.maxHeight = `${window.innerHeight - targetPosition.bottom - offset}px`;
			if (showDropdownPointer) {
				dropdownPointerRef.current.style.left = `${targetPosition.left + target.offsetWidth / 2 - containerLeft - 5}px`;
			}
		}

		if (display === 'left') {
			let topPos = int(targetPosition.top + target.offsetHeight / 2 - container.offsetHeight / 2);
			container.style.top = size === 'auto'
				? `${topPos}px`
				: `${targetPosition.top}px`;
			container.style.left = `${targetPosition.left - container.offsetWidth - offset}px`;
			if (size === 'matchElement') {
				container.style.height = `${target.offsetHeight}px`;
			} else if (typeof size === 'function') {
				container.style.height = `${size(target.offsetHeight)}px`;
			}
			container.style.maxWidth = `${targetPosition.left - offset}px`;
		}

		if (display === 'right') {
			let topPos = int(targetPosition.top + target.offsetHeight / 2 - container.offsetHeight / 2);
			container.style.top = size === 'auto'
				? `${topPos}px`
				: `${targetPosition.top}px`;
			container.style.left = `${targetPosition.left + target.offsetWidth + offset}px`;
			if (size === 'matchElement') {
				container.style.height = `${target.offsetHeight}px`;
			} else if (typeof size === 'function') {
				container.style.height = `${size(target.offsetHeight)}px`;
			}
			container.style.maxWidth = `${window.innerWidth - targetPosition.left - target.offsetWidth - offset}px`;
		}
	}, [determineDisplay, element, floatingContainerRef, forceDisplay, offset, offsetOppositeAxis, showDropdownPointer, size]);

	useEffect(() => {
		requestAnimationRef.current = window.requestAnimationFrame(function schedulePositionUpdate() {
			adjustPosition();
			requestAnimationRef.current = window.requestAnimationFrame(schedulePositionUpdate);
		});
		return () => cancelAnimationFrame(requestAnimationRef.current);
	}, [adjustPosition]);

	return createPortal(
		<div
			className={`floating-container ${className || ''}`}
			ref={floatingContainerRef}
		>
			{showDropdownPointer && (
				<div className="floating-container__dropdown-pointer" ref={dropdownPointerRef}></div>
			)}
			<div
				className="floating-container__content-wrapper"
				ref={contentWrapperRef}
			>
				{children}
			</div>
		</div>,
		document.querySelector('body'),
	);
}

export default forwardRef((props, ref) => <FloatingContainer {...props} passedRef={ref} />); // eslint-disable-line react/display-name
import React, { useRef, useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import Button from '../../../../components/button/button';
import Input from '../../../../components/input/input';
import Radio from '../../../../components/radio/radio';
import FloatingContainer from '../../../../components/floating-container/floating-container';

let initialState = {
	isOpened: false,
	size: 'auto',
	offset: 0,
	forceDisplay: 'auto',
	displayAxis: 'vertical'
};

function PageFloatinContainer() {
	let [state, setState] = useState(initialState);
	let el = useRef(null);
	let updateState = newState => setState({...state, ...newState, isOpened: false});
	let updateStateProp = prop => v => updateState({ [prop]: v });
	let onSizeChange = updateStateProp('size');
	let onForceDisplayChange = updateStateProp('forceDisplay');
	let onAxisChange = updateStateProp('displayAxis');

	return (
		<div className="page">
			<header>
				<h1>Floating Container</h1>
			</header>
			<div className="page-body">
				<p>
          The floating container is a <em>helper</em> component.
          It displays a container relative to another element on the page.
          It can be used for components like dropdowns, tooltips etc.
				</p>

				<p>
          The <strong>offset</strong> option specifies the distance between the floating container and the element.
				</p>

				<p>
          The <strong>size</strong> option can be <em>auto</em> or <em>matchElement</em>.
					<em>auto</em> means the floating container&apos;s size will be based on its contents.
					<em>matchElement</em> means the floating container&apos;s size will match the width or height of the element
          depending on whether the relative display is on the horizontal axis or the vertical one.
				</p>

				<p>
          The <strong>display</strong> option can be <em>auto</em>, when the position is determined based on the size of the content and the space available around the element.
          For example if the display axis is set to vertical by default it will try to position the container under the element. But if there is no space it will position it above the element.
          The other options (<em>top</em>, <em>bottom</em>, <em>left</em>, <em>right</em>) will force the display of the floating container in that direction relative to the element.
				</p>

				<p>
          The <strong>display axis</strong> is relevant only when the <strong>display</strong> option is set to <em>auto</em>.
          It determines the preffered axis where to display the floating container, based on the contents and the space available.
				</p>

				<br /><br />

				<label>Size:</label>
				<div className="radio-group">
					<Radio
						name="size"
						label="auto"
						value="auto"
						checked={state.size === 'auto'}
						onChange={onSizeChange}
					/>
					<Radio
						name="size"
						label="matchElement"
						value="matchElement"
						checked={state.size === 'matchElement'}
						onChange={onSizeChange}
					/>
				</div>

				<br /><br />

				<Input
					label="Offset"
					type="number"
					value={state.offset}
					onChange={v => updateState({ offset: Number(v) })}
				/>

				<br /><br />

				<label>Display:</label>
				<div className="radio-group">
					<Radio
						name="forceDisplay"
						label="auto"
						value="auto"
						checked={state.forceDisplay === 'auto'}
						onChange={onForceDisplayChange}
					/>
					<Radio
						name="forceDisplay"
						label="top"
						value="top"
						checked={state.forceDisplay === 'top'}
						onChange={onForceDisplayChange}
					/>
					<Radio
						name="forceDisplay"
						label="bottom"
						value="bottom"
						checked={state.forceDisplay === 'bottom'}
						onChange={onForceDisplayChange}
					/>
					<Radio
						name="forceDisplay"
						label="left"
						value="left"
						checked={state.forceDisplay === 'left'}
						onChange={onForceDisplayChange}
					/>
					<Radio
						name="forceDisplay"
						label="right"
						value="right"
						checked={state.forceDisplay === 'right'}
						onChange={onForceDisplayChange}
					/>
				</div>

				<br /><br />

				<label>Display axis (relevant for display = &apos;auto&apos;):</label>
				<div className="radio-group">
					<Radio
						name="displayAxis"
						label="vertical"
						value="vertical"
						checked={state.displayAxis === 'vertical'}
						onChange={onAxisChange}
						disabled={state.forceDisplay !== 'auto'}
					/>
					<Radio
						name="displayAxis"
						label="horizontal"
						value="horizontal"
						checked={state.displayAxis === 'horizontal'}
						onChange={onAxisChange}
						disabled={state.forceDisplay !== 'auto'}
					/>
				</div>

				<br /><br />

				<div
					ref={el}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '400px',
						height: '200px',
						backgroundColor: '#1C74BB'
					}}
				>
					<Button onClick={() => setState({ ...state, isOpened: !state.isOpened })}>{state.isOpened ? 'Close' : 'Open'}</Button>
				</div>
				{state.isOpened && (
					<FloatingContainer
						element={el}
						size={state.size}
						offset={state.offset}
						forceDisplay={state.forceDisplay}
						displayAxis={state.displayAxis}
					>
						<div
							style={{
								backgroundColor: '#6DDC7C',
								padding: '20px',
								height: '100%'
							}}
						>
              The content of the floating container component can be anything.
						</div>
					</FloatingContainer>
				)}
			</div>
			<br /><br />
			<CodeBlock
				text={
`<div ref={el}>
  <Button onClick={() => setState({ ...state, isOpened: !state.isOpened })}>
    {state.isOpened ? 'Close' : 'Open'}
  </Button>
</div>

{state.isOpened && (
  <FloatingContainer
    element={el}
    size={state.size}
    offset={state.offset}
    forceDisplay={state.forceDisplay}
    displayAxis={state.displayAxis}
  >
    <div>
      The content of the floating container component can be anything.
    </div>
  </FloatingContainer>
)}`}
				language="jsx"
			/>
		</div>
	);
}

export default PageFloatinContainer;
import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import Input from '../../../../components/input/input';

function PageInput() {
	let [inputValue, setInputValue] = useState('');

	return (
		<div className="page">
			<header>
				<h1>Input</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Regular state</h3>
					<div className="section-content">
						<Input
							label="First Name"
							placeholder="Enter first name..."
							value={inputValue}
							onChange={setInputValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [inputValue, setInputValue] = useState('');

<Input
  label="First Name"
  placeholder="Enter first name..."
  value={inputValue}
  onChange={setInputValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Input with note</h3>
					<div className="section-content">
						<Input
							label="First Name"
							placeholder="Enter first name..."
							value={inputValue}
							note="This is what you need to know."
							onChange={setInputValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [inputValue, setInputValue] = useState('');

<Input
  label="First Name"
  placeholder="Enter first name..."
  value={inputValue}
  note="This is what you need to know."
  onChange={setInputValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Error state</h3>
					<div className="section-content">
						<Input
							label="First Name"
							placeholder="Enter first name..."
							value={inputValue}
							error="Something went wrong"
							onChange={setInputValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [inputValue, setInputValue] = useState('');

<Input
  label="First Name"
  placeholder="Enter first name..."
  value={inputValue}
  error="Something went wrong"
  onChange={setInputValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Disabled state</h3>
					<div className="section-content">
						<Input
							label="First Name"
							placeholder="Enter first name..."
							value={inputValue}
							disabled
						/>
						<br /><br />
						<CodeBlock
							text={
`let [inputValue, setInputValue] = useState('');

<Input
  label="First Name"
  placeholder="Enter first name..."
  value={inputValue}
  disabled
/>`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageInput;
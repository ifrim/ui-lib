import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import Textarea from '../../../../components/textarea/textarea';

function PageTextarea() {
	let [textareaValue, setTextareaValue] = useState('');

	return (
		<div className="page">
			<header>
				<h1>Textarea</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Regular state</h3>
					<div className="section-content">
						<Textarea
							label="Description"
							placeholder="Enter description..."
							value={textareaValue}
							onChange={setTextareaValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [textareaValue, setTextareaValue] = useState('');

<Textarea
  label="Description"
  value={textareaValue}
  onChange={setTextareaValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Textarea with note</h3>
					<div className="section-content">
						<Textarea
							label="Description"
							placeholder="Enter description..."
							value={textareaValue}
							note="go a couple of lines"
							onChange={setTextareaValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [textareaValue, setTextareaValue] = useState('');

<Textarea
  label="Description"
  value={textareaValue}
  note="go a couple of lines"
  onChange={setTextareaValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Error state</h3>
					<div className="section-content">
						<Textarea
							label="Description"
							placeholder="Enter description..."
							value={textareaValue}
							error="not cool like this"
							onChange={setTextareaValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [textareaValue, setTextareaValue] = useState('');

<Textarea
  label="Description"
  value={textareaValue}
  error="not cool like this"
  onChange={setTextareaValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Disabled state</h3>
					<div className="section-content">
						<Textarea
							label="Description"
							placeholder="Enter description..."
							value={textareaValue}
							onChange={setTextareaValue}
							disabled
						/>
						<br /><br />
						<CodeBlock
							text={
`let [textareaValue, setTextareaValue] = useState('');

<Textarea
  label="Description"
  value={textareaValue}
  onChange={setTextareaValue}
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

export default PageTextarea;
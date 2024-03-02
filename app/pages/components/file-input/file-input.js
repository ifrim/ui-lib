import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import FileInput from '../../../../components/file-input/file-input';

function PageFileInput() {
	let [files, setFiles] = useState([]);

	return (
		<div className="page">
			<header>
				<h1>File Input</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Regular state</h3>
					<div className="section-content">
						<FileInput
							label="First Name"
							value={files}
							placeholder="Enter first name..."
							onChange={setFiles}
						/>
						<br /><br />
						<CodeBlock
							text={
`<FileInput
  label="First Name"
  value={files}
  placeholder="Enter first name..."
  onChange={setFiles}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Input with note</h3>
					<div className="section-content">
						<FileInput
							label="First Name"
							value={files}
							placeholder="Enter first name..."
							note="This is what you need to know."
							onChange={setFiles}
						/>
						<br /><br />
						<CodeBlock
							text={
`<FileInput
  label="First Name"
  value={files}
  placeholder="Enter first name..."
  note="This is what you need to know."
  onChange={setFiles}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Error state</h3>
					<div className="section-content">
						<FileInput
							label="First Name"
							value={files}
							placeholder="Enter first name..."
							error="Something went wrong"
							onChange={setFiles}
						/>
						<br /><br />
						<CodeBlock
							text={
`<FileInput
  label="First Name"
  value={files}
  placeholder="Enter first name..."
  error="Something went wrong"
  onChange={setFiles}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Disabled state</h3>
					<div className="section-content">
						<FileInput
							label="First Name"
							value={files}
							placeholder="Enter first name..."
							disabled
						/>
						<br /><br />
						<CodeBlock
							text={
`<FileInput
  label="First Name"
  value={files}
  placeholder="Enter first name..."
  disabled
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Can choose multiple files at once</h3>
					<div className="section-content">
						<FileInput
							label="First Name"
							value={files}
							placeholder="Enter first name..."
							onChange={setFiles}
							multiple
						/>
						<br /><br />
						<CodeBlock
							text={
`<FileInput
  label="First Name"
  value={files}
  placeholder="Enter first name..."
  onChange={setFiles}
  multiple
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Can show a preview of the selected files</h3>
					<div className="section-content">
						<FileInput
							label="First Name"
							value={files}
							placeholder="Enter first name..."
							onChange={setFiles}
							preview
						/>
						<br /><br />
						<CodeBlock
							text={
`<FileInput
  label="First Name"
  value={files}
  placeholder="Enter first name..."
  onChange={setFiles}
  preview
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Multiple + preview</h3>
					<div className="section-content">
						<FileInput
							label="First Name"
							value={files}
							placeholder="Enter first name..."
							onChange={setFiles}
							multiple
							preview
						/>
						<br /><br />
						<CodeBlock
							text={
`<FileInput
  label="First Name"
  value={files}
  placeholder="Enter first name..."
  onChange={setFiles}
  multiple
  preview
/>`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageFileInput;
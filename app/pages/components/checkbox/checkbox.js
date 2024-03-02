import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import Checkbox from '../../../../components/checkbox/checkbox';

function PageCheckbox() {
	let [checkboxValue, setCheckboxValue] = useState(false);

	return (
		<div className="page">
			<header>
				<h1>Checkbox</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Regular state</h3>
					<div className="section-content">
						<Checkbox
							label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
							value={checkboxValue}
							onChange={setCheckboxValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [checkboxValue, setCheckboxValue] = useState(false);

<Checkbox
  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  value={checkboxValue}
  onChange={setCheckboxValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Checkbox with note</h3>
					<div className="section-content">
						<Checkbox
							label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
							value={checkboxValue}
							note="You must check to continue."
							onChange={setCheckboxValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [checkboxValue, setCheckboxValue] = useState(false);

<Checkbox
  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  value={checkboxValue}
  note="You must check to continue."
  onChange={setCheckboxValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Error state</h3>
					<div className="section-content">
						<Checkbox
							label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
							value={checkboxValue}
							error="You must check this"
							onChange={setCheckboxValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [checkboxValue, setCheckboxValue] = useState(false);

<Checkbox
  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  value={checkboxValue}
  error="You must check this"
  onChange={setCheckboxValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Disabled state</h3>
					<div className="section-content">
						<Checkbox
							label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
							value={checkboxValue}
							onChange={setCheckboxValue}
							disabled
						/>
						<br /><br />
						<CodeBlock
							text={
`let [checkboxValue, setCheckboxValue] = useState(false);

<Checkbox
  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  value={checkboxValue}
  onChange={setCheckboxValue}
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

export default PageCheckbox;
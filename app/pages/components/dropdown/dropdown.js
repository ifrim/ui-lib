import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import Dropdown from '../../../../components/dropdown/dropdown';

function PageDropdown() {
	let items = [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}];
	let [dropdownValue, setDropdownValue] = useState(items[1]);

	return (
		<div className="page">
			<header>
				<h1>Dropdown</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Regular state</h3>
					<div className="section-content">
						<Dropdown
							label="Pick Something"
							value={dropdownValue}
							items={items}
							onChange={setDropdownValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let items = [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}];
let [dropdownValue, setDropdownValue] = useState(items[1]);

<Dropdown
  label="Pick Something"
  value={dropdownValue}
  items={items}
  onChange={setDropdownValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Dropdown with note</h3>
					<div className="section-content">
						<Dropdown
							label="Pick Something"
							value={dropdownValue}
							items={items}
							note="which one will it be?"
							onChange={setDropdownValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let items = [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}];
let [dropdownValue, setDropdownValue] = useState(items[1]);

<Dropdown
  label="Pick Something"
  value={dropdownValue}
  items={items}
  note="which one will it be?"
  onChange={setDropdownValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Error state</h3>
					<div className="section-content">
						<Dropdown
							label="Pick Something"
							value={dropdownValue}
							items={items}
							error="Something went wrong!"
							onChange={setDropdownValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let items = [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}];
let [dropdownValue, setDropdownValue] = useState(items[1]);

<Dropdown
  label="Pick Something"
  value={dropdownValue}
  items={items}
  error="Something went wrong!"
  onChange={setDropdownValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Disabled state</h3>
					<div className="section-content">
						<Dropdown
							label="Pick Something"
							value={dropdownValue}
							items={items}
							onChange={setDropdownValue}
							disabled
						/>
						<br /><br />
						<CodeBlock
							text={
`let items = [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}];
let [dropdownValue, setDropdownValue] = useState(items[1]);

<Dropdown
  label="Pick Something"
  value={dropdownValue}
  items={items}
  onChange={setDropdownValue}
  disabled
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>List items can have custom classes</h3>
					<div className="section-content">
						<Dropdown
							label="Pick Something"
							value={dropdownValue}
							items={items.map(i => ({ ...i, className: `item-${i.id}` }))}
							onChange={setDropdownValue}
						/>
						<br /><br />
						<CodeBlock
							text={
				`let items = [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}];
				let [dropdownValue, setDropdownValue] = useState(items[1]);

				<Dropdown
				label="Pick Something"
				value={dropdownValue}
				items={items}
				onChange={setDropdownValue}
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

export default PageDropdown;
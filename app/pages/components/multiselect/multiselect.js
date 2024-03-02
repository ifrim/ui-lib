import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import Multiselect from '../../../../components/multiselect/multiselect';

function PageMultiselect() {
	let items = [
		{id: 1, name: 'Item 1'},
		{id: 2, name: 'Item 2'},
		{id: 3, name: 'Item 3'},
		{id: 4, name: 'Item 4'},
		{id: 5, name: 'Item 5'},
	];
	let [multiselectValue, setMultiselectValue] = useState([items[1], items[3]]);

	return (
		<div className="page">
			<header>
				<h1>Multiselect</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Regular state</h3>
					<div className="section-content">
						<Multiselect
							label="Pick Something"
							placeholder="Pick something..."
							values={multiselectValue}
							items={items}
							onChange={setMultiselectValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let items = [
	{id: 1, name: 'Item 1'},
	{id: 2, name: 'Item 2'},
	{id: 3, name: 'Item 3'},
	{id: 4, name: 'Item 4'},
	{id: 5, name: 'Item 5'},
];
let [multiselectValue, setMultiselectValue] = useState([items[1], items[3]]);

<Multiselect
	label="Pick Something"
	placeholder="Pick something..."
	values={multiselectValue}
	items={items}
	onChange={setMultiselectValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Multiselect with note</h3>
					<div className="section-content">
						<Multiselect
							label="Pick Something"
							placeholder="Pick something..."
							values={multiselectValue}
							items={items}
							note="which one will it be?"
							onChange={setMultiselectValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`<Multiselect
	label="Pick Something"
	placeholder="Pick something..."
	values={multiselectValue}
	items={items}
	note="which one will it be?"
	onChange={setMultiselectValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Error state</h3>
					<div className="section-content">
						<Multiselect
							label="Pick Something"
							placeholder="Pick something..."
							values={multiselectValue}
							items={items}
							error="Something went wrong!"
							onChange={setMultiselectValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`<Multiselect
	label="Pick Something"
	placeholder="Pick something..."
	values={multiselectValue}
	items={items}
	error="Something went wrong!"
	onChange={setMultiselectValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Disabled state</h3>
					<div className="section-content">
						<Multiselect
							label="Pick Something"
							placeholder="Pick something..."
							values={multiselectValue}
							items={items}
							onChange={setMultiselectValue}
							disabled
						/>
						<br /><br />
						<CodeBlock
							text={
`<Multiselect
	label="Pick Something"
	placeholder="Pick something..."
	values={multiselectValue}
	items={items}
	onChange={setMultiselectValue}
	disabled
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Strict mode</h3>
					<p>Only allow to select items from the list</p>
					<div className="section-content">
						<Multiselect
							label="Pick Something"
							placeholder="Pick something..."
							values={multiselectValue}
							items={items}
							strict
							onChange={setMultiselectValue}
							disabled
						/>
						<br /><br />
						<CodeBlock
							text={
`<Multiselect
	label="Pick Something"
	placeholder="Pick something..."
	values={multiselectValue}
	items={items}
	strict
	onChange={setMultiselectValue}
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

export default PageMultiselect;
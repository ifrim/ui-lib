import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import DatePicker from '../../../../components/datepicker/datepicker';

function PageDatepicker() {
	let [datepickerValue, setDatepickerValue] = useState(Date.now());

	return (
		<div className="page">
			<header>
				<h1>Input</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Regular state</h3>
					<div className="section-content">
						<DatePicker
							value={datepickerValue}
							label="Date of Birth"
							placeholderText="Enter date..."
							onChange={setDatepickerValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [datepickerValue, setDatepickerValue] = useState(Date.now());

<DatePicker
  value={datepickerValue}
  label="Date of Birth"
  onChange={setDatepickerValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Datepicker with note</h3>
					<div className="section-content">
						<DatePicker
							value={datepickerValue}
							label="Date of Birth"
							placeholderText="Enter date..."
							note="pick any date"
							onChange={setDatepickerValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [datepickerValue, setDatepickerValue] = useState(Date.now());

<DatePicker
  value={datepickerValue}
  label="Date of Birth"
  note="pick any date"
  onChange={setDatepickerValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Error state</h3>
					<div className="section-content">
						<DatePicker
							value={datepickerValue}
							label="Date of Birth"
							placeholderText="Enter date..."
							error="you are not old enough"
							onChange={setDatepickerValue}
						/>
						<br /><br />
						<CodeBlock
							text={
`let [datepickerValue, setDatepickerValue] = useState(Date.now());

<DatePicker
  value={datepickerValue}
  label="Date of Birth"
  error="you are not old enough"
  onChange={setDatepickerValue}
/>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Disabled state</h3>
					<div className="section-content">
						<DatePicker
							value={datepickerValue}
							label="Date of Birth"
							placeholderText="Enter date..."
							onChange={setDatepickerValue}
							disabled
						/>
						<br /><br />
						<CodeBlock
							text={
`let [datepickerValue, setDatepickerValue] = useState(Date.now());

<DatePicker
  value={datepickerValue}
  label="Date of Birth"
  onChange={setDatepickerValue}
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

export default PageDatepicker;

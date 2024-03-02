import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import Radio from '../../../../components/radio/radio';

function PageRadio() {
	let [radioAValue, setRadioAValue] = useState('');
	let [radioBValue, setRadioBValue] = useState('');

	function onRadioChange(val, e) {
		if(e.target.name === 'opt-a') setRadioAValue(val);
		if(e.target.name === 'opt-b') setRadioBValue(val);
	}

	return (
		<div className="page">
			<header>
				<h1>Radio</h1>
			</header>
			<div className="page-body">
				<section>
					<div className="section-content">
						<Radio
							name="opt-a"
							label="choose the other option!"
							value="a1"
							checked={radioAValue === 'a1'}
							error={radioAValue === 'a1' ? 'This option is not good!' : ''}
							onChange={onRadioChange}
						/>
						<Radio
							name="opt-a"
							label="choose this one!"
							value="a2"
							checked={radioAValue === 'a2'}
							onChange={onRadioChange}
						/>
						<br /><br />
						<CodeBlock
							text={
`<Radio
  name="opt-a"
  label="choose the other option!"
  value="a1"
  checked={radioAValue === 'a1'}
  error={radioAValue === 'a1' ? 'This option is not good!' : ''}
  onChange={onRadioChange}
/>
<Radio
  name="opt-a"
  label="choose this one!"
  value="a2"
  checked={radioAValue === 'a2'}
  onChange={onRadioChange}
/>`}
							language="jsx"
						/>

						<br /><br /><br />

						<Radio
							name="opt-b"
							label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
							value="b1"
							checked={radioBValue === 'b1'}
							disabled
						/>
						<Radio
							name="opt-b"
							label="Disabled radio"
							value="b2"
							checked={radioBValue === 'b2'}
							disabled
						/>
						<br /><br />
						<CodeBlock
							text={
`<Radio
  name="opt-b"
  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  value="b1"
  checked={radioBValue === 'b1'}
  disabled
/>
<Radio
  name="opt-b"
  label="Disabled radio"
  value="b2"
  checked={radioBValue === 'b2'}
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

export default PageRadio;
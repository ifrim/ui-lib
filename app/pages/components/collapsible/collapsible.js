import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import Button from '../../../../components/button/button';
import Collapsible from '../../../../components/collapsible/collapsible';

function PageButton() {
	let [isOpened, setIsOpened] = useState(false);
	return (
		<div className="page">
			<header>
				<h1>Collapsible</h1>
			</header>
			<div className="page-body">
				<section>
					<div className="section-content">
						<Button onClick={() => setIsOpened(x => !x)}>
							click to {isOpened ? 'close' : 'open'}
						</Button>
						<br />
						<Collapsible isOpened={isOpened}>
							<br />Stuff here
							<br />on multiple lines
							<br />and another one
							<br />and yet another one
						</Collapsible>
						<br /><br />
						<CodeBlock
							text={
`<Collapsible isOpened={isOpened}>
	<br />Stuff here
	<br />on multiple lines
	<br />and another one
	<br />and yet another one
</Collapsible>`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageButton;

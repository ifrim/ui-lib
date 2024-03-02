import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Tabs from '../../../../components/tabs/tabs';
import Tab from '../../../../components/tabs/tab';

function PageTag() {
	return (
		<div className="page tag-page">
			<header>
				<h1>Tabs</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Basic</h3>
					<div className="section-content">
						<Tabs activeTab="t2">
							<Tab name="t1" label="Tab 1">this is tab 1</Tab>
							<Tab name="t2" label="Tab 2">tab 2</Tab>
						</Tabs>
						<br /><br />
						<CodeBlock
							text={
`<Tabs activeTab="t2">
	<Tab name="t1" label="Tab 1">this is tab 1</Tab>
	<Tab name="t2" label="Tab 2">tab 2</Tab>
</Tabs>`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageTag;

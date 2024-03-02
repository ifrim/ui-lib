import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Tooltip from '../../../../components/tooltip/tooltip';

function PageTooltip() {

	return (
		<div className="page">
			<header>
				<h1>Tooltip</h1>
			</header>
			<div className="page-body">
				<Tooltip render="Something to know about that!">
          show tooltip
				</Tooltip>
				<br /><br />
				<CodeBlock
					text={
`<Tooltip render="Something to know about that!">
  show tooltip
</Tooltip>`}
					language="jsx"
				/>

				<br /><br />

				<Tooltip render="Something to know about that!" position="right">
          show tooltip on the right
				</Tooltip>
				<br /><br />
				<CodeBlock
					text={
`<Tooltip render="Something to know about that!" position="right">
  show tooltip on the right
</Tooltip>`}
					language="jsx"
				/>

				<br /><br />

				<Tooltip render="Something to know about that!" theme="success">
          theme success
				</Tooltip>
				<br /><br />
				<CodeBlock
					text={
`<Tooltip render="Something to know about that!" theme="success">
  theme success
</Tooltip>`}
					language="jsx"
				/>

				<br /><br />

				<Tooltip render="Something to know about that!" theme="warning">
          theme warning
				</Tooltip>
				<br /><br />
				<CodeBlock
					text={
`<Tooltip render="Something to know about that!" theme="warning">
  theme warning
</Tooltip>`}
					language="jsx"
				/>

				<br /><br />

				<Tooltip render="Something to know about that!" theme="error">
          theme error
				</Tooltip>
				<br /><br />
				<CodeBlock
					text={
`<Tooltip render="Something to know about that!" theme="error">
  theme error
</Tooltip>`}
					language="jsx"
				/>
			</div>
		</div>
	);
}

export default PageTooltip;
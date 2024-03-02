import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Tag from '../../../../components/tag/tag';

function PageTag() {
	return (
		<div className="page tag-page">
			<header>
				<h1>Tag</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Regular</h3>
					<div className="section-content">
						<Tag theme="default">Default</Tag>
						<Tag theme="success">Success</Tag>
						<Tag theme="warning">Warning</Tag>
						<Tag theme="error">Error</Tag>
						<br /><br />
						<CodeBlock
							text={
`<Tag theme="default">Default</Tag>
<Tag theme="success">Success</Tag>
<Tag theme="warning">Warning</Tag>
<Tag theme="error">Error</Tag>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Outline</h3>
					<div className="section-content">
						<Tag theme="default outline">Default</Tag>
						<Tag theme="success outline">Success</Tag>
						<Tag theme="warning outline">Warning</Tag>
						<Tag theme="error outline">Error</Tag>
						<br /><br />
						<CodeBlock
							text={
`<Tag theme="default outline">Default</Tag>
<Tag theme="success outline">Success</Tag>
<Tag theme="warning outline">Warning</Tag>
<Tag theme="error outline">Error</Tag>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Square</h3>
					<div className="section-content">
						<Tag theme="default square">Default</Tag>
						<Tag theme="success square">Success</Tag>
						<Tag theme="warning square">Warning</Tag>
						<Tag theme="error square">Error</Tag>
						<br /><br />
						<CodeBlock
							text={
`<Tag theme="default square">Default</Tag>
<Tag theme="success square">Success</Tag>
<Tag theme="warning square">Warning</Tag>
<Tag theme="error square">Error</Tag>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Outline + Square</h3>
					<div className="section-content">
						<Tag theme="default outline square">Default</Tag>
						<Tag theme="success outline square">Success</Tag>
						<Tag theme="warning outline square">Warning</Tag>
						<Tag theme="error outline square">Error</Tag>
						<br /><br />
						<CodeBlock
							text={
`<Tag theme="default outline square">Default</Tag>
<Tag theme="success outline square">Success</Tag>
<Tag theme="warning outline square">Warning</Tag>
<Tag theme="error outline square">Error</Tag>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Size small</h3>
					<div className="section-content">
						<Tag theme="default" size="sm">Default</Tag>
						<Tag theme="success" size="sm">Success</Tag>
						<Tag theme="warning" size="sm">Warning</Tag>
						<Tag theme="error" size="sm">Error</Tag>
						<br /><br />
						<CodeBlock
							text={
`<Tag theme="default" size="sm">Default</Tag>
<Tag theme="success" size="sm">Success</Tag>
<Tag theme="warning" size="sm">Warning</Tag>
<Tag theme="error" size="sm">Error</Tag>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Size medium</h3>
					<div className="section-content">
						<Tag theme="default" size="md">Default</Tag>
						<Tag theme="success" size="md">Success</Tag>
						<Tag theme="warning" size="md">Warning</Tag>
						<Tag theme="error" size="md">Error</Tag>
						<br /><br />
						<CodeBlock
							text={
`<Tag theme="default" size="md">Default</Tag>
<Tag theme="success" size="md">Success</Tag>
<Tag theme="warning" size="md">Warning</Tag>
<Tag theme="error" size="md">Error</Tag>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Size large</h3>
					<div className="section-content">
						<Tag theme="default" size="lg">Default</Tag>
						<Tag theme="success" size="lg">Success</Tag>
						<Tag theme="warning" size="lg">Warning</Tag>
						<Tag theme="error" size="lg">Error</Tag>
						<br /><br />
						<CodeBlock
							text={
`<Tag theme="default" size="lg">Default</Tag>
<Tag theme="success" size="lg">Success</Tag>
<Tag theme="warning" size="lg">Warning</Tag>
<Tag theme="error" size="lg">Error</Tag>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>With close icon</h3>
					<div className="section-content">
						{ /* eslint-disable-next-line no-console */ }
						<Tag theme="default" size="lg" onClose={() => console.log('close Default')}>Default</Tag>
						{ /* eslint-disable-next-line no-console */ }
						<Tag theme="success" size="lg" onClose={() => console.log('close Success')}>Success</Tag>
						{ /* eslint-disable-next-line no-console */ }
						<Tag theme="warning" size="lg" onClose={() => console.log('close Warning')}>Warning</Tag>
						{ /* eslint-disable-next-line no-console */ }
						<Tag theme="error" size="lg" onClose={() => console.log('close Error')}>Error</Tag>
						<br /><br />
						<CodeBlock
							text={
`<Tag theme="default" onClose={() => console.log('close Default')}>Default</Tag>
<Tag theme="success" onClose={() => console.log('close Success')}>Success</Tag>
<Tag theme="warning" onClose={() => console.log('close Warning')}>Warning</Tag>
<Tag theme="error" onClose={() => console.log('close Error')}>Error</Tag>`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageTag;

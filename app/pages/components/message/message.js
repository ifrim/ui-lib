import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Message from '../../../../components/message/message';

function PageMessage() {
	return (
		<div className="page">
			<header>
				<h1>Message</h1>
			</header>
			<div className="page-body">
				<p>Displays messages to the user.</p>
				<br />
				<Message>Default message</Message>
				<br /><br />
				<CodeBlock
					text={'<Message>Default message</Message>'}
					language="jsx"
				/>
				<br />
				<Message theme="success">Success message</Message>
				<br /><br />
				<CodeBlock
					text={'<Message theme="success">Success message</Message>'}
					language="jsx"
				/>
				<br />
				<Message theme="warning">Warning message</Message>
				<br /><br />
				<CodeBlock
					text={'<Message theme="warning">Warning message</Message>'}
					language="jsx"
				/>
				<br />
				<Message theme="error">Error message</Message>
				<br /><br />
				<CodeBlock
					text={'<Message theme="error">Error message</Message>'}
					language="jsx"
				/>
			</div>
		</div>
	);
}

export default PageMessage;

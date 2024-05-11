import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Accordion from '../../../../components/accordion/accordion';

function PageButton() {
	return (
		<div className="page">
			<header>
				<h1>Button</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Independent expand</h3>
					<div className="section-content">
						<Accordion fullHeaderTrigger>
							<Accordion.Item isOpened>
								<Accordion.Item.Header>Item 1</Accordion.Item.Header>
								<Accordion.Item.Content>
									<br />Stuff here
									<br />on multiple lines
									<br />and another one
									<br />and yet another one
									<br /><br />
								</Accordion.Item.Content>
							</Accordion.Item>
							<Accordion.Item>
								<Accordion.Item.Header>Item 2</Accordion.Item.Header>
								<Accordion.Item.Content>
									<br />Stuff here
									<br />on multiple lines
									<br />and another one
									<br />and yet another one
									<br /><br />
								</Accordion.Item.Content>
							</Accordion.Item>
							<Accordion.Item>
								<Accordion.Item.Header>Item 3</Accordion.Item.Header>
								<Accordion.Item.Content>
									<br />Stuff here
									<br />on multiple lines
									<br />and another one
									<br />and yet another one
									<br /><br />
								</Accordion.Item.Content>
							</Accordion.Item>
						</Accordion>
						<br /><br />
						<CodeBlock
							text={
`<Accordion fullHeaderTrigger>
<Accordion.Item isOpened>
	<Accordion.Item.Header>Item 1</Accordion.Item.Header>
	<Accordion.Item.Content>
		<br />Stuff here
		<br />on multiple lines
		<br />and another one
		<br />and yet another one
		<br /><br />
	</Accordion.Item.Content>
</Accordion.Item>
<Accordion.Item>
	<Accordion.Item.Header>Item 2</Accordion.Item.Header>
	<Accordion.Item.Content>
		<br />Stuff here
		<br />on multiple lines
		<br />and another one
		<br />and yet another one
		<br /><br />
	</Accordion.Item.Content>
</Accordion.Item>
<Accordion.Item>
	<Accordion.Item.Header>Item 3</Accordion.Item.Header>
	<Accordion.Item.Content>
		<br />Stuff here
		<br />on multiple lines
		<br />and another one
		<br />and yet another one
		<br /><br />
	</Accordion.Item.Content>
</Accordion.Item>
</Accordion>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Single item expand</h3>
					<div className="section-content">
						<Accordion fullHeaderTrigger singleExpand>
							<Accordion.Item>
								<Accordion.Item.Header>&gt; Item 1</Accordion.Item.Header>
								<Accordion.Item.Content>
									<br />Stuff here
									<br />on multiple lines
									<br />and another one
									<br />and yet another one
									<br /><br />
								</Accordion.Item.Content>
							</Accordion.Item>
							<Accordion.Item isOpened>
								<Accordion.Item.Header>&gt; Item 2</Accordion.Item.Header>
								<Accordion.Item.Content>
									<br />Stuff here
									<br />on multiple lines
									<br />and another one
									<br />and yet another one
									<br /><br />
								</Accordion.Item.Content>
							</Accordion.Item>
							<Accordion.Item>
								<Accordion.Item.Header>&gt; Item 3</Accordion.Item.Header>
								<Accordion.Item.Content>
									<br />Stuff here
									<br />on multiple lines
									<br />and another one
									<br />and yet another one
									<br /><br />
								</Accordion.Item.Content>
							</Accordion.Item>
						</Accordion>
						<br /><br />
						<CodeBlock
							text={
`<Accordion fullHeaderTrigger singleExpand>
<Accordion.Item>
	<Accordion.Item.Header>&gt; Item 1</Accordion.Item.Header>
	<Accordion.Item.Content>
		<br />Stuff here
		<br />on multiple lines
		<br />and another one
		<br />and yet another one
		<br /><br />
	</Accordion.Item.Content>
</Accordion.Item>
<Accordion.Item isOpened>
	<Accordion.Item.Header>&gt; Item 2</Accordion.Item.Header>
	<Accordion.Item.Content>
		<br />Stuff here
		<br />on multiple lines
		<br />and another one
		<br />and yet another one
		<br /><br />
	</Accordion.Item.Content>
</Accordion.Item>
<Accordion.Item>
	<Accordion.Item.Header>&gt; Item 3</Accordion.Item.Header>
	<Accordion.Item.Content>
		<br />Stuff here
		<br />on multiple lines
		<br />and another one
		<br />and yet another one
		<br /><br />
	</Accordion.Item.Content>
</Accordion.Item>
</Accordion>`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageButton;

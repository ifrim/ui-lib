import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Button from '../../../../components/button/button';

function PageButton() {
	return (
		<div className="page">
			<header>
				<h1>Button</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Regular size</h3>
					<div className="section-content">
						<div className="section-content-button-list">
							<Button>Submit</Button>
							<Button theme="primary">Submit</Button>
							<Button theme="secondary">Submit</Button>
							<Button theme="error">Submit</Button>
							<Button theme="warning">Submit</Button>
							<Button theme="success">Submit</Button>
						</div>
						<br /><br />
						<CodeBlock
							text={
`<Button>Submit</Button>
<Button theme="primary">Submit</Button>
<Button theme="secondary">Submit</Button>
<Button theme="error">Submit</Button>
<Button theme="warning">Submit</Button>
<Button theme="success">Submit</Button>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Small size</h3>
					<div className="section-content">
						<div className="section-content-button-list">
							<Button size="sm">Submit</Button>
							<Button size="sm" theme="primary">Submit</Button>
							<Button size="sm" theme="secondary">Submit</Button>
							<Button size="sm" theme="error">Submit</Button>
							<Button size="sm" theme="warning">Submit</Button>
							<Button size="sm" theme="success">Submit</Button>
						</div>
						<br /><br />
						<CodeBlock
							text={
`<Button size="sm">Submit</Button>
<Button size="sm" theme="primary">Submit</Button>
<Button size="sm" theme="secondary">Submit</Button>
<Button size="sm" theme="error">Submit</Button>
<Button size="sm" theme="warning">Submit</Button>
<Button size="sm" theme="success">Submit</Button>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Large size</h3>
					<div className="section-content">
						<div className="section-content-button-list">
							<Button size="lg">Submit</Button>
							<Button size="lg" theme="primary">Submit</Button>
							<Button size="lg" theme="secondary">Submit</Button>
							<Button size="lg" theme="error">Submit</Button>
							<Button size="lg" theme="warning">Submit</Button>
							<Button size="lg" theme="success">Submit</Button>
						</div>
						<br /><br />
						<CodeBlock
							text={
`<Button size="lg">Submit</Button>
<Button size="lg" theme="primary">Submit</Button>
<Button size="lg" theme="secondary">Submit</Button>
<Button size="lg" theme="error">Submit</Button>
<Button size="lg" theme="warning">Submit</Button>
<Button size="lg" theme="success">Submit</Button>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Disabled state</h3>
					<div className="section-content">
						<div className="section-content-button-list">
							<Button disabled>Submit</Button>
							<Button disabled theme="primary">Submit</Button>
							<Button disabled theme="secondary">Submit</Button>
							<Button disabled theme="error">Submit</Button>
							<Button disabled theme="warning">Submit</Button>
							<Button disabled theme="success">Submit</Button>
						</div>
						<br /><br />
						<CodeBlock
							text={
`<Button disabled>Submit</Button>
<Button disabled theme="primary">Submit</Button>
<Button disabled theme="secondary">Submit</Button>
<Button disabled theme="error">Submit</Button>
<Button disabled theme="warning">Submit</Button>
<Button disabled theme="success">Submit</Button>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Outline</h3>
					<div className="section-content">
						<Button theme="default outline">Submit</Button>
						<Button theme="primary outline">Submit</Button>
						<Button theme="secondary outline">Submit</Button>
						<Button theme="error outline">Submit</Button>
						<Button theme="warning outline">Submit</Button>
						<Button theme="success outline">Submit</Button>
						<br /><br />
						<CodeBlock
							text={
`<Button theme="default outline">Submit</Button>
<Button theme="primary outline">Submit</Button>
<Button theme="secondary outline">Submit</Button>
<Button theme="error outline">Submit</Button>
<Button theme="warning outline">Submit</Button>
<Button theme="success outline">Submit</Button>`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Outline disabled</h3>
					<div className="section-content">
						<Button disabled theme="default outline">Submit</Button>
						<Button disabled theme="primary outline">Submit</Button>
						<Button disabled theme="secondary outline">Submit</Button>
						<Button disabled theme="error outline">Submit</Button>
						<Button disabled theme="warning outline">Submit</Button>
						<Button disabled theme="success outline">Submit</Button>
						<br /><br />
						<CodeBlock
							text={
`<Button disabled theme="default outline">Submit</Button>
<Button disabled theme="primary outline">Submit</Button>
<Button disabled theme="secondary outline">Submit</Button>
<Button disabled theme="error outline">Submit</Button>
<Button disabled theme="warning outline">Submit</Button>
<Button disabled theme="success outline">Submit</Button>`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageButton;

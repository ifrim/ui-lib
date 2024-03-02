import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Icon from '../../../../components/icon/icon';

function PageIcon() {

	return (
		<div className="page icon-page">
			<header>
				<h1>Icon</h1>
			</header>
			<div className="page-body">
				<p>We use fontawesome (free version) for icons.</p>
				<section>
					<h3>Examples</h3>
					<div className="section-content">
						<Icon name="fish" />
						<Icon name="ankh" />
						<Icon name="chart-bar" />
						<br /><br />
						<CodeBlock
							text={
`<Icon name="fish" />
<Icon name="ankh" />
<Icon name="chart-bar" />`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageIcon;
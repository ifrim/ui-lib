import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Button from '../../../../components/button/button';
import ButtonGroup from '../../../../components/button-group/button-group';

function PageButton() {
	return (
		<div className="page">
			<header>
				<h1>ButtonGroup</h1>
			</header>
			<div className="page-body">
				<section>
					<div className="section-content">
						<ButtonGroup>
							<Button>
								First one
							</Button>
							<Button>
								Second one
							</Button>
							<Button>
								Third one
							</Button>
						</ButtonGroup>
						<br /><br />
						<CodeBlock
							text={
`<ButtonGroup>
<Button>
	First one
</Button>
<Button>
	Second one
</Button>
<Button>
	Third one
</Button>
</ButtonGroup>`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageButton;

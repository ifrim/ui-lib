import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Button from '../../../../components/button/button';
import Loader from '../../../../components/loader/loader';

function PageLoader() {

	return (
		<div className="page">
			<header>
				<h1>Loader</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Regular loader</h3>
					<div className="section-content">
						<Loader />
						<br /><br />
						<CodeBlock
							text={'<Loader />'}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Small loader</h3>
					<div className="section-content">
						<Loader size="sm" />
						<br /><br />
						<CodeBlock
							text={'<Loader size="sm" />'}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Large loader</h3>
					<div className="section-content">
						<Loader size="lg" />
						<br /><br />
						<CodeBlock
							text={'<Loader size="lg" />'}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Different color</h3>
					<div className="section-content">
						<Loader color="red" />
						<br /><br />
						<CodeBlock
							text={'<Loader color="red" />'}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>With 2s delay</h3>
					<div className="section-content">
						<Loader delay={2000} />
						<br /><br />
						<CodeBlock
							text={'<Loader delay={2000} />'}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>With overlay</h3>
					<div className="section-content">
						<div style={{ position: 'relative', minHeight: '200px' }}>
							<Button theme="success">Try to click Me</Button>
							<Loader overlay />
						</div>
						<br /><br />
						<CodeBlock
							text={'<Loader overlay />'}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageLoader;
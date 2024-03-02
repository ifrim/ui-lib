import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Button from '../../../../components/button/button';
import toast from '../../../../components/toast/toast';

function PageToast() {

	return (
		<div className="page">
			<header>
				<h1>Toast</h1>
			</header>
			<div className="page-body">
				<section>
					<div className="section-content">
						<Button
							theme="default"
							onClick={() => toast.show(<div>{'something to know ' + Math.random()}</div>)}
						>
              show info
						</Button>
						<br /><br />
						<CodeBlock
							text={
`<Button
  theme="default"
  onClick={() => toast.show(<div>{'something to know ' + Math.random()}</div>)}
>
  show info
</Button>`}
							language="jsx"
						/>
						<br /><br />
						<Button
							theme="success"
							onClick={() => toast.success(<div>{'something to know ' + Math.random()}</div>)}
						>
              show success
						</Button>
						<br /><br />
						<CodeBlock
							text={
`<Button
  theme="success"
  onClick={() => toast.success(<div>{'something to know ' + Math.random()}</div>)}
>
  show success
</Button>`}
							language="jsx"
						/>
						<br /><br />
						<Button
							theme="error"
							onClick={() => toast.error(<div>{'something to know ' + Math.random()}</div>)}
						>
              show error
						</Button>
						<br /><br />
						<CodeBlock
							text={
`<Button
  theme="error"
  onClick={() => toast.error(<div>{'something to know ' + Math.random()}</div>)}
>
  show error
</Button>`}
							language="jsx"
						/>
						<br /><br />
						<Button
							theme="warning"
							onClick={() => toast.warning(<div>{'something to know ' + Math.random()}</div>)}
						>
              show warning
						</Button>
						<br /><br />
						<CodeBlock
							text={
`<Button
  theme="warning"
  onClick={() => toast.warning(<div>{'something to know ' + Math.random()}</div>)}
>
  show warning
</Button>`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageToast;
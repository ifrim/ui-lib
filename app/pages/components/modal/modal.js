import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

import Button from '../../../../components/button/button';
import Modal from '../../../../components/modal/modal';

function PageModal() {
	let [isDefaultModalOpened, setIsDefaultModalOpened] = useState(false);
	let [isPrimaryModalOpened, setIsPrimaryModalOpened] = useState(false);
	let [isSuccessModalOpened, setIsSuccessModalOpened] = useState(false);
	let [isWarningModalOpened, setIsWarningModalOpened] = useState(false);
	let [isErrorModalOpened, setIsErrorModalOpened] = useState(false);

	return (
		<div className="page">
			<header>
				<h1>Modal</h1>
			</header>
			<div className="page-body">
				<Button theme="default" onClick={() => setIsDefaultModalOpened(true)}>
          Open Modal
				</Button>
				<br /><br />
				<CodeBlock
					text={
`<Modal
  opened={isDefaultModalOpened}
  onClose={() => setIsDefaultModalOpened(false)}
  buttons={[
    <Button theme="default" onClick={() => setIsDefaultModalOpened(false)}>OK</Button>,
  ]}
>
  <h3>Something for your attention</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Modal>`}
					language="jsx"
				/>
				<br /><br />
				<Button theme="primary" onClick={() => setIsPrimaryModalOpened(true)}>
          Open Modal
				</Button>
				<br /><br />
				<CodeBlock
					text={
`<Modal
  theme="primary"
  opened={isPrimaryModalOpened}
  onClose={() => setIsPrimaryModalOpened(false)}
  buttons={[
    <Button theme="primary" onClick={() => setIsPrimaryModalOpened(false)}>OK</Button>,
  ]}
>
  <h3>Something for your attention</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Modal>`}
					language="jsx"
				/>
				<br /><br />
				<Button theme="success" onClick={() => setIsSuccessModalOpened(true)}>
          Open Modal
				</Button>
				<br /><br />
				<CodeBlock
					text={
`<Modal
  theme="success"
  opened={isSuccessModalOpened}
  onClose={() => setIsSuccessModalOpened(false)}
  buttons={[
    <Button theme="success" onClick={() => setIsSuccessModalOpened(false)}>Cool</Button>,
  ]}
>
  <h3>Save successfull!</h3>
  <p>Your data has just been saved.</p>
</Modal>`}
					language="jsx"
				/>
				<br /><br />
				<Button theme="warning" onClick={() => setIsWarningModalOpened(true)}>
          Open Modal
				</Button>
				<br /><br />
				<CodeBlock
					text={
`<Modal
  theme="warning"
  opened={isWarningModalOpened}
  onClose={() => setIsWarningModalOpened(false)}
  buttons={[
    <Button theme="error" onClick={() => setIsWarningModalOpened(false)}>Cancel</Button>,
    <Button theme="success" onClick={() => setIsWarningModalOpened(false)}>Let's do it</Button>,
  ]}
>
  <h3>Are you sure you want to do this?</h3>
  <p>There will be consequences.</p>
</Modal>`}
					language="jsx"
				/>
				<br /><br />
				<Button theme="error" onClick={() => setIsErrorModalOpened(true)}>
          Open Modal
				</Button>
				<br /><br />
				<CodeBlock
					text={
`<Modal
  theme="error"
  opened={isErrorModalOpened}
  onClose={() => setIsErrorModalOpened(false)}
  buttons={[
    <Button theme="error" onClick={() => setIsErrorModalOpened(false)}>Cancel</Button>,
    <Button theme="success" onClick={() => setIsErrorModalOpened(false)}>Delete</Button>,
  ]}
>
  <h3>Here be dragons!</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Modal>`}
					language="jsx"
				/>

				<Modal
					opened={isDefaultModalOpened}
					onClose={() => setIsDefaultModalOpened(false)}
					buttons={[
						<Button key="ok" theme="default" onClick={() => setIsDefaultModalOpened(false)}>OK</Button>,
					]}
				>
					<h3>Something for your attention</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</Modal>
				<Modal
					theme="primary"
					opened={isPrimaryModalOpened}
					onClose={() => setIsPrimaryModalOpened(false)}
					buttons={[
						<Button key="ok" theme="primary" onClick={() => setIsPrimaryModalOpened(false)}>OK</Button>,
					]}
				>
					<h3>Something for your attention</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</Modal>
				<Modal
					theme="success"
					opened={isSuccessModalOpened}
					onClose={() => setIsSuccessModalOpened(false)}
					buttons={[
						<Button key="cool" theme="success" onClick={() => setIsSuccessModalOpened(false)}>Cool</Button>,
					]}
				>
					<h3>Save successfull!</h3>
					<p>Your data has just been saved.</p>
				</Modal>
				<Modal
					theme="warning"
					opened={isWarningModalOpened}
					onClose={() => setIsWarningModalOpened(false)}
					buttons={[
						<Button key="cancel" theme="error" onClick={() => setIsWarningModalOpened(false)}>Cancel</Button>,
						<Button key="do-it" theme="success" onClick={() => setIsWarningModalOpened(false)}>Let&apos;s do it</Button>,
					]}
				>
					<h3>Are you sure you want to do this?</h3>
					<p>There will be consequences.</p>
				</Modal>
				<Modal
					theme="error"
					opened={isErrorModalOpened}
					onClose={() => setIsErrorModalOpened(false)}
					buttons={[
						<Button key="cancel" theme="error" onClick={() => setIsErrorModalOpened(false)}>Cancel</Button>,
						<Button key="delete" theme="success" onClick={() => setIsErrorModalOpened(false)}>Delete</Button>,
					]}
				>
					<h3>Here be dragons!</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</Modal>
			</div>
		</div>
	);
}

export default PageModal;
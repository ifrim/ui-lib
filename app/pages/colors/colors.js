import React from 'react';

function getVar(name) {
	return window.getComputedStyle(document.body).getPropertyValue(name);
}

function Colors() {
	return (
		<div className="page">
			<header>
				<h1>Colors</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Colors</h3>
					<div className="section-content">
						<div style={{ backgroundColor: getVar('--color-primary') }} />
						<div className="colors-table">
							<div></div>
							<div>Light</div>
							<div>Base</div>
							<div>Dark</div>
							<div>Gray</div>
							<div style={{ backgroundColor: getVar('--color-gray-light') }}>{getVar('--color-gray-light')}</div>
							<div style={{ backgroundColor: getVar('--color-gray') }}>{getVar('--color-gray')}</div>
							<div style={{ backgroundColor: getVar('--color-gray-dark'), color: 'white' }}>{getVar('--color-gray-dark')}</div>
							<div>Primary</div>
							<div style={{ backgroundColor: getVar('--color-primary-light') }}>{getVar('--color-primary-light')}</div>
							<div style={{ backgroundColor: getVar('--color-primary') }}>{getVar('--color-primary')}</div>
							<div style={{ backgroundColor: getVar('--color-primary-dark'), color: 'white' }}>{getVar('--color-primary-dark')}</div>
							<div>Secondary</div>
							<div style={{ backgroundColor: getVar('--color-secondary-light') }}>{getVar('--color-secondary-light')}</div>
							<div style={{ backgroundColor: getVar('--color-secondary') }}>{getVar('--color-secondary')}</div>
							<div style={{ backgroundColor: getVar('--color-secondary-dark'), color: 'white' }}>{getVar('--color-secondary-dark')}</div>
							<div>Success</div>
							<div style={{ backgroundColor: getVar('--color-success-light') }}>{getVar('--color-success-light')}</div>
							<div style={{ backgroundColor: getVar('--color-success') }}>{getVar('--color-success')}</div>
							<div style={{ backgroundColor: getVar('--color-success-dark'), color: 'white' }}>{getVar('--color-success-dark')}</div>
							<div>Warning</div>
							<div style={{ backgroundColor: getVar('--color-warning-light') }}>{getVar('--color-warning-light')}</div>
							<div style={{ backgroundColor: getVar('--color-warning') }}>{getVar('--color-warning')}</div>
							<div style={{ backgroundColor: getVar('--color-warning-dark'), color: 'white' }}>{getVar('--color-warning-dark')}</div>
							<div>Error</div>
							<div style={{ backgroundColor: getVar('--color-error-light') }}>{getVar('--color-error-light')}</div>
							<div style={{ backgroundColor: getVar('--color-error') }}>{getVar('--color-error')}</div>
							<div style={{ backgroundColor: getVar('--color-error-dark'), color: 'white' }}>{getVar('--color-error-dark')}</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Colors;

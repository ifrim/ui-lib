import React from 'react';

function getVar(name) {
	return window.getComputedStyle(document.body).getPropertyValue(name);
}

function Typography() {
	return (
		<div className="page">
			<header>
				<h1>Typography</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Fonts</h3>
					<div className="section-content">
						<p>The font <a href="https://rsms.me/inter/">Inter</a> is used for both headings and regular text.</p>
					</div>
				</section>

				<section>
					<h3>Headings</h3>
					<div className="section-content">
						<h1>Heading H1 (font-size: {getVar('--font-size-h1')})</h1>
						<h2>Heading H2 (font-size: {getVar('--font-size-h2')})</h2>
						<h3>Heading H3 (font-size: {getVar('--font-size-h3')})</h3>
						<h4>Heading H4 (font-size: {getVar('--font-size-h4')})</h4>
						<h5>Heading H5 (font-size: {getVar('--font-size-h5')})</h5>
						<h6>Heading H6 (font-size: {getVar('--font-size-h6')})</h6>
					</div>
				</section>

				<section>
					<h3>Text (font-size: {getVar('--font-size-body-1')})</h3>
					<div className="section-content">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  <a href="#">click here</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						<p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						<p>Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</div>
				</section>

				<section>
					<h3>Small text (font-size: {getVar('--font-size-body-2')})</h3>
					<div className="section-content">
						<p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</div>
				</section>

				<section>
					<h3>Links</h3>
					<div className="section-content">
						<a href="#">The quick brown fox jumps over the lazy dog</a>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Typography;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

let components = [
	{ path: '/components/accordion', label: 'Accordion' },
	{ path: '/components/button', label: 'Button' },
	{ path: '/components/button-group', label: 'ButtonGroup' },
	{ path: '/components/checkbox', label: 'Checkbox' },
	{ path: '/components/collapsible', label: 'Collapsible' },
	{ path: '/components/datepicker', label: 'Datepicker' },
	{ path: '/components/dropdown', label: 'Dropdown' },
	{ path: '/components/file-input', label: 'File Input' },
	{ path: '/components/floating-container', label: 'Floating Container' },
	{ path: '/components/icon', label: 'Icon' },
	{ path: '/components/input', label: 'Input' },
	{ path: '/components/loader', label: 'Loader' },
	{ path: '/components/message', label: 'Message' },
	{ path: '/components/modal', label: 'Modal' },
	{ path: '/components/multiselect', label: 'Multiselect' },
	{ path: '/components/radio', label: 'Radio' },
	{ path: '/components/table', label: 'Table' },
	{ path: '/components/tabs', label: 'Tabs' },
	{ path: '/components/tag', label: 'Tag' },
	{ path: '/components/textarea', label: 'Textarea' },
	{ path: '/components/toast', label: 'Toast' },
	{ path: '/components/tooltip', label: 'Tooltip' },
];

function Sidebar() {
	let location = useLocation();

	return (
		<div className="app-sidebar">
			<h3>UI Lib</h3>
			<nav>
				<ul>
					<li><Link to="colors" className="section-title">Colors</Link></li>
					{/* <li><Link to="grid" className="section-title">Grid</Link></li> */}
					<li><Link to="typography" className="section-title">Typography</Link></li>
					<li>
						<span className="section-title">Components</span>
						<ul>
							{components.map(c => (
								<li key={c.path} className={c.path === location.pathname ? 'selected' : ''}>
									<Link to={c.path}>{c.label}</Link>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;
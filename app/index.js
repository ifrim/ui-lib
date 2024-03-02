import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './app';

let container = document.getElementById('app');
let root = createRoot(container);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);


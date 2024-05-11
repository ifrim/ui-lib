import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';

import Root from '../../pages/root/root';
import Typography from '../../pages/typography/typography';
import Colors from '../../pages/colors/colors';
import PageAccordion from '../../pages/components/accordion/accordion';
import PageButton from '../../pages/components/button/button';
import PageButtonGroup from '../../pages/components/button-group/button-group';
import PageCheckbox from '../../pages/components/checkbox/checkbox';
import PageCollapsible from '../../pages/components/collapsible/collapsible';
import PageDatepicker from '../../pages/components/datepicker/datepicker';
import PageDropdown from '../../pages/components/dropdown/dropdown';
import PageFileInput from '../../pages/components/file-input/file-input';
import PageFloatingContainer from '../../pages/components/floating-container/floating-container';
import PageIcon from '../../pages/components/icon/icon';
import PageInput from '../../pages/components/input/input';
import PageLoader from '../../pages/components/loader/loader';
import PageMessage from '../../pages/components/message/message';
import PageModal from '../../pages/components/modal/modal';
import PageMultiselect from '../../pages/components/multiselect/multiselect';
import PageRadio from '../../pages/components/radio/radio';
import PageTable from '../../pages/components/table/table';
import PageTabs from '../../pages/components/tabs/tabs';
import PageTag from '../../pages/components/tag/tag';
import PageTextarea from '../../pages/components/textarea/textarea';
import PageToast from '../../pages/components/toast/toast';
import PageTooltip from '../../pages/components/tooltip/tooltip';

function Main() {
	return (
		<div className="app-main-wrapper">
			<div className="app-main">
				<Routes>
					<Route path="/" element={<Outlet />}>
						<Route index element={<Root />} />
						<Route path="typography" element={<Typography />} />
						<Route path="colors" element={<Colors />} />
						<Route path="components/accordion" element={<PageAccordion />} />
						<Route path="components/button" element={<PageButton />} />
						<Route path="components/button-group" element={<PageButtonGroup />} />
						<Route path="components/checkbox" element={<PageCheckbox />} />
						<Route path="components/collapsible" element={<PageCollapsible />} />
						<Route path="components/datepicker" element={<PageDatepicker />} />
						<Route path="components/dropdown" element={<PageDropdown />} />
						<Route path="components/file-input" element={<PageFileInput />} />
						<Route path="components/floating-container" element={<PageFloatingContainer />} />
						<Route path="components/icon" element={<PageIcon />} />
						<Route path="components/input" element={<PageInput />} />
						<Route path="components/loader" element={<PageLoader />} />
						<Route path="components/message" element={<PageMessage />} />
						<Route path="components/modal" element={<PageModal />} />
						<Route path="components/multiselect" element={<PageMultiselect />} />
						<Route path="components/radio" element={<PageRadio />} />
						<Route path="components/table" element={<PageTable />} />
						<Route path="components/tabs" element={<PageTabs />} />
						<Route path="components/tag" element={<PageTag />} />
						<Route path="components/textarea" element={<PageTextarea />} />
						<Route path="components/toast" element={<PageToast />} />
						<Route path="components/tooltip" element={<PageTooltip />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default Main;

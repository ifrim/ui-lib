import React, { useState } from 'react';

import { Checkbox, DatePicker, Dropdown, FileInput, Input, Radio, Textarea } from './components';

function getValueFromPath(obj, path) {
	// turn 'aaa.qqq[2].bbb[5][3].mmm' into ['aaa', 'qqq', '2', 'bbb', '5', '3', 'mmm']
	let indexes = path.split(/[\][.]/).filter(Boolean);
	return indexes.reduce((acc, v) => (acc ? acc[v] : acc), obj);
}

/**
 * A wrapper function that "prepares" a ui form component to be used with the formik library.
 * It handles things like setting the value of the component, change events, error state
 */
export let wrapper = Component => ({ field, form, ...properties }) => { // eslint-disable-line react/display-name
	let [value, setValue] = useState(field.value);

	let onChange = (val) => {
		if (typeof properties.onChange === 'function') {
			properties.onChange(val);
		}
		field.onChange({ target: { name: field.name, value: val } });
		setValue(val);
	};

	let formError = (getValueFromPath(form.touched, field.name) || Boolean(form.submitCount))
    && getValueFromPath(form.errors, field.name);
	let error = typeof formError === 'string' ? formError : '';

	if (form.status?.disabled) properties.disabled = true;

	return (
		<Component
			{...field}
			error={error}
			{...properties}
			onChange={onChange}
			value={value}
		/>
	);
};

export let FCheckbox = wrapper(Checkbox);
export let FDatepicker = wrapper(DatePicker);
export let FDropdown = wrapper(Dropdown);
export let FInput = wrapper(Input);
export let FFileInput = wrapper(FileInput);
export let FRadio = wrapper(Radio);
export let FTextarea = wrapper(Textarea);
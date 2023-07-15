// import node module libraries
import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ filter, setFilter, placeholder }) => {
	const [value, setValue] = useState(filter);
	const onChange = useAsyncDebounce((value) => {
		setFilter(value || undefined);
	}, 1000);
	return (
		<input
			type="search"
			className="form-control"
			placeholder={placeholder}
			value={value || ''}
			onChange={(e) => {
				setValue(e.target.value);
				onChange(e.target.value);
			}}
		/>
	);
};

export default GlobalFilter;

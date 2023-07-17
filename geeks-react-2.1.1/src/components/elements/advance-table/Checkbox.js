// import node module libraries
import React from 'react';
import { Form } from 'react-bootstrap';

const IndeterminateCheckbox = React.forwardRef(
	({ indeterminate, ...rest }, ref) => {
		const defaultRef = React.useRef();
		const resolvedRef = ref || defaultRef;

		React.useEffect(() => {
			resolvedRef.current.indeterminate = indeterminate;
		}, [resolvedRef, indeterminate]);

		return <Form.Check type="checkbox" ref={resolvedRef} {...rest} />;
	}
);

export default IndeterminateCheckbox;

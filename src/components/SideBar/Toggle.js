import React from 'react';

import './Toggle.css';

const Toggle = props => (
	<button className="toggle-button" onClick={props.click}>
		<div className="toggle-button__line" />
		<div className="toggle-button__line" />
		<div className="toggle-button__line" />
	</button>

);

export default Toggle;
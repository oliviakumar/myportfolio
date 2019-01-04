import React from 'react';

import './Background.css';

const background = props => (
	<div className="background" onClick={props.click}>
		<div class="container">
		  <div class="row">
		    <div class="col-sm">
		      One of three columns
		    </div>
		    <div class="col-sm">
		      One of three columns
		    </div>
		    <div class="col-sm">
		      One of three columns
		    </div>
		  </div>
		</div>
	</div>
);

export default background;
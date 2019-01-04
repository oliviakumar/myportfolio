import React from 'react';

import Toggle from '../SideBar/Toggle';
import branch from '../olive.jpg';
import dove from '../dove.png';
import dovefly from '../dovefly.jpg';
import bluedove from '../blue-dove.png';
import diamond from '../diamond.png';


import './Toolbar.css';

const toolbar = props => (
	<header className="toolbar">

		<nav className="toolbar__navigation">
			<div>
				<Toggle click={props.sidebarClickHandler}/>
			</div>
			<div className="half-spacer"></div>
			<div className="mini-pad"></div>

			<img width="55" src={diamond}/>

			<div className="toolbar__logo"><a href="/">LOGO</a></div>
			<div className="spacer"></div>

			<div className="toolbar_navigation-items">
				<ul>
					<li><a href="/">prods</a></li>
					<li><a href="/">etc</a></li>
				</ul>
			</div>
		</nav>
	</header>

);

export default toolbar;
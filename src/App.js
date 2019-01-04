import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import BackGround from './components/BackGround/Background';


class App extends Component {

  state = {
    sideBarOpen: false
  };

  toggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
    });
  };

  backgroundClickHandler = () => {
    this.setState({sideBarOpen: false})
  };

  render() {
    let sideBar;
    let background;

    if (this.state.sideBarOpen) {
      sideBar = <SideBar/>
      background = <BackGround click={this.backgroundClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar sidebarClickHandler={this.toggleClickHandler}/>
        {sideBar}
        {background}
        <main style={{marginTop: '64px'}}>
          <p> content </p>
        </main>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import BackGround from './components/BackGround/Background';
// import ResumeItems from './components/ResumeItems/ResumeItems';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("yuhhh")
    const items = [
      {id: 0, title: "app", overview: "..."},
      {id: 1, title: "proj", overview: "..."},
      {id: 3, title: "aff", overview: "..."}
    ]

    this.state = {rows: [
      <p key="0"> This is my row </p>,
      <p key="1"> This is my row </p>,
      <p key="2"> This is my row </p>

      ]}
  }

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
          <p> . </p>

          {this.state.rows}
        </main>
      </div>
    );
  }
}

export default App;
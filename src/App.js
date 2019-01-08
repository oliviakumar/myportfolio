import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import BackGround from './components/BackGround/Background';
import ResumeItems from './components/ResumeItems/ResumeItems';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("yuhhh")
    this.state = {};
    
    this.doSearch();

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

  doSearch() {
    console.log("perform search");
    const urlString = "https://api.themoviedb.org/3/search/movie?query=avengers&api_key=9039acf78f91a3b698247bfb235f222d";
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("fetched data successfully");
        // console.log(searchResults);
        const results = searchResults.genres;
        // console.log(results[0]);

        var itemRows = [];

        results.forEach((item) => {
          console.log(item.title);
          const itemRow = <ResumeItems item={item}/>
          itemRows.push(itemRow);
        })
        this.setState({rows: itemRows});
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data");
      }
    })
  }


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
          <div className="content">
            <div className="app">
              <p> hi </p>
              //TODO: how to center this input 
              <input style={{
                fontSize: 24,
                display: 'block',
                width: "99%",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 16
              }} placeholder="enter search"/>

            </div>
            {this.state.rows}

          </div>
        </main>
      </div>
    );
}
}

export default App;
//     itemRows.push(<p key={item.id}> item title: {item.title}</p>)

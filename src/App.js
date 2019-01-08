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
    // const items = [
    //   {id: 0, pic_src: "https://cdn.shopify.com/s/files/1/1061/1924/products/Nerd_with_Glasses_Emoji_2a8485bc-f136-4156-9af6-297d8522d8d1_large.png", title: "app", overview: "..."},
    //   {id: 1, pic_src: "https://cdn.shopify.com/s/files/1/1061/1924/products/Nerd_with_Glasses_Emoji_2a8485bc-f136-4156-9af6-297d8522d8d1_large.png", title: "proj", overview: "..."},
    //   {id: 3, pic_src: "https://cdn.shopify.com/s/files/1/1061/1924/products/Nerd_with_Glasses_Emoji_2a8485bc-f136-4156-9af6-297d8522d8d1_large.png", title: "aff", overview: "..."}
    // ]

    // this.state = {rows: [
    //   <p key="0"> This is my row </p>,
    //   <p key="1"> This is my row </p>,
    //   <p key="2"> This is my row </p>

    // ]}

    // var itemRows = []
    // items.forEach((item) => {
    //   console.log(item.title)
    //   const itemRow = <ResumeItems key={item.id} item={item} />
    //   itemRows.push(itemRow)
    // })

    // this.state = {rows: itemRows}
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
    const urlString = "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=avengers&language=en-US&api_key=9039acf78f91a3b698247bfb235f222d";
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("fetched data successfully");
        // console.log(searchResults);
        const results = searchResults.results;
        // console.log(results[0]);

        var itemRows = [];

        results.forEach((item) => {
          item.pic_src = "https://image.tmdb.org/t/p/w500" + item.poster_path;
          // console.log(item.title);
          // console.log(item.poster_path);
          const itemRow = <ResumeItems key={item.id} item={item}/>
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
               {/*TODO how to center this input*/}
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

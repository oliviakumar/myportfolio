import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Header } from "./components/Header";
import { Home } from "./components/Home";



class App extends React.Component {
	render() {
		return (
	      <div className="container">
	        <div className="row">
	          <div className="col-xs-10 col-xs-offset-1">
	            <h1> apppppppp</h1>
	            <p> +it worksssss+ </p>
	          </div>
	        </div>
	        <div className="row">
	          <div className="col-xs-10 col-xs-offset-1">
	            <Header/>
	          </div>
	        </div>
	        <div className="row">
	          <div className="col-xs-10 col-xs-offset-1">
	            <Home/>
	          </div>
	        </div>
	       </div>
       );
   }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

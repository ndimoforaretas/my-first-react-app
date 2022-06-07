/*
Steps to get react to show content on the screen
*/

// 1) Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// 2) Create a react component

const App = function () {
	return <div>Hi there!</div>;
};

// 3) Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

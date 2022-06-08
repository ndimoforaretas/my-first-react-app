/*
Steps to get react to show content on the screen
*/

// 1) Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// function getButtonText() {
// 	return "Click on Me!";
// }
// 2) Create a react component

const App = function () {
	const buttonText = { text: "Click Me!" };
	const labelText = "Enter name:";

	return (
		<div>
			<label className="label" for="name">
				{labelText}
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: "blue", color: "white" }}>
				{buttonText.text}
			</button>
		</div>
	);
};

// 3) Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

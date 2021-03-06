import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const clickHandler = e => {
	console.log("I was clicked!", e);
};
//SOLUCION: Para crear eventos solo lo creo y lo igualo a la funcionenter corchetes
const Alert = props => {
	return (
		<button onClick={clickHandler} className="btn btn-success btn-lg">
			Click Me
		</button>
	);
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties is the component using
ReactDOM.render(<Alert />, document.querySelector("#myDiv"));

import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Alert = props => {

};
Alert.propTypes = {
	//color: PropType.string, //DUDA:Donde llamo este color? R/ No hace nada, si se comenta NO AFECTA la complicacion.
	text: PropType.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert show={true} text="This is a primary alert-check it out!" />
		<Alert show={false} text="This is a primary alert-check it out!" />
	</div>,
	document.querySelector("#myDiv")
);

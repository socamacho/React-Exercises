import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//SOLUCION: En JSX puedo dar estilos como objetos
const mySuperStyles = {
	background: "black",
	fontSize: "16px",
	border: "1px solid yellow"
};

const Badge = props => {
	return (
		<button style={mySuperStyles} type="button" className="btn btn-primary">
			{props.label}
			<span className="badge badge-light">{props.number}</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropType.string,
	number: PropType.string
};

ReactDOM.render(<Badge label="Notifications" number="2" />, document.querySelector("#myDiv"));

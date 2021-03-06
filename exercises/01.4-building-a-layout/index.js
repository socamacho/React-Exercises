import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const data = {
	image:
		"https://www.google.com/search?q=bob+dylan&rlz=1C1CHBF_esCR880CR881&sxsrf=ALeKk020cXDNU7DRUevo1WCfTtjvNqD-bw:1614828093870&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiN36G315XvAhWItVkKHfuzA0kQ_AUoAXoECAsQAw&biw=2560&bih=1297#imgrc=qczaIjgjpbLvfM",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia"
	}
};

/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/
const content = (
	<div>
		<div className="card-body">
			<img className="card-img-top" src={data.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{data.cardTitle}</h5>
				<p className="card-text">{data.cardDescription}</p>
				<a href={data.button.url} className="btn btn-primary">
					{data.button.label}
				</a>
			</div>
		</div>
	</div>
);

ReactDOM.render(content, document.querySelector("#myDiv"));
//Nota. Los elementos en HTML estan constituidos por simbolos de diamantes<>,  nombre etiqueta (h5,a), atributo(style, href) y contenido.

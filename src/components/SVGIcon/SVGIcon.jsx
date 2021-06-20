import React from "react";

function SVGIcon(props) {
	let icon;

	try {
		icon = require("../../icons/" + props.name + ".svg");
	} catch (e) {
		console.log(e);
	}

	return <img className={props.className} src={icon.default} />;
}

export default SVGIcon;

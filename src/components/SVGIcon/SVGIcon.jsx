import React from "react";

function SVGIcon(props) {
	let icon;

	try {
		icon = require("../../icons/" + props.name + ".svg");
	} catch (e) {
		console.log(e);
	}

	return <img src={icon.default} />;
}

export default SVGIcon;

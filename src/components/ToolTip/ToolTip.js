/**
 * ToolTip Component
 * Copied from https://www.w3schools.com/css/css_tooltip.asp
 * And modified
 */

import "./ToolTip.scss";

function ToolTip(props) {
	return (
		<div className={"tooltip " + props.className}>
			{props.text}
			<span className="tooltiptext">{props.onHover}</span>
		</div>
	);
}

export default ToolTip;

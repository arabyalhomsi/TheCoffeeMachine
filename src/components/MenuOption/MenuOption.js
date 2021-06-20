import "./MenuOption.scss";

function MenuOption(props) {
	return (
		<button className="MenuOption">
			<h4 className="MenuOption__title">{props.title}</h4>
			<div className="MenuOption__icon">{props.icon}</div>
		</button>
	);
}

export default MenuOption;

import SVGIcon from "../SVGIcon/SVGIcon";

import "./MenuOption.scss";

function MenuOption(props) {
	return (
		<button
			className={"MenuOption " + props.className}
			onClick={props.onClick}
		>
			<div className="MenuOption__container">
				<div className="MenuOption__top">
					<h4 className="MenuOption__title">{props.title}</h4>
					<div className="MenuOption__icon">{props.icon}</div>
				</div>

				{props.dropdown && (
					<div className="MenuOption__dropdown">
						<div className="MenuOption__br"></div>
						<ul className="MenuOption__list">
							{props.dropdownSelections.map((selection, key) => (
								<li
									key={key}
									className="MenuOption__element"
									onClick={() =>
										props.dropownOnClick(
											selection,
											props._id
										)
									}
								>
									<span className="MenuOption__elementTitle">
										{selection.name}
									</span>
									<span className="MenuOption__elementCheck">
										<SVGIcon
											name={
												props.selectedChoices?._id ==
												selection._id
													? "fullcheck"
													: "emptycheck"
											}
										/>
									</span>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</button>
	);
}

export default MenuOption;

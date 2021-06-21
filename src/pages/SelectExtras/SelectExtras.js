import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AppContext from "../../contexts/AppContext";
import Menu from "../../components/Menu/Menu";
import MenuOption from "../../components/MenuOption/MenuOption";
import SVGIcon from "../../components/SVGIcon/SVGIcon";

import "./SelectExtras.scss";

function SelectExtras() {
	const { machineData, userOrder, setUserOrder } =
		React.useContext(AppContext);

	const [selectedChoices, setSelectedChoices] = useState({});
	const [dropdownState, setDropdownState] = useState("");

	let history = useHistory();

	function handleSelection(selection, identifier) {
		setSelectedChoices({
			...selectedChoices,
			[identifier]: selection
		});
	}

	function handleClick(_id) {
		setDropdownState(_id);
		console.log(_id);
	}

	return (
		<div className="SelectExtras">
			<h2 className="SelectExtras__title">Select your extra's</h2>
			<Menu>
				{machineData.extras?.map((extra, key) => {
					if (userOrder.type.extras?.indexOf(extra._id) >= 0) {
						return (
							<MenuOption
								className="no-active"
								key={key}
								title={extra.name}
								_id={extra._id}
								icon={
									<SVGIcon
										name={
											extra.name.includes("milk")
												? "milk"
												: "sugar"
										}
									/>
								}
								onClick={() => handleClick(extra._id)}
								dropdown={
									dropdownState == extra._id ? true : false
								}
								dropdownSelections={extra.subselections}
								dropownOnClick={handleSelection}
								selectedChoices={selectedChoices[extra._id]}
							/>
						);
					}
				})}
			</Menu>
		</div>
	);
}

export default SelectExtras;

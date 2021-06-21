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

	let history = useHistory();

	function handleSelection(selection, identifier) {
		let v = {
			...selectedChoices,
			[identifier]: selection
		};
		console.log(v);
		setSelectedChoices(v);
		// setUserOrder();
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
								dropdown={true}
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

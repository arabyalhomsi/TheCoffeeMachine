import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Menu from "../../components/Menu/Menu";
import MenuOption from "../../components/MenuOption/MenuOption";
import AppContext from "../../contexts/AppContext";
import SVGIcon from "../../components/SVGIcon/SVGIcon";

import "./SelectStyle.scss";

function SelectStyle() {
	const { machineData, userOrder, setUserOrder } =
		React.useContext(AppContext);

	let history = useHistory();

	const handleClick = (type) => {
		setUserOrder({ type });
		history.push("/select-size");
	};

	return (
		<div className="SelectStyle">
			<h2 className="SelectStyle__title">Select your style</h2>
			<Menu>
				{machineData.types?.map((type, key) => (
					<MenuOption
						onClick={() => handleClick(type)}
						key={key}
						title={type.name}
						icon={<SVGIcon name={type.name} />}
					/>
				))}
			</Menu>
		</div>
	);
}

export default SelectStyle;

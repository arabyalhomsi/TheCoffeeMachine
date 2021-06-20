import React, { useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import MenuOption from "../../components/MenuOption/MenuOption";
import AppContext from "../../contexts/AppContext";
import SVGIcon from "../../components/SVGIcon/SVGIcon";

import "./SelectStyle.scss";

function SelectStyle() {
	const { machineData } = React.useContext(AppContext);

	return (
		<div className="SelectStyle">
			<h2 className="SelectStyle__title">Select your style</h2>
			<Menu>
				{machineData.types?.map((type, key) => (
					<MenuOption
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

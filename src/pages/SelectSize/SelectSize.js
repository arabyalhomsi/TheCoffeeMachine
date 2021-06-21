import React from "react";
import { useHistory } from "react-router-dom";

import Menu from "../../components/Menu/Menu";
import MenuOption from "../../components/MenuOption/MenuOption";
import AppContext from "../../contexts/AppContext";
import SVGIcon from "../../components/SVGIcon/SVGIcon";

import "./SelectSize.scss";

function SelectSize() {
	const { machineData, userOrder, setUserOrder } =
		React.useContext(AppContext);

	let history = useHistory();

	const handleClick = (size) => {
		setUserOrder({ ...userOrder, size: size });
		history.push("/select-extras");
	};

	return (
		<div className="SelectSize">
			<h2 className="SelectSize__title">Select your size</h2>
			<Menu>
				{machineData.sizes?.map((size, key) => {
					console.log(userOrder.type.sizes);
					if (userOrder.type.sizes.indexOf(size._id) >= 0) {
						return (
							<MenuOption
								onClick={() => handleClick(size)}
								key={key}
								title={size.name}
								icon={<SVGIcon name={size.name} />}
							/>
						);
					}
				})}
			</Menu>
		</div>
	);
}

export default SelectSize;

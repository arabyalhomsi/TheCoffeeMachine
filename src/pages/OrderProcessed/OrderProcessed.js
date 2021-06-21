import React from "react";
import { useHistory } from "react-router-dom";

import AppContext from "../../contexts/AppContext";
import SVGIcon from "../../components/SVGIcon/SVGIcon";

import "./OrderProcessed.scss";

function OrderProcessed() {
	const { machineData, userOrder } = React.useContext(AppContext);

	let history = useHistory();

	if (Object.keys(machineData).length == 0) {
		history.push("/select-style");
	}

	return (
		<div className="OrderProcessed">
			<h2 className="OrderProcessed__title">
				Your order has been processed
			</h2>
			<SVGIcon
				className="OrderProcessed__coffee"
				name={userOrder.type.name}
			/>
			<h3>Your order is: </h3>
			<ul>
				<li>{userOrder.type.name}</li>
				<li>{userOrder.size.name}</li>
				{Object.keys(userOrder.extras).map(function (key, index) {
					return <li>{userOrder.extras[key].name}</li>;
				})}
			</ul>
		</div>
	);
}

export default OrderProcessed;

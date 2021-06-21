import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import SVGIcon from "../../components/SVGIcon/SVGIcon";
import ToolTip from "../../components/ToolTip/ToolTip";

import "./ContactlessPayment.scss";

function ContactlessPayment() {
	const [counter, setCounter] = useState(5);
	let history = useHistory();

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((counter) => counter - 1);
		}, 1000);

		if (counter === 0) {
			history.push("/select-size");
		}

		return () => {
			clearInterval(timer);
		};
	}, [counter]);

	return (
		<div className="ContactlessPayment">
			<h2 className="ContactlessPayment__title">
				Tab the machine to start ({counter})
			</h2>
			<SVGIcon
				className="ContactlessPayment__coffeemachine"
				name="coffeemachine"
			/>
			<ToolTip
				className="ContactlessPayment__note"
				text="How does this work?"
				onHover="This machine works by reading your credit card code and charging the payment directly from your bank account"
			/>
		</div>
	);
}

export default ContactlessPayment;

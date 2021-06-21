import SVGIcon from "../../components/SVGIcon/SVGIcon";
import ToolTip from "../../components/ToolTip/ToolTip";
import { Link } from "react-router-dom";

import "./ContactlessPayment.scss";

function ContactlessPayment() {
	return (
		<div className="ContactlessPayment">
			<h2 className="ContactlessPayment__title">
				Tab the machine to start
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

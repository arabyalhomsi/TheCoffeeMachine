import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectStyle from "./pages/SelectStyle/SelectStyle";
import ContactlessPayment from "./pages/ContactlessPayment/ContactlessPayment";
import SelectSize from "./pages/SelectSize/SelectSize";
import SelectExtras from "./pages/SelectExtras/SelectExtras";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/select-style">
					<SelectStyle />
				</Route>
				<Route exact path="/contactless-payment">
					<ContactlessPayment />
				</Route>
				<Route exact path="/select-size">
					<SelectSize />
				</Route>
				<Route exact path="/select-extras">
					<SelectExtras />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;

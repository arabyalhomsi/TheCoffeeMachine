import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectStyle from "./pages/SelectStyle/SelectStyle";
import ContactlessPayment from "./pages/ContactlessPayment/ContactlessPayment";
import SelectSize from "./pages/SelectSize/SelectSize";

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
			</Switch>
		</Router>
	);
}

export default Routes;

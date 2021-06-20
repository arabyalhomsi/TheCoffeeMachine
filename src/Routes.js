import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectStyle from "./pages/SelectStyle/SelectStyle";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/select-style">
					<SelectStyle />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;

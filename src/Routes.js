import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<h1>Main</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;

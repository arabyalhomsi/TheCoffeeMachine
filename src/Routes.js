import React, { useRef } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";

import SelectStyle from "./pages/SelectStyle/SelectStyle";
import ContactlessPayment from "./pages/ContactlessPayment/ContactlessPayment";
import SelectSize from "./pages/SelectSize/SelectSize";
import SelectExtras from "./pages/SelectExtras/SelectExtras";
import OrderProcessed from "./pages/OrderProcessed/OrderProcessed";

import "./styles/animations.scss";

function RoutesWrapper() {
	return (
		<Router>
			<Switch>
				<Route path="*">
					<AnimationApp />
				</Route>
			</Switch>
		</Router>
	);
}

function AnimationApp() {
	let location = useLocation();
	const nodeRef = useRef(null);

	return (
		<SwitchTransition>
			<CSSTransition
				key={location.pathname}
				classNames="fade"
				timeout={300}
				nodeRef={nodeRef}
			>
				<div className="App__transition" ref={nodeRef}>
					<Switch location={location}>
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
						<Route exact path="/order-processed">
							<OrderProcessed />
						</Route>
						<Redirect exact from="/" to="/select-style" />
					</Switch>
				</div>
			</CSSTransition>
		</SwitchTransition>
	);
}

export default RoutesWrapper;

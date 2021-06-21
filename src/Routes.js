import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectStyle from "./pages/SelectStyle/SelectStyle";
import ContactlessPayment from "./pages/ContactlessPayment/ContactlessPayment";

import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import "./styles/animations.css";

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
			{/*
      This is no different than other usage of
      <CSSTransition>, just make sure to pass
      `location` to `Switch` so it can match
      the old location as it animates out.
    */}
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
					</Switch>
				</div>
			</CSSTransition>
		</SwitchTransition>
	);
}

export default RoutesWrapper;

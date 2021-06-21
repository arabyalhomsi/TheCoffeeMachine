import React, { useState, useEffect } from "react";

import "./App.scss";
import Routes from "./Routes";
import { getCoffeeMachine } from "./api/coffeeMachine";
import AppContext from "./contexts/AppContext";

function App() {
	const [machineData, setMachineData] = useState({});
	const [userOrder, setUserOrder] = useState({
		type: {
			sizes: [],
			name: ""
		},
		size: {
			name: ""
		},
		extras: {}
	});

	useEffect(() => {
		getCoffeeMachine(process.env.REACT_APP_MACHINE_ID)
			.then((res) => res.json())
			.then((data) => setMachineData(data))
			.catch((err) => console.log("Request Failed", err));
	}, []);

	return (
		<AppContext.Provider value={{ machineData, userOrder, setUserOrder }}>
			<div className="App">
				<h1 className="App__title">Brew with lex</h1>
				<Routes></Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;

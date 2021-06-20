import API from "./API";

const api = new API("coffee-machine");

export async function getCoffeeMachine(id) {
	return api.fetch(id);
}

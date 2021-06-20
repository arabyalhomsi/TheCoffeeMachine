import API from "./API";

export async function getCoffeeMachine(id) {
	const api = new API();

	return api.fetch(`coffee-machine/${id}`);
}

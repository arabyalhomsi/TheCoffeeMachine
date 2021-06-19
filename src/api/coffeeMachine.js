import endpoint from "./endpoint";

export function getCoffeeMachine() {
	fetch(endpoint() + "coffee-machine/");
}

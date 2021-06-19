class API {
	constructor() {
		this.baseURL = process.env.BASE_URL;
	}

	fetch(endpoint, options) {
		return fetch(this.baseURL + endpoint, options);
	}
}

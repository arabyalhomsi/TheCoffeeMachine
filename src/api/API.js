export default class API {
	constructor() {
		if (API._instance) {
			return API._instance;
		}
		this.baseURL = process.env.REACT_APP_BASE_URL;
		API._instance = this;
	}

	async fetch(endpoint, options) {
		return fetch(this.baseURL + endpoint, options);
	}
}

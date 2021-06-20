export default class API {
	constructor(namespace) {
		this.baseURL = process.env.REACT_APP_BASE_URL;
		this.namespace = namespace;
	}

	async fetch(endpoint, options) {
		return fetch(this.baseURL + this.namespace + "/" + endpoint, options);
	}
}

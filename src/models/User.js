export default class User {
	email = null
	isActivated = false
	id = null

	constructor(data) {
		this.email = data.email
		this.isActivated = data.isActivated
		this.id = data.id
	}
}
import User from "./User"

export default class AuthResponse {
	accessToken = null
	refreshToken = null
	user = null

	constructor(data) {
		this.accessToken = data.accessToken
		this.refreshToken = data.refreshToken
		this.user = new User(data.user)
	}
}
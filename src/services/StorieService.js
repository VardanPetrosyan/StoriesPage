import storiesApi from "../api"
export default class StorieService {
	static async all(whareclouse = null) {
		let url = "/"
		try {
			const response = await storiesApi.get(url)
			if (response.status !== 200) {
				throw new Error("Can not find storie.")
			}
			return response.data
		} catch (e) {
			console.log(e);
			return null
		}
	}
	static async filter(limit = 0, lang="en", order="popular", token=null) {
		let url = `?limit=${limit}&languages=${lang},fr&order=${order}`
		if(token){
			url += `&page_token=${token}`
		}
		try {
			const response = await storiesApi.get(url)
			if (response.status !== 200) {
				throw new Error("Can not find storie.")
			}
			return response.data
		} catch (e) {
			console.log(e);
			return null
		}
	}
	
}
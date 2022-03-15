import axios from "axios"
const storiesApi = axios.create({
	baseURL: process.env.REACT_APP_API,
})
storiesApi.interceptors.request.use(config => {
	return config;
})

export default storiesApi
export { axios };
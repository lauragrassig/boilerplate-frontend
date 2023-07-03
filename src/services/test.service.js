import { clientApi } from '@/auth/axios'

export const getData = (endpoint) => {
	return clientApi
		.get(endpoint)
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			// console.error(`Error during fetching data from ${endpoint}: `, error)
			throw error
		})
}

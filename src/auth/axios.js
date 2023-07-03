import { GetMasterUserToken } from '@/auth/session'

import axios from 'axios'
import axiosRetry, { exponentialDelay } from 'axios-retry'

const RETRY_MAX_ATTEMPTS = 2
const RETRY_ERRORS_CODES = ['500']

// Create an instance of axios with the specified configuration
export const clientApi = axios.create({
	baseURL: import.meta.env.VITE_APP_NEW_PRODUCT,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

// Setup retries with the axios-retry package, for handling network issues or server errors.
axiosRetry(clientApi, {
	retries: RETRY_MAX_ATTEMPTS,
	retryDelay: exponentialDelay,
	retryCondition: (error) => RETRY_ERRORS_CODES.includes(error.response.status),
})

// Interceptor to handle request configurations.
clientApi.interceptors.request.use(
	(config) => {
		const currentSession = GetMasterUserToken()

		// Check for the session token and attach it to the authorization header (use of 'Bearer' is optional).
		if (currentSession) {
			config.headers.Authorization = `${currentSession}`
		} else {
			// If no session token is present, redirect to login.
			window.location.href = import.meta.env.VITE_APP_LOGIN_URL
		}

		return config
	},
	(error) => Promise.reject(error)
)

// Interceptor to handle responses from the API.
clientApi.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		// If the error code indicates an unauthorized or forbidden response, redirect to login.
		if ([401, 403].includes(error?.response?.status)) {
			window.location.href = import.meta.env.VITE_APP_LOGIN_URL
		}

		return Promise.reject(error)
	}
)

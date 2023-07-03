import { getCookieValue, setCookie } from '@/helpers/auth.helper'

// The key used to store and retrieve the session data from the cookie. Replace 'productName' with your product name.
export const SESSION_DATA_KEY = 'productName@session'

// The expiration date of session cookies, set to the next day.
export const TomorrowDate = new Date().setDate(new Date().getDate() + 1)

// The key used to store and retrieve the session environment. Replace 'productName' with your product name.
export const SESSION_ENV = 'productName@env'

/**
 * Sets the master token cookie.
 *
 * @param {string} token - The master token to be set in the cookie.
 * @returns {void}
 */
export function setMasterTokenCookie(token) {
	return setCookie(SESSION_DATA_KEY, token, TomorrowDate)
}

/**
 * Retrieves the user's master token from the cookie.
 *
 * @returns {string} - The user's master token.
 */
export function GetMasterUserToken() {
	return getCookieValue(SESSION_DATA_KEY).replace(/%3D/g, '=')
}

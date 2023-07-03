/**
 * Checks if a specific cookie exists.
 *
 * @param {string} cookieName - The name of the cookie to check.
 * @returns {boolean} - Returns true if the cookie exists, false otherwise.
 */
export const hasCookie = (cookieName) =>
	document.cookie.split('; ').find((row) => row.startsWith(cookieName))

/**
 * Retrieves the value of a specific cookie.
 *
 * @param {string} cookieName - The name of the cookie whose value will be retrieved.
 * @returns {string} - The value of the cookie if it exists, or an empty string if it doesn't.
 */
export const getCookieValue = (cookieName) => {
	if (!hasCookie(cookieName)) return ''
	return document.cookie
		.split('; ')
		.find((row) => row.startsWith(`${cookieName}=`))
		.split('=')[1]
}

/**
 * Sets a cookie with the provided name, value and expiration date.
 *
 * @param {string} cookieName - The name of the cookie to set.
 * @param {string} cookieValue - The value of the cookie to set.
 * @param {Date} expiresDate - The expiration date of the cookie to set.
 */
export const setCookie = (cookieName, cookieValue, expiresDate) => {
	document.cookie = `${cookieName}=${cookieValue}; expires=${new Date(
		expiresDate
	).toUTCString()}; path=/`
}

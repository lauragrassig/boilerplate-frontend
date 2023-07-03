import { setMasterTokenCookie } from '@/auth/session'
import { clientApi } from '@/auth/axios'
import apiPlugin from '@/auth/plugins'

function authenticate(token) {
	return setMasterTokenCookie(token)
}

export { authenticate, clientApi, apiPlugin }

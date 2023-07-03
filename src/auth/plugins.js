import { clientApi } from '@/auth'

export default {
	install: (app) => {
		app.config.globalProperties.$clientApi = clientApi
	},
}

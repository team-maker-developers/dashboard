import { Context, Middleware } from '@nuxt/types' // eslint-disable-line no-unused-vars
import { isShareScope } from '@/constants/scopes'

const checkScope: Middleware = ({ error, route }: Context) => {
  if (!isShareScope()) {
    return
  }

  if (String(route.name).startsWith('share')) {
    return
  }

  if (String(route.name).startsWith('login')) {
    return
  }

  error({
    statusCode: 403,
    message: 'アクセスできないページです。お手数ですが、やり直してください。'
  })
}

export default checkScope

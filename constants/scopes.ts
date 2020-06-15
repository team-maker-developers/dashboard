import { loginStore } from '@/store'

interface Scopes {
  shareJob: string
  loginAdmin: string
  all: string
}

export const scopes: Scopes = {
  shareJob: 'share-job',
  loginAdmin: 'login-admin',
  all: '*'
}

export const canAccessAdmin: () => boolean = () => {
  const scope = loginStore.loginScope
  if (scope === scopes.all) {
    return true
  }

  return scope === scopes.loginAdmin
}

export const isShareScope: () => boolean = () => {
  return loginStore.loginScope === scopes.shareJob
}

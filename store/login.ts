import axios from 'axios'
import moment from 'moment'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { rootState } from '@/store'
/* eslint-disable no-unused-vars */
import {
  LoginPost,
  EmailLoginPost,
  SocialLoginPost
} from '@/constants/login/login-post'
/* eslint-enable no-unused-vars */

interface apiClientData {
  id: string
  secret: string
}

interface loginToken {
  accessToken: string
  refreshToken: string
  expiresIn: string
}

export interface LoginState {
  uniqueId: string
  accessToken: string
  apiClientData: apiClientData | null
}

@Module({ stateFactory: true, namespaced: true, name: 'login' })
export default class Login extends VuexModule implements LoginState {
  accessToken: string = ''
  refreshToken: string = ''
  expiredAt: string = ''
  uniqueId: string = ''
  apiClientData: apiClientData | null = null

  redirectTo: string = ''

  @Mutation
  setUniqueId(uniqueId: string) {
    this.uniqueId = uniqueId
  }

  @Mutation
  setClientData(apiClientData: apiClientData) {
    this.apiClientData = apiClientData
  }

  @Mutation
  setAccessToken(token: loginToken) {
    this.accessToken = token.accessToken
    this.refreshToken = token.refreshToken
    this.expiredAt = moment().add(token.expiresIn, 'seconds').format()
    rootState.app.$apolloHelpers.onLogin(this.accessToken)
  }

  @Mutation
  logout(message: string = '') {
    const uniqueId = this.uniqueId

    this.accessToken = ''
    this.refreshToken = ''
    this.uniqueId = ''
    this.expiredAt = ''

    rootState.app.$apolloHelpers.onLogout()

    const baseQuery = { unique_id: uniqueId }

    const hasMessage = message !== ''
    const query = hasMessage
      ? baseQuery
      : {
          message: encodeURIComponent(message),
          ...baseQuery
        }
    rootState.$router.push({ name: 'login', query })
  }

  @Mutation
  setRedirectTo(redirectTo: string) {
    this.redirectTo = redirectTo
  }

  @Mutation
  clearRedirectTo() {
    this.redirectTo = ''
  }

  get redirectToPath(): string {
    if (this.redirectTo === '') {
      return '/'
    }

    return decodeURIComponent(this.redirectTo)
  }

  get isLoggedIn(): boolean {
    return this.accessToken !== ''
  }

  get isExpired(): boolean {
    if (!this.expiredAt) {
      return false
    }

    return moment(this.expiredAt).isBefore()
  }

  get getApiFormData(): (formData: FormData) => FormData {
    return (formData: FormData) => {
      if (!this.apiClientData) {
        throw new Error('環境変数が登録されていません。')
      }

      formData.append('client_id', this.apiClientData.id)
      formData.append('client_secret', this.apiClientData.secret)
      formData.append('scope', '*')
      return formData
    }
  }

  @Action({ rawError: true })
  async getAccessToken(loginPost: LoginPost) {
    const formData = this.getApiFormData(loginPost.formData)
    const response = await axios.post(loginPost.url, formData)
    const { data } = response

    this.setAccessToken({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in
    })
    return data.access_token
  }

  @Action({ rawError: true })
  async postEmailLogin(emailLoginPost: EmailLoginPost) {
    await this.getAccessToken(emailLoginPost)
  }

  @Action({ rawError: true })
  async postSocialLogin(socialLoginPost: SocialLoginPost) {
    await this.getAccessToken(socialLoginPost)
  }
}

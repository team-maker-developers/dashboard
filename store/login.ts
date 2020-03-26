import axios from 'axios'
import moment from 'moment'
import { rootState } from '@/store'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { LoginPost, EmailLoginPost, SocialLoginPost } from '~/models/login-post'

interface apiClientData {
  id: string
  secret: string
}

interface loginToken {
  access_token: string
  refresh_token: string
  expires_in: string
}

export interface LoginState {
  uniqueId: string
  accessToken: string
  apiClientData: apiClientData|null
}

@Module({ stateFactory: true, namespaced: true, name: 'login' })
export default class Login extends VuexModule implements LoginState {
  accessToken: string = ''
  refreshToken: string = ''
  expiredAt: string = ''

  uniqueId: string = ''
  apiClientData: apiClientData|null = null

  @Mutation
  setUniqueId(uniqueId: string) {
    this.uniqueId = uniqueId
  }

  @Mutation
  setClientData(apiClientData: apiClientData) {
    this.apiClientData = apiClientData
  }

  get isLoggedIn(): boolean {
    return this.accessToken !== ''
  }

  get isExpired(): boolean{
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

  @Mutation
  setAccessToken( token: loginToken ) {
    this.accessToken = token.access_token
    this.refreshToken = token.refresh_token
    this.expiredAt = moment().add(token.expires_in, 'seconds').format()
    rootState.app.$apolloHelpers.onLogin(this.accessToken)
  }

  @Mutation
  logout() {
    const uniqueId = this.uniqueId

    this.accessToken = ''
    this.refreshToken = ''
    this.uniqueId = ''

    rootState.app.$apolloHelpers.onLogout()
    rootState.$router.push(`/login/?unique_id=${uniqueId}`)
  }

  @Mutation
  clearExpireAt() {
    this.expiredAt = ''
  }

  @Action({ rawError: true })
  async getAccessToken(loginPost: LoginPost) {
    const formData = this.getApiFormData(loginPost.formData)
    const response = await axios.post(loginPost.url, formData)
    const { data } = response

    this.setAccessToken(data)
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

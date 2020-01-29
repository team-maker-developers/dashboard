import axios from 'axios'
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
    rootState.app.$apolloHelpers.onLogin(this.accessToken)
  }

  @Mutation
  logout() {
    this.accessToken = ''
    this.refreshToken = ''
    this.uniqueId = ''

    rootState.app.$apolloHelpers.onLogout()
    rootState.$router.push('/login')
  }

  @Action
  async getAccessToken(loginPost: LoginPost) {
    const formData = this.getApiFormData(loginPost.formData)
    const response = await axios.post(loginPost.url, formData)
    const { data } = response

    this.setAccessToken(data)
    return data.access_token
  }

  @Action
  async postEmailLogin(emailLoginPost: EmailLoginPost) {
    await this.getAccessToken(emailLoginPost)
  }

  @Action
  async postSocialLogin(socialLoginPost: SocialLoginPost) {
    await this.getAccessToken(socialLoginPost)
  }
}

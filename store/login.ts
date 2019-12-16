import axios from 'axios'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

export interface LoginState {
  clientId: string
  accessToken: string
}

interface EmailLoginParam {
  email: string
  password: string
  url: string
}

interface SocialLoginParam {
  code: string
  url: string
}

interface ClientData {
  apiClientId: string
  apiClientSecret: string
}

interface PostParam {
  url: string
  formData: FormData
}
  
@Module({ stateFactory: true, namespaced: true, name: 'login' })
export default class Login extends VuexModule implements LoginState {
  accessToken: string = ''
  clientId: string = ''
  apiClientId: string = ''
  apiClientSecret: string = ''

  @Mutation
  setClientId(clientId: string) {
    this.clientId = clientId
  }

  @Mutation
  setClientData({ apiClientId, apiClientSecret }: ClientData) {
    this.apiClientId = apiClientId
    this.apiClientSecret = apiClientSecret
  }

  get isLoggedIn(): boolean {
    return this.accessToken === '' ? false : true;
  }

  @Mutation
  setAccessToken( accessToken: string ) {
    this.accessToken = accessToken
  }

  get baseFormData(): FormData {
    const formData = new FormData()
    formData.append('client_id', this.apiClientId)
    formData.append('client_secret', this.apiClientSecret)
    formData.append('scope', '*')
    return formData
  }

  @Action
  async fetchAccessToken({ url, formData }: PostParam) {
    const response = await axios.post(url, formData)
    const { data } = response
    this.setAccessToken(data.access_token)
    return data.access_token
  }

  @Action
  async postEmailLogin(payload: EmailLoginParam) {
    const formData = this.baseFormData
    formData.append('grant_type', 'password')
    formData.append('username', payload.email)
    formData.append('password', payload.password)
    return await this.fetchAccessToken(
      {
        url: payload.url,
        formData: formData
      }
    )
  }

  @Action
  async postSocialLogin(payload: SocialLoginParam) {
    const formData = this.baseFormData
    formData.append('grant_type', 'socialite')
    formData.append('code', payload.code)
    return await this.fetchAccessToken(
      {
        url: payload.url,
        formData: formData
      }
    )
  }
}

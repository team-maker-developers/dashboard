import axios from 'axios'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

export interface LoginState {
  clientId: string
  accessToken: string
}
  
@Module({ stateFactory: true, namespaced: true, name: 'login' })
export default class Login extends VuexModule implements LoginState {
  accessToken: string = ''
  clientId: string = ''
  apiClientId: string = ''
  apiClinetSecret: string = ''

  @Mutation
  setClientId(clientId: string) {
    this.clientId = clientId
  }

  @Mutation
  setClientData({ apiClientId, apiClinetSecret }: any) {
    this.apiClientId = apiClientId
    this.apiClinetSecret = apiClinetSecret
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
    formData.append('client_secret', this.apiClinetSecret)
    formData.append('scope', '*')
    return formData
  }

  @Action({ rawError: true })
  async fetchAccessToken({ url, formData }: any) {
    const response = await axios.post(url, formData)
    const { data } = response
    this.setAccessToken(data.access_token)
    return data.access_token
  }

  @Action({ rawError: true })
  async postEmailLogin(payload: any) {
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

  @Action({ rawError: true })
  async postSocialLogin(payload: any) {
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

import axios from 'axios'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

export interface LoginState {
  clientId: string
  accessToken: string
}

abstract class BasedLoginPost implements PostParam {
  url: string
  apiClientId: string
  apiClientSecret: string

  get formData(): FormData {
    const formData = new FormData()
    formData.append('client_id', this.apiClientId)
    formData.append('client_secret', this.apiClientSecret)
    formData.append('scope', '*')
    return formData
  }

  async getAccessToken() {
    const response = await axios.post(this.url, this.formData)
    const { data } = response
    return data.access_token
  }

}

class EmailLoginPost extends BasedLoginPost{
  email: string
  password: string

  constructor(init: Partial<EmailLoginPost>) {
    super()
    Object.assign(this, init)
  }

  get formData(): FormData {
    const formData = super.formData
    formData.append('grant_type', 'password')
    formData.append('username', this.email)
    formData.append('password', this.password)
    return formData
  }
}

class SocialLoginPost extends BasedLoginPost{
  code: string

  get formData(): FormData {
    const formData = super.formData
    formData.append('grant_type', 'socialite')
    formData.append('code', this.code)
    return formData
  }
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

  get clientData(): ClientData{
    return {
      apiClientId: this.apiClientId,
      apiClientSecret: this.apiClientSecret
    }
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
  async postEmailLogin(param: EmailLoginPost) {
    const emailLoginPost = new EmailLoginPost(
        { ...this.clientData, ...param }
      )
    this.setAccessToken( await emailLoginPost.getAccessToken() )
  }

  @Action
  async postSocialLogin(payload: SocialLoginPost) {
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

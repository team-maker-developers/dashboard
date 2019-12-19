import axios from 'axios'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

export interface LoginState {
  clientId: string
  accessToken: string
}

abstract class BasedLoginPost {
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

  set apiClientData({ apiClientId, apiClientSecret }: apiClientData) {
    this.apiClientId = apiClientId
    this.apiClientSecret = apiClientSecret
  }

}

export class EmailLoginPost extends BasedLoginPost {
  email: string
  password: string

  get formData(): FormData {
    const formData = super.formData
    formData.append('grant_type', 'password')
    formData.append('username', this.email)
    formData.append('password', this.password)
    return formData
  }
}

export class SocialLoginPost extends BasedLoginPost {
  code: string

  get formData(): FormData {
    const formData = super.formData
    formData.append('grant_type', 'socialite')
    formData.append('code', this.code)
    return formData
  }
}

interface apiClientData {
  apiClientId: string
  apiClientSecret: string
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
  setClientData({ apiClientId, apiClientSecret }: apiClientData) {
    this.apiClientId = apiClientId
    this.apiClientSecret = apiClientSecret
  }

  get clientData(): apiClientData {
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

  @Action
  async getAccessToken(loginPost: BasedLoginPost) {
    const response = await axios.post(loginPost.url, loginPost.formData)
    const { data } = response
    this.setAccessToken(data.access_token)
    return data.access_token
  }

  @Action
  async postEmailLogin(emailLoginPost: EmailLoginPost) {
    emailLoginPost.apiClientData = this.clientData
    await this.getAccessToken(emailLoginPost)
  }

  @Action
  async postSocialLogin(socialLoginPost: SocialLoginPost) {
    socialLoginPost.apiClientData = this.clientData
    await this.getAccessToken(socialLoginPost)
  }
}

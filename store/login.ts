import axios from 'axios'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

export interface LoginState {
  clientId: string
  isLoggedIn: boolean
  accessToken: string
}
  
@Module({ stateFactory: true, namespaced: true, name: 'login' })
export default class Login extends VuexModule implements LoginState {
  isLoggedIn: boolean = false
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

  @Mutation
  setLoggedIn( accessToken: string ) {
    this.accessToken = accessToken
    this.isLoggedIn = true;
  }

  @Mutation
  setLoggedOut() {
    this.accessToken = '';
    this.isLoggedIn = false;
  }

  get baseFormData(): FormData {
    const formData = new FormData()
    formData.append('client_id', this.apiClientId)
    formData.append('client_secret', this.apiClinetSecret)
    formData.append('scope', '*')
    return formData
  }

  @Action
  async postEmailLogin(payload: any) {
    const formData = this.baseFormData
    formData.append('grant_type', 'password')
    formData.append('username', payload.email)
    formData.append('password', payload.password)
    return await axios.post(payload.url, formData).then((loginResult)=>{
      const { status, data } = loginResult
      if(status == 200){
        this.setLoggedIn(data.access_token)
      }
      return loginResult
    })
  }

  @Action
  async postSocialLogin(payload: any) {
    const formData = this.baseFormData
    formData.append('grant_type', 'socialite')
    formData.append('code', payload.code)

    return await axios.post(payload.url, formData)
  }
}

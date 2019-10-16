import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

export interface LoginState {
  clientId: string
  isLoggedIn: boolean
}
  
@Module({ stateFactory: true, namespaced: true, name: 'login' })
export default class Login extends VuexModule implements LoginState {
  isLoggedIn: boolean = false
  clientId: string = ''

  @Mutation
  setClientId(clientId: string) {
    this.clientId = clientId
  }
}

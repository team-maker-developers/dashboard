import { VuexModule, Module } from 'vuex-module-decorators'

export interface LoginState {
  isLoggedIn: boolean
}
  
@Module({ stateFactory: true, namespaced: true, name: 'login' })
export default class Login extends VuexModule implements LoginState {
  isLoggedIn: boolean = false
}

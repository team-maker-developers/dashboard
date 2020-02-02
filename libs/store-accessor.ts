import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Login from '~/store/login'
import Job from '~/store/job'

let rootState: Store<any>
let loginStore: Login
let jobStore: Job

function initialiseStores(store: Store<any>): void {
  rootState = store
  loginStore = getModule(Login, store)
  jobStore = getModule(Job, store)
}

export {
  initialiseStores,
  loginStore,
  jobStore,
  rootState, // appや$routerなどを取得するため
}

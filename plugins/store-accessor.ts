import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Login from '@/store/login'
import Job from '@/store/job'
import Announce from '@/store/announce'

let rootState: Store<any>
let loginStore: Login
let jobStore: Job
let announceStore: Announce

function initialiseStores(store: Store<any>): void {
  rootState = store
  loginStore = getModule(Login, store)
  jobStore = getModule(Job, store)
  announceStore = getModule(Announce, store)
}

export {
  initialiseStores,
  loginStore,
  jobStore,
  announceStore,
  // appや$routerなどを取得するため
  rootState, 
}

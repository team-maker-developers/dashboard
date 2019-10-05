import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Login from '~/store/login'

let LoginStore: Login

function initialiseStores(store: Store<any>): void {
  LoginStore = getModule(Login, store)
}

export {
  initialiseStores,
  LoginStore,
}

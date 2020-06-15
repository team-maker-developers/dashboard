import { Store } from 'vuex' // eslint-disable-line no-unused-vars
import { initialiseStores } from '@/plugins/store-accessor'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export * from '@/plugins/store-accessor'

export default (isLoading) => {
  // $nuxtがマウントしていない場合、onNuxtReadyでローディングする
  window.onNuxtReady(() => {
    window.$nuxt.$loading.start()
  })

  // $nuxtがマウント済みかチェックする
  if (!window.$nuxt._isMounted) {
    return
  }

  if (isLoading) {
    window.$nuxt.$loading.start()
  } else {
    window.$nuxt.$loading.finish()
  }
}

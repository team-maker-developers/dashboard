/* eslint-disable no-console */
// TODO: apolloのエラー処理方法を検討する
export default (error, nuxtContext) => {
  console.log('Global error handler')
  console.error(error)
}

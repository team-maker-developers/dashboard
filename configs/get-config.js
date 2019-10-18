const baseValues = {
  apiDomain: 'http://localhost:8888',
  isMock: false
}

export function getConfig(environment) {
  const { envValues } = require(`./config.${environment}.js`)
  return Object.assign(baseValues, envValues)
}

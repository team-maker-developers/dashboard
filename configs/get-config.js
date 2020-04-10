require('dotenv').config()

const devSecrets = {
  apiClientId: process.env.API_CLIENT_ID || '',
  apiClientSecret: process.env.API_CLIENT_SECRET || ''
}

const prodSecrets = {
  apiClientId: process.env.PROD_API_CLIENT_ID || '',
  apiClientSecret: process.env.PROD_API_CLIENT_SECRET || ''
}

// 以下がデフォルト値になる
const baseValues = {
  apiDomain: 'http://localhost:8888',
  jobBoard: 'http://localhost:5000',
  isMock: false
}

export function getConfig(environment) {
  const { envValues } = require(`./config.${environment}.js`)

  const isDev = environment === 'development'
  const nodeEnvValues = isDev ? devSecrets : prodSecrets
  return Object.assign(
    {
      ...baseValues,
      ...nodeEnvValues
    },
    envValues
  )
}

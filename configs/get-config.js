require('dotenv').config()

const nodeEnvValues = {
  apiClientId: process.env.API_CLIENT_ID || '',
  apiClientSecret: process.env.API_CLIENT_SECRET || ''
}

// 以下がデフォルト値になる
const baseValues = {
  apiDomain: 'http://localhost:8888',
  jobBoard: 'http://localhost:5000',
  isMock: false
}

export function getConfig(environment) {
  const { envValues } = require(`./config.${environment}.js`)
  return Object.assign(
    {
      ...baseValues,
      ...nodeEnvValues
    },
    envValues
  )
}

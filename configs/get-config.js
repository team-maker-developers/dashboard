require('dotenv').config()

// 以下がデフォルト値になる
const baseValues = {
  apiDomain: 'http://localhost:8888',
  jobBoard: 'http://localhost:5000',
  isMock: false,
  apiClientId: process.env.DEV_API_CLIENT_ID || '',
  apiClientSecret: process.env.DEV_API_CLIENT_SECRET || ''
}

export function getConfig(environment) {
  const { envValues } = require(`./config.${environment}.js`)
  return Object.assign({ ...baseValues }, envValues)
}

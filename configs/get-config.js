require('dotenv').config()

const nodeEnvValues = {
  apiClinetId: process.env.API_CLIENT_ID || '',
  apiClinetSecret: process.env.API_CLIENT_SECRET || ''
}

// 以下がデフォルト値になる
const baseValues = {
  apiDomain: 'http://localhost:8888',
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

require('dotenv').config()

const nodeEnvValues = {
  apiClientId: process.env.API_CLIENT_ID || '',
  apiClientSecret: process.env.API_CLIENT_SECRET || '',
  jobBoard: process.env.JOB_BOARD_DOMAIN || 'https://teammaker-jobs/'
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

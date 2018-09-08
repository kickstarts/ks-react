import apisauce from 'apisauce'

import CONFIG from '../config/app'

const create = (baseURL = CONFIG.api.development) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'Token': CONFIG.auth.secret_key
    },
    timeout: 3000
  })

  const getUsers = () => api.get(`/users`)

  return {
    getUsers
  }
}

export default {
  create
}

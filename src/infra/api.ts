import axios from 'axios'

const URL = process.env.ENVIRONMENT === 'PRODUCTION'
  ? process.env.PRODUCTION_API
  : 'http://localhost:3000'

export const api = axios.create({
  baseURL: URL
})
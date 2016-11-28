import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 5000,
  headers: {
    'X-Spree-Token': 'e7bdced6bd8eddc7940c002b351846882845ec0ea1d0119d',
    'Content-Type': 'application/json'
  }
})

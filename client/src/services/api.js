import axios from "axios";

export default () => {
  return axios.create({
    baseURL: 'http://34.253.188.105/relitt/public/api/client/',
    headers: {
      Authorization: '',
      "Content-Type": "application/json"
    }
  })
}
import axios from "axios";

export default () => {
  return axios.create({
    baseURL: 'http://34.253.188.105/relitt/public/api/client/',
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')) ? (JSON.parse(localStorage.getItem('user'))).token : null}`,
      "Content-Type": "application/json"
    }
  })
}
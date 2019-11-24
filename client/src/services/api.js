import axios from "axios";

export default () => {

  const token = localStorage.getItem("token")
  return axios.create({
    baseURL: 'http://34.253.188.105/relitt/public/api/client/',
    headers: {
      Authorization: `Bearer + ${token}`
    }
  });
};


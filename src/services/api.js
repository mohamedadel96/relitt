import axios from "axios";

export default () => {
  return axios.create({
    baseURL: 'https://api.relitt.com/api/client',
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')) ? (JSON.parse(localStorage.getItem('user'))).token : null}`,
      // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L3JlbGl0dC9wdWJsaWMvYXBpL2NsaWVudC9hdXRoL3NvY2lhbCIsImlhdCI6MTU2MTU3ODQyNSwiZXhwIjozNzU2MTU3ODQyNSwibmJmIjoxNTYxNTc4NDI1LCJqdGkiOiJPbFl6bzVMeGkxMnBCMEhjIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.i6-bg8T8t-vZgLxlvWByPYdsstNsz7U9jtoosVpFFKM',
      "Content-Type": "application/json"
    }
  })
}
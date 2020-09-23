import axios from 'axios'

/*设置超时时间为3秒*/
const service = axios.create({
  timeout: 3000
})

service.interceptors.request.use(
  config => {
    return config
  },
  err => console.log(err)
)

service.interceptors.response.use(
  response => {
    let res = {}
    res.data = response.data
    res.status = response.status
    return res
  },
  err => console.log(err)
)

export default service

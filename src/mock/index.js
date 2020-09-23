import Mock from 'mockjs'
import homeApi from './home'

/*配置mock的请求时间*/
Mock.setup({
  timout: '200-300'
})

//首页拦截
Mock.mock(/\/home\/getHomeData/, homeApi.getHomeData)

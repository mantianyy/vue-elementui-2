import Mock from 'mockjs'

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          { name: 'springBoot', value: Mock.Random.float(1000, 1000, 0, 2) },
          { name: 'Vue', value: Mock.Random.float(1000, 1000, 0, 2) },
          { name: 'springCloud', value: Mock.Random.float(1000, 1000, 0, 2) },
          { name: 'React', value: Mock.Random.float(1000, 1000, 0, 2) },
          { name: 'Python', value: Mock.Random.float(1000, 1000, 0, 2) }
        ],
        barInfo: [
          { name: 'Vuex', value: Mock.Random.string('lower', 5) },
          { name: 'ElementUI', value: Mock.Random.string('lower', 5) },
          { name: 'SpringCloud', value: Mock.Random.string('lower', 5) },
          { name: 'iview', value: Mock.Random.string('lower', 5) }
        ]
      }
    }
  }
}

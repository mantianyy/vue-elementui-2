<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" class="avatar">
        <div class="avatar-info">
          <img :src="avatar" />
          <div class="avatar-desc">
            <p class="name">jiang漫天</p>
            <p>超级管理员</p>
          </div>
        </div>
        <div class="avatar-item-info">
          <p class="content">上次登录时间:<span>2020-09-26</span></p>
          <p class="content">上次登录地点:<span>上海</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" class="info">
        鼠标悬浮时显示
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in iconList" :key="item.icon" class="card-num">
          <i :class="`el-icon-${item.icon} icon`" :style="{ background: item.background, color: item.color }"></i>
          <div class="card-info">
            <p class="money">{{ item.money }}</p>
            <p class="info-item">{{ item.desc }}</p>
          </div>
        </el-card>
      </div>
      <div class="polyline">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </div>
      <div class="pie">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      avatar: require('@/assets/img/user.jpg'),
      iconList: [
        { name: 'icon-1', icon: 'circle-check', money: '$1234', desc: '今日支付订单', color: 'white', background: '#33aef0' },
        { name: 'icon-1', icon: 'circle-check', money: '$1234', desc: '今日支付订单', color: 'white', background: 'pink' },
        { name: 'icon-1', icon: 'circle-check', money: '$1234', desc: '今日支付订单', color: 'white', background: '#33aef0' },
        { name: 'icon-1', icon: 'circle-check', money: '$1234', desc: '今日支付订单', color: 'white', background: 'pink' },
        { name: 'icon-1', icon: 'circle-check', money: '$1234', desc: '今日支付订单', color: 'white', background: '#33aef0' },
        { name: 'icon-1', icon: 'circle-check', money: '$1234', desc: '今日支付订单', color: 'white', background: 'pink' }
      ]
    }
  },
  mounted() {
    this.$http('/home/getHomeData').then(
      res => {
        console.log(res.data)
      },
      error => {
        console.log(error)
      }
    )
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home.scss';
</style>

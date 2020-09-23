<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" class="avatar">
        鼠标悬浮时显示
      </el-card>
      <el-card shadow="hover" class="info">
        鼠标悬浮时显示
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in 6" :key="item">
          <i class=""></i>
          <div class="card-info">
            <p class="money">＄ 1234</p>
            <p class="info-item">今日支付订单</p>
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

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
        <el-table :data="tableData" style="width: 100%" max-height="600">
          <el-table-column prop="date" label="日期" width="80"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="80"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in iconList" :key="item.name" class="card-num">
          <i :class="`el-icon-${item.icon} icon`" :style="{ background: item.background, color: item.color }"></i>
          <div class="card-info">
            <p class="money">{{ item.money }}</p>
            <p class="info-item">{{ item.desc }}</p>
          </div>
        </el-card>
      </div>
      <div class="polyline">
        <el-card shadow="hover" style="padding:0;">
          <e-chart :chartData="echartData.order" style="height: 280px"></e-chart>
        </el-card>
      </div>
      <div class="pie">
        <el-card shadow="hover">
          <e-chart :chartData="echartData.user" style="height:300px;"> </e-chart>
        </el-card>
        <el-card shadow="hover" style="padding:0;">
          <e-chart :chartData="echartData.video" :isAxisChart="false" style="height:300px;"> </e-chart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from '../../components/Echart'
import HomeChart from '../../common/echart/home/chart'
export default {
  name: 'Home',
  components: {
    'e-chart': Echart
  },
  data() {
    return {
      avatar: require('@/assets/img/user.jpg'),
      iconList: HomeChart.iconList,
      tableData: HomeChart.tableData,
      orgOptions: {},
      chartData: HomeChart.chartData,
      echartData: {
        order: {
          xData: [],
          series: [],
          grid: { left: '3%', right: '4%', containLabel: true },
          legend: {
            textStyle: {
              color: '#333'
            },
            top: '10'
          },
          color: HomeChart.user.color
        },
        user: {
          xData: [],
          series: [],
          grid: { left: '3%', right: '4%', bottom: '0', containLabel: true },
          legend: {
            textStyle: {
              color: '#333'
            },
            top: '10'
          },
          color: HomeChart.user.color
        },
        video: {
          series: [],
          legend: {
            textStyle: {
              color: '#333'
            },
            type: 'scroll',
            orient: 'vertical',
            left: 0,
            top: 0
          },
          color: HomeChart.video.color
        }
      }
    }
  },
  mounted() {
    this.$http('/home/getHomeData').then(
      res => {
        res = res.data
        console.log(typeof HomeChart.video == 'string')
        //折线图
        let order = res.data.orderData
        this.echartData.order.xData = order.date
        let keyArray = Object.keys(order.data[0])
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key == 'wechat' ? '小程序' : key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })

        //柱状图
        let user = res.data.userData
        this.echartData.user.xData = user.map(item => item.date)
        this.echartData.user.series.push({
          name: '新增用户',
          data: user.map(item => item.new),
          type: 'bar'
        })

        this.echartData.user.series.push({
          name: '活跃用户',
          data: user.map(item => item.active),
          type: 'bar'
        })

        //饼图
        let video = res.data.videoData
        this.echartData.video.series.push({
          type: 'pie',
          data: video,
          radius: '43%',
          center: ['58%', '50%']
        })
      },
      error => {
        console.log(error)
      }
    )
    this.orgOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home.scss';
.echarts {
  width: 500px;
  height: 250px;
  margin: 0 auto;
}

/deep/ .ve-line {
  height: 300px;
}
</style>

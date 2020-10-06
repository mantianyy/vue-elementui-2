<template>
  <div style="height:100%" refs="echart">
    echart
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Echart',
  data() {
    return {
      echart: null,
      axisOption: {
        xAxis: [
          {
            type: 'category',
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: []
      },
      normalOption: {
        series: []
      }
    }
  },
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: []
        }
      }
    },
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler: function() {
        this.initChart()
      }
    }
  },
  methods: {
    initChart() {
      this.initChartData()
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        console.log('test')
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
        console.log('axis')
      } else {
        console.log('normal')
      }
    }
  }
}
</script>

<style scoped></style>

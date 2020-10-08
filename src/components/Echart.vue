<template>
  <div style="height: 100%" ref="echart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      echart: null,
      axisOption: {
        grid: {},
        color: [],
        legend: {},
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#2ec7c9'
            }
          },
          axisLabel: {
            color: '#588dd5'
          },
          data: []
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#2ec7c9'
              }
            },
            axisLabel: {
              color: '#59678c'
            }
          }
        ],
        series: []
      },
      normalOption: {
        color: [],
        legend: {},
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
          series: [],
          grid: {},
          legend: {},
          color: []
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
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  watch: {
    chartData: {
      handler: function() {
        this.initChart()
      },
      deep: true
    },
    isCollapse() {
      setTimeout(this.resizeChart, 300)
    }
  },
  methods: {
    initChart() {
      this.initChartData()
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.color = this.chartData.color
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
        this.axisOption.grid = this.chartData.grid
        this.axisOption.legend = this.chartData.legend
      } else {
        this.normalOption.color = this.chartData.color
        this.normalOption.series = this.chartData.series
        this.normalOption.legend = this.chartData.legend
      }
    },
    resizeChart() {
      this.echart ? this.echart.resize() : ''
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeChart)
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeChart)
  }
}
</script>

<style lang="scss" scoped></style>

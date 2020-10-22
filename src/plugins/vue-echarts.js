import Vue from 'vue'
import ECharts from 'vue-echarts'

//按需引入
import 'echarts/lib/chart/bar'


Vue.prototype.$ECharts = ECharts

Vue.component('v-chart', ECharts)
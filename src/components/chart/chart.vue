<template>
  <div class="container" >
     <p class="tit" >
  	 	此处使用echart，这个是非百度官方朋友封装的echart vue工具，基本使用同echart
  	 	，个人感觉比较习惯，访问地址为：
  	 	<a href="https://justineo.github.io/vue-echarts/demo/" >vue-echarts</a>
  	 </p>
  	 <div class="layout">
  	 	<el-row class="floor" :gutter="20" >
			<el-col :span="12">
				<e-chart class="chart" :options="opt1" />
			</el-col>
			<el-col :span="12">
				<e-chart class="chart" :options="opt2" />
			</el-col>
  	 	</el-row>
  	 	<el-row class="floor" :gutter="20" >
			<el-col :span="12">
				<e-chart class="chart" :options="opt3" />
			</el-col>
			<el-col :span="12">
				<e-chart class="chart" :options="opt4" />
			</el-col>
  	 	</el-row>
  	 	<el-row class="floor" :gutter="20" >
			<el-col :span="12">
				<e-chart class="chart" :options="opt5" />
			</el-col>
			<el-col :span="12">
				<e-chart class="chart" :options="opt6" />
			</el-col>
  	 	</el-row>
  	 </div>
  </div>
</template>

<script>
import eChart from 'vue-echarts/components/ECharts.vue'
import echartTool from '../../lib/echartTool';

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/chart/gauge'

import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'

export default {
  data(){
  	  return {
  	  	 opt1 : echartTool.getOpt1.apply() ,
  	  	 opt2 : echartTool.getOpt2.apply() ,
  	  	 opt3 : echartTool.getOpt3.apply() ,
  	  	 opt4 : echartTool.getOpt4.apply() ,
  	  	 opt5 : echartTool.getOpt5.apply() ,
  	  	 opt6 : echartTool.getOpt6.apply() 
  	  };
  } ,
  components : {
      eChart 
  } 
}
</script>


<style lang="scss" scoped >
	@import '../../style/chart/chart';
</style>

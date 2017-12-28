<template>
  <el-menu
	      default-active="/main"
		  class="el-menu-vertical-demo menu"
	      background-color="#324157"
	      text-color="#bfcbd9"
	      active-text-color="#20a0ff"
	      :class="{ collapse: isFolding }"
	      :router=true
	      :collapse=isFolding >
	      <el-menu-item index="/main">
	        <i class="el-icon-edit-outline"></i>
	        <span slot="title">简介</span>
	      </el-menu-item>
	      <el-submenu  index="2">
			<template class="test" slot="title">
	          <i class="el-icon-document"></i>
	          <span slot="title">element</span>
	        </template>
        	<el-menu-item index="/main/base">基本</el-menu-item>
        	<el-menu-item index="/main/table">表格</el-menu-item>
        	<el-menu-item index="/main/form">表单</el-menu-item>
        	<el-menu-item index="/main/alert">弹窗</el-menu-item>
	      </el-submenu>
	      <el-submenu index="3">
			<template slot="title">
	          <i class="el-icon-goods"></i>
	          <span slot="title">工具</span>
	        </template>
        	<el-menu-item index="/main/editor">编辑器</el-menu-item>
        	<el-menu-item index="/main/upload">文件上传</el-menu-item>
	      </el-submenu>
		  <el-menu-item index="/main/chart">
		    <i class="el-icon-star-on"></i>
		    <span slot="title">图表</span>
		  </el-menu-item>
  </el-menu>
 
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
	   data(){
            return{
               
            }
       },
	   computed : {
	   		...mapGetters({
		      isFolding : 'getMenuFolding'
		    })
	   }
	}
</script>

<style lang="scss" scoped >
	@import '../../style/include/pageMenu';
</style>
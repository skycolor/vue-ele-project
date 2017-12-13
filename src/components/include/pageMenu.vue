<template>
  <el-aside class="aside" >
		<el-menu
		      default-active="1"
		      class="el-menu-vertical-demo"
		      background-color="#324157"
		      text-color="#bfcbd9"
		      active-text-color="#20a0ff">
		      <el-menu-item index="1">
		        <i class="el-icon-edit-outline"></i>
		        <span slot="title">简介</span>
		      </el-menu-item>
		      <el-submenu index="2" background-color="#000" >
				<template slot="title">
		          <i class="el-icon-menu"></i>
		          <span slot="title">element</span>
		        </template>
	        	<el-menu-item index="2-1">基本</el-menu-item>
	        	<el-menu-item index="2-2">表格</el-menu-item>
	        	<el-menu-item index="2-3">表单</el-menu-item>
	        	<el-menu-item index="2-4">弹窗</el-menu-item>
		      </el-submenu>
		      <el-submenu index="3">
				<template slot="title">
		          <i class="el-icon-goods"></i>
		          <span slot="title">工具</span>
		        </template>
	        	<el-menu-item index="3-1">编辑器</el-menu-item>
	        	<el-menu-item index="3-2">文件上传</el-menu-item>
		      </el-submenu>
			  <el-menu-item index="4">
			    <i class="el-icon-star-on"></i>
			    <span slot="title">图表</span>
			  </el-menu-item>
	    </el-menu>
  </el-aside>
</template>

<script>
	export default {
	  
	}
</script>

<style lang="scss" scoped >
	@import '../../style/include/pageMenu';
</style>
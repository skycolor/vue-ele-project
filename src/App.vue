<template>
  <el-container id="app" >
	<!--  头部   -->
	<page-header />
	<!-- 主体 -->
	<el-container class="container-main">
		<page-menu />
		<router-view class="content-main" />
	</el-container>
    
  </el-container>
</template>

<script>
import pageHeader from './components/include/pageHeader';
import pageMenu from './components/include/pageMenu';
export default {
  	components : {
      	pageHeader , pageMenu
    }
}
</script>

<style lang="scss"  >
	@import './style/common';
</style>

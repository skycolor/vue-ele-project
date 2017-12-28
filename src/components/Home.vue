<template>
  <el-container id="app" >
	<!--  头部   -->
	<page-header />
	<!-- 主体 -->
	<el-container class="container-main">
		<page-menu class="menu" />
		<main-router class="content-main" />
	</el-container>
    
  </el-container>
</template>

<script>
import pageHeader from './include/pageHeader';
import pageMenu from './include/pageMenu';
import mainRouter from './include/mainRouter';

export default {
	components : {
      	pageHeader , pageMenu , mainRouter
    }
}
</script>

<style lang="scss" scoped >
	@import '../style/home/home';
</style>

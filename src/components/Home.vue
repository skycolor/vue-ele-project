<template>
  <el-container id="app" >
	<!--  头部   -->
	<page-header />
	<!-- 主体 -->
	<el-container class="container-main">
		<page-menu class="menu" />
		<transition mode="out-in" >
			<router-view class="content-main" />
		</transition>
	</el-container>
    
  </el-container>
</template>

<script>
import pageHeader from './include/pageHeader';
import pageMenu from './include/pageMenu';
export default {
	components : {
      	pageHeader , pageMenu
    }
}
</script>

<style lang="scss" scoped >
	@import '../style/home/home';
</style>

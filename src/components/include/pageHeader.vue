<template>
  <el-header class="head" >
		<div class="title">
			<span class="el-icon-menu" ></span>
			后台管理系统
		</div>
		<div class="logo" >
			<el-dropdown trigger="click" @command="handleCommand" >
		      <span class="name">
		        hf
		      </span>
		      <el-dropdown-menu slot="dropdown">
		        <el-dropdown-item command="quit" >退出</el-dropdown-item>
		      </el-dropdown-menu>
		    </el-dropdown>
		</div>
  </el-header>
</template>

<script>
	export default {
	  	 methods: {
	       handleCommand(command) {
	          if(command == 'quit'){
				this.$router.push('/');
	          }
	       }
	    }
	}
</script>

<style lang="scss" scoped >
	@import '../../style/include/pageHeader';
</style>
<template>
  <el-header class="head" >
		<div class="title">
			<span class="el-icon-menu" @click="handleMenuFoldClick" ></span>
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
	import {mapMutations} from 'vuex'
	export default {
	  	 methods: {
	  	   ...mapMutations([
                'handleMenuFoldClick'
           ]),
	       handleCommand(command) {			//处理头像处下拉框的点击事件
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
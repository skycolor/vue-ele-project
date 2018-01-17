<template>
  <el-header class="head" :style="{ background: getThemeObj.headBg}" >
		<div class="title">
			<span class="el-icon-menu" @click="handleMenuFoldClick" ></span>
			后台管理系统
		</div>
		<div class="logo" >
			<el-dropdown trigger="click" @command="handleUserCommand" >
		      <span class="name">
		        hf
		      </span>
		      <el-dropdown-menu slot="dropdown">
		        <el-dropdown-item command="quit" >退出</el-dropdown-item>
		      </el-dropdown-menu>
		    </el-dropdown>
		</div>
		<div class="theme" >
			<el-dropdown trigger="click" @command="handleThemeCommand" >
		      <span class="name">
		        更换主题
		      </span>
		      <el-dropdown-menu slot="dropdown">
		        <el-dropdown-item command="theme1" >默认</el-dropdown-item>
		        <el-dropdown-item command="theme2" >绿色</el-dropdown-item>
		        <el-dropdown-item command="theme3" >蓝色</el-dropdown-item>
		        <el-dropdown-item command="theme4" >紫色</el-dropdown-item>
		        <el-dropdown-item command="theme5" >黄色</el-dropdown-item>
		      </el-dropdown-menu>
		    </el-dropdown>
		</div>
  </el-header>
</template>

<script>
	import { mapGetters , mapMutations} from 'vuex'
	import themeObj from '../../lib/theme'

	export default {
	  	 methods: {
	  	   ...mapMutations([
                'handleMenuFoldClick' , 'changeTheme'
           ]),
	       handleUserCommand(command) {			//处理头像处下拉框的点击事件
	          if(command == 'quit'){
				this.$router.push('/');
	          }
	       } ,
	       handleThemeCommand(command) {			//处理更换主题事件
	          this.changeTheme(themeObj[command]);
	       } ,
	    } ,
	    computed : {
	   		...mapGetters([
		      'getThemeObj'
		    ])
	   }
	}
</script>

<style lang="scss" scoped >
	@import '../../style/include/pageHeader';
</style>
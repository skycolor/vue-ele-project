<template>
  <el-breadcrumb class="bread-nav"  separator="/">
	  <el-breadcrumb-item :class="getItemClass(index)" v-for="(value , index) in list"
	  		:key="index" >
	  	{{value}}
	  </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  	 props: {
  	 	 list : {
  	 	 	type: Array ,
      		default: []
  	 	 } ,
  	 	 iconClass : {
  	 	 	type: String , 
  	 	 	default: ''
  	 	 }
  	 } ,
  	 methods : {
  	 	getItemClass(index){
  	 		return index == 0 ? this.iconClass + " icon" : "";
  	 	}
  	 }
}
</script>

<style lang="scss" scoped >
	@import '../../style/include/breadNav';
</style>
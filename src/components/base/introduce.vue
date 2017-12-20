<template>
  <div class="container" >
      <p class="el-icon-setting title" >简介</p>
      <div class="content" >
      	  <p class="projcet-name">vue-ele-project</p>
      	  <el-collapse class="content-detail" v-model="activeName"  accordion>
			  <el-collapse-item title="项目说明  Instructions" name="1">
			    <div>
			    	基于vue2.0，使用饿了么的element-ui前端框架
			    </div>
			    <div>
			    	使用的技术包括vuex、canvas、fetch、echart、quill等...
			    </div>
			    <div>
			    	搭建这个项目的目的是为了个人熟悉vue全家桶的使用，并且完成一个公共的
			    	后端框架，用于日常开发
			    </div>
			  </el-collapse-item>
			  <el-collapse-item title="功能  Function" name="2">
			    <div>
			    	Element UI
			    </div>
			    <div>
			    	登录/注销
			    </div>
			    <div>
			    	表格
			    </div>
			    <div>
			    	表单
			    </div>
			    <div>
			    	图表
			    </div>
			    <div>
			    	富文本编辑器
			    </div>
			    <div>
			    	图片拖拽/裁剪上传
			    </div>
			    <div>
			    	列表拖拽排序
			    </div>
			  </el-collapse-item>
			  <el-collapse-item title="阿里云  Ali Cloud" name="3">
			    <div>
			    	使用阿里云上的免费接口开发的功能，都是生活日常的小东西，主要包括以下
			    </div>
			    <div>
			    	天气、音乐、智能问答、IP地址查询、新闻等等
			    </div>
			  </el-collapse-item>
			  <el-collapse-item title="个人  Personal" name="4">
			    <div>
			    	前端菜鸟一枚，喜欢到处玩玩闹闹
			    </div>
			    <div>
			    	个人git地址为：
			    	<a class="link" href="https://skycolor.github.io" target="_blank" >
			    		https://skycolor.github.io/
			    	</a>
			    </div>
			    <div>
			    	欢迎关注
			    </div>
			  </el-collapse-item>
		   </el-collapse>
	  </div>
  </div>
</template>

<script>
export default {
  	data() {
      return {
        activeName: '1'
      };
    }
}
</script>


<style lang="scss" scoped >
	@import '../../style/base/introduce';
</style>

<template>
  <div class="container" >
     <bread-nav  :list="breadList" iconClass="el-icon-goods" />
  	 <p class="tit" >
  	 	Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。 访问地址：
  	 	<a href="https://github.com/surmon-china/vue-quill-editor" >vue-quill-editor</a>
  	 	<el-button class="commitBtn" type="primary" size="small" @click="commit" >
  	 		提交
  	 	</el-button>
  	 </p>
     <quill-editor
		class="content"
		v-model="content"
      />
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

import breadNav from '../include/breadNav';

export default {
  data(){
  	return {
  		content : '' ,
      breadList : ['工具' , '编辑器' ]
  	}
  } ,
  methods : {
  	commit(){
  		this.$message({
            dangerouslyUseHTMLString: true,
            message: this.content ,
            type: 'success'
          });
  	}
  } ,
  components: {
    quillEditor , breadNav
  }
}
</script>


<style lang="scss" scoped >
	@import '../../style/tool/editor';
</style>

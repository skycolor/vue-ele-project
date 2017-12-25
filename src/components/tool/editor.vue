<template>
  <div class="container" >
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

export default {
  data(){
  	return {
  		content : ''
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
    quillEditor
  }
}
</script>


<style lang="scss" scoped >
	@import '../../style/tool/editor';
</style>

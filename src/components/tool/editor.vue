<template>
  <div class="container" >
     <quill-editor>
     	
     </quill-editor>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor
  }
}
</script>


<style lang="scss" scoped >
	@import '../../style/tool/editor';
</style>

<template>
  <div class="container" >
  	  <bread-nav  :list="breadList" iconClass="el-icon-goods" />
      <p class="tit">
      	 element-ui支持很多种类的文件上传案例，功能十分的强大！！！
      </p>
      <div class="layout">
		 <el-row class="floor" >
		  	<el-col :span="12" class="demo1" >
		  		<p>1、最简单的单图上传，比如头像</p>
		  		<el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess1"
				  :before-upload="beforeAvatarUpload1">
				  <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
		  	</el-col>
		  	<el-col :span="12" class="demo2" >
		  		<p>2、多图上传，比如照片墙</p>
		  		<el-upload
				  action="https://jsonplaceholder.typicode.com/posts/"
				  list-type="picture-card"
				  :on-preview="handlePictureCardPreview2"
				  :on-remove="handleRemove2">
				  <i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible2" >
				  <img width="100%" :src="dialogImageUrl2" alt="">
				</el-dialog>
		  	</el-col>
		 </el-row>
		 <el-row class="floor" >
			<el-col :span="12" class="demo3" >
				<p>3、图片列表缩略图</p>
				<el-upload
				  class="upload-demo"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :on-preview="handlePreview3"
				  :on-remove="handleRemove3"
				  :file-list="fileList3"
				  list-type="picture">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</el-col>
			<el-col :span="12" class="demo4" >
				<p>4、拖拽上传</p>
				<el-upload
				  class="upload-demo"
				  drag
				  action="https://jsonplaceholder.typicode.com/posts/"
				  multiple>
				  <i class="el-icon-upload"></i>
				  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</el-col>
		 </el-row>
		 <el-row class="floor" >
			<el-col :span="12" class="demo5" >
				<p>5、上传文件列表控制</p>
				<el-upload
				  class="upload-demo"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :on-change="handleChange5"
				  :file-list="fileList5">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</el-col>
		 </el-row>
      </div>
  </div>
</template>

<script>
import breadNav from '../include/breadNav';

export default {
	data() {
	  return {
	    imageUrl1: '' ,
	    dialogImageUrl2: '',
        dialogVisible2: false ,
        fileList3: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      	fileList5: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }] ,
        breadList : ['工具' , '上传' ]
	  };
	},
	components: {
      breadNav
	} ,
	methods: {
	  handleAvatarSuccess1(res, file) {
	    this.imageUrl = URL.createObjectURL(file.raw);
	  },
	  beforeAvatarUpload1(file) {
	    const isJPG = file.type === 'image/jpeg';
	    const isLt2M = file.size / 1024 / 1024 < 2;

	    if (!isJPG) {
	      this.$message.error('上传头像图片只能是 JPG 格式!');
	    }
	    if (!isLt2M) {
	      this.$message.error('上传头像图片大小不能超过 2MB!');
	    }
	    return isJPG && isLt2M;
	  } ,
	  handleRemove2(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview2(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleRemove3(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview3(file) {
        console.log(file);
      },
      handleChange5(file, fileList) {
        this.fileList5 = fileList.slice(-3);
      }
	}
}
</script>


<style lang="scss" scoped >
	@import '../../style/tool/upload';
</style>

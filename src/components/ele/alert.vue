<template>
  <div class="container">
    <bread-nav  :list="breadList" iconClass="el-icon-document" />
  	<div class="alert-info">
  		<el-alert show-icon
		    title="成功提示的文案"
		    type="success">
		</el-alert>
	  	<el-alert show-icon
		    title="消息提示的文案"
		    type="info">
	  	</el-alert>
	  	<el-alert show-icon
		    title="警告提示的文案"
		    type="warning">
	  	</el-alert>
	  	<el-alert show-icon
		    title="错误提示的文案"
		    type="error">
	  	</el-alert>
  	</div>
    <div class="message-info" >
    	<el-button type="primary" :plain="true" @click="messageTip">消息</el-button>
		<el-button type="success" :plain="true" @click="messageSuc">成功</el-button>
  		<el-button type="warning" :plain="true" @click="messageAlert">警告</el-button>
	  	<el-button type="danger" :plain="true" @click="messageErr">错误</el-button>
	  	<el-button type="info" :plain="true" @click="messageHtml">HTML自定义</el-button>
    </div>
    <div class="messageBox-info" >
    	<el-button type="danger" :plain="true" @click="messageBox1">删除</el-button>
    	<el-button type="primary" :plain="true" @click="messageBox2">提交邮箱</el-button>
    	<el-button type="info" :plain="true" @click="messageBox3">HTML自定义</el-button>
    </div>
    <div class="notifie-info" >
		<el-button :plain="true" @click="notifie1">右上角</el-button>
		<el-button :plain="true" @click="notifie2">右下角</el-button>
		<el-button :plain="true" @click="notifie3">左下角</el-button>
		<el-button :plain="true" @click="notifie4">左上角</el-button>
		<el-button :plain="true" @click="notifie5">HTML自定义</el-button>
    </div>
  </div>
</template>

<script>
import breadNav from '../include/breadNav';

export default {
    data() {
      return {
        breadList : ['element' , '弹窗' ]
      };
    } ,
    components : {
        breadNav
    } ,
  	methods : {
  	  notifie1() {
        this.$notify.success({
          title: '成功',
          message: '右上角弹出的消息'
        });
      },
      notifie2() {
        this.$notify.warning({
          title: '警告',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },
      notifie3() {
        this.$notify.error({
          title: '错误',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },
      notifie4() {
        this.$notify.info({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      } ,
      notifie5() {
        this.$notify({
          title: 'HTML',
          dangerouslyUseHTMLString: true,
          message: '<strong>我是<i>HF</i>哈哈</strong>'
        });
      } ,
  	  messageBox1(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      } ,
      messageBox2(){
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      } ,
      messageBox3(){
		this.$alert('<strong>我是<i>HF</i>哈哈</strong>', 'HTML', {
          dangerouslyUseHTMLString: true
        });
      } ,
      messageTip() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },
      messageSuc() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      messageAlert() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      messageErr() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      },
      messageHtml() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>我是<i>HF</i>哈哈</strong>' ,
          type: 'success'
        });
      }
  	}
}
</script>


<style lang="scss" scoped >
	@import '../../style/ele/alert';
</style>

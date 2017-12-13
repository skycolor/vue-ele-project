<template>
  <div class="container" >
  	 <div class="content">
		<p class="title">后台管理系统</p>
		<el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" label-width="100px" class="login-form">
		  <el-form-item  prop="account" label-width="0" >
		    <el-input placeholder="username" type="text" v-model="loginForm.account" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item  prop="password" label-width="0" >
		    <el-input placeholder="password" type="password" v-model="loginForm.password" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-button class="commit" type="primary" @click="submitForm('loginForm')">提交</el-button>
		  
		  <p class="tip">Tips : 账号和密码随便填。</p>
		</el-form>
  	 </div>

  	 <canvas id="canvas"></canvas>
  </div>
  
</template>

<script>
import particle from '../../lib/particle';

export default {
	data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.loginForm.password !== '') {
            this.$refs.loginForm.validateField('password');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          account: '',
          password: ''
        },
        rules2: {
          account: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
  	mounted(){
  		particle.particleEffect.apply();
  	} ,
  	methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           	this.$router.push('/main/');
          } else {
            return false;
          }
        });
      }
    }
}

</script>


<style lang="scss" scoped >
	@import '../../style/login/login';
</style>

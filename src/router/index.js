import Vue from 'vue'
import Router from 'vue-router'


import app from '../App'
//首页
import home from '../components/Home'
//登录
import login from '../components/login/login'
// //简介
import introduce from '../components/base/introduce.vue'
//表格
import chart from '../components/chart/chart'
//ele
import alert from '../components/ele/alert'
import base from '../components/ele/base'
import form from '../components/ele/form'
import table from '../components/ele/table'
import tableVux from '../components/ele/tableVux'
//工具
import editor from '../components/tool/editor'
import upload from '../components/tool/upload'

Vue.use(Router)

export default new Router({
  routes: [{							
      path: '/main',
      name: 'home',
      component: home ,
      children : [{
      	path: '/',
	    name: 'introduce',
	    component: introduce 
      },{
		path: 'chart',
	    name: 'chart',
	    component: chart 
      },{
		path: 'alert',
	    name: 'alert',
	    component: alert 
      },{
		path: 'base',
	    name: 'base',
	    component: base 
      },{
		path: 'form',
	    name: 'form',
	    component: form 
      },{
		path: 'table',
	    name: 'table',
	    component: table 
      },{
		path: 'tableVux',
	    name: 'tableVux',
	    component: tableVux 
      },{
		path: 'editor',
	    name: 'editor',
	    component: editor 
      },{
		path: 'upload',
	    name: 'upload',
	    component: upload 
      }]
  } , {
  	path: '/',
    name: 'login',
    component: login 
  }]
})

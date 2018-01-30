import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'


Vue.use(Vuex)

const state = {
	isMenuFolding : false  ,   //菜单是否折叠
	themeObj : {			   //系统主题风格
		menuBg : '#324157' ,
		menuTextColor : '#bfcbd9' ,
		menuActiveTextColor : '#20a0ff' ,
		headBg : '#242f42'
	} ,
	users : []
}


export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
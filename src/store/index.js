import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'


Vue.use(Vuex)

const state = {
	isMenuFolding : false     //菜单是否折叠
}


export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
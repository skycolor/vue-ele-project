import { getUsers } from '../service/request'

export default {
	async getUsers({
		commit,
		state
	}) {
		let res = await getUsers();
		commit('inputUsers', res.list);
	}
}
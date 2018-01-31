export default {
	handleMenuFoldClick(state){			//处理菜单折叠点击事件	
 		state.isMenuFolding = !state.isMenuFolding;
	} ,
	changeTheme(state , newThemeObj){		//更换主题
		state.themeObj = newThemeObj;
	} ,
	inputUsers(state , users){		//输入用户列表
		state.users = users;
	} ,
	deleteUsers(state , names){		//删除用户
		let newUsers = [];
		for(let i = 0 , user ; user = state.users[i++];){
			let judge = false;
			for(let j = 0 , name ; name = names[j++];){
				if(user.name == name) {
					judge = true;
					break;
				}
			}
			if(!judge) newUsers.push(user);
		}
		state.users = newUsers;
	}
}
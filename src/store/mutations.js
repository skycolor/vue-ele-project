export default {
	handleMenuFoldClick(state){			//处理菜单折叠点击事件	
 		state.isMenuFolding = !state.isMenuFolding;
	} ,
	changeTheme(state , newThemeObj){		//更换主题
		state.themeObj = newThemeObj;
	}
}
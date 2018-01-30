import fetch from '../lib/fetch'

/**
 * 获取用户列表
 */
export const getUsers = () => fetch('/api/getUser', {});
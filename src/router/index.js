import Router from 'vue-router'
import LoginRoute from './login'
import DashboardRoute from './dashboard'


// 通过...运算符把所有的路由拼接
export default [
  ...LoginRoute,
  ...DashboardRoute,
  { 
    path: '/', 
    redirect: '/login',
  },
]
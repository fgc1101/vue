import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import Login from '../components/user/Login'
import Welcome from '../components/home/Welcome'
import Users from '../components/user/Users'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/home',
    name: 'Home',
    component:Home,
    redirect:'/welcome',
    children: [
      {
        path : '/welcome',
        name :'Welcome',
        component:Welcome,
      },
      {
        path : '/users',
        name :'Users',
        component:Users,
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:Login,
  }
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行

  if(to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('_token');
  if(!tokenStr) return next('/login')
  next()

})


export default router

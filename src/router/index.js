/*
 * 路由对象模块
 * */
import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  getSession
} from "@/utils/storage";


//申明使用插件
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: {
      title: '登陆',
      requiresAuth: false
    }
  }, {
    path: '/info',
    name: 'info',
    component: () => import('@/views/login/info'),
    meta: {
      title: '完善个人信息',
      requiresAuth: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/index/index'),
    meta: {
      title: '首页',
      requiresAuth: true
    },
    redirect: '/myhome',
    children: [{
      path: '/myhome',
      name: 'myhome',
      component: () => import('@/views/index/home'),
      meta: {
        title: '我的',
      },
    },
    {
      path: '/incident',
      name: 'incident',
      component: () => import('@/views/index/incident'),
      meta: {
        title: '事件',
      },
    },
    {
      path: '/monitoring',
      name: 'monitoring',
      component: () => import('@/views/index/monitoring'),
      meta: {
        title: '监控',
      },
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: () => import('@/views/index/warehouse'),
      meta: {
        title: '仓库',
      },
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/index/my/my'),
      meta: {
        title: '我的',
      },
    },
    ]
  },
  {
    path: '/plan',
    name: 'plan',
    component: () => import('@/views/pages/gdplan'),
    meta: {
      title: '工地计划',
      requiresAuth: true
    }
  },
  {
    path: '/addPlan',
    name: 'addPlan',
    component: () => import('@/views/pages/addPlan'),
    meta: {
      title: '添加工地计划',
      requiresAuth: true
    }
  },
  {
    path: '/patrol',
    name: 'patrol',
    component: () => import('@/views/pages/patrol'),
    meta: {
      title: '安全巡查',
      requiresAuth: true
    }
  },
  {
    path: '/abarbeitung',
    name: 'abarbeitung',
    component: () => import('@/views/pages/abarbeitung'),
    meta: {
      title: '整改内容',
      requiresAuth: true
    }
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('@/views/index/my/education'),
    meta: {
      title: '教育',
      requiresAuth: true
    }
  },
  {
    path: '/grade',
    name: 'grade',
    component: () => import('@/views/index/my/grade'),
    meta: {
      title: '成绩单',
      requiresAuth: true
    }
  },
  {
    path: '/salary',
    name: 'salary',
    component: () => import('@/views/index/my/salary'),
    meta: {
      title: '工资条',
      requiresAuth: true
    }
  },
  {
    path: '/warehouse/inventory',
    name: 'inventory',
    component: () => import('@/views/index/warehouse/inventory'),
    meta: {
      title: '仓库库存',
    },
  },
  {
    path: '/warehouse/acceptance',
    name: 'acceptance',
    component: () => import('@/views/index/warehouse/acceptance'),
    meta: {
      title: '物料验收',
    },
  },
  {
    path: '*',
    component: () => import('@/views/error/404'),
    meta: {
      title: '404'
    }
  }
  ]
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requiresAuth === true)) {
//     if (!getSession('token')) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })
export default router

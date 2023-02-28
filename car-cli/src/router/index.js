import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/com',
    name: 'productlist',
    component: () => import('../views/ProductSelection/ProSetCom.vue'),
    redirect: '/com/list',
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '产品选购', path: '/com/list' },
      ],
    },
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: () => import('../views/ProductSelection/ProductDetail.vue'),
        meta: {
          nav: [
            { name: '主页', path: '/' },
            { name: '产品选购', path: '/com/list' },
          ],
        },
        scrollBehavior() {
          return { x: 0, y: 0 }
        }
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/ProductSelection/ProductList.vue'),
        meta: {
          nav: [
            { name: '主页', path: '/' },
            { name: '产品选购', path: '/com/list' },
          ],
        },
        scrollBehavior() {
          return { x: 0, y: 0 }
        }
      },
    ],
  },

  {
    path: '/success-list',
    name: 'success-list',
    component: () => import('../views/success/SuccessList.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '成功案例', path: '/success-list' },
      ],
    },
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },
  {
    path: '/success-deta/:id',
    name: 'success-deta',
    component: () => import('../views/success/SuccessDeta.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '成功案例', path: '/success-list' },
      ],
    },
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/about.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '关于我们', path: '/about' },
      ],
    },
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/contact.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '联系我们', path: '/contact' },
      ],
    },
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },
  {
    path: '/newsList',
    name: 'newsList',
    component: () => import('../views/news/newsList.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '新闻资讯', path: '/newsList' },
      ],
    },
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },

  {
    path: '/newsdetail',
    name: 'newsdetail',
    component: () => import('../views/news/newsDetail.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '新闻资讯', path: '/newslist' },
      ],
    },
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },
  {
    path: '/newscenter',
    name: 'newscenter',
    component: () => import('../views/news/newsCenter.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '新闻资讯', path: '/newslist' },
      ],
    },
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/user/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/user/register.vue'),
  },
  {
    path: '/intention',
    name: 'intention',
    component: () => import('../views/user/intention.vue'),
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },
  {
    path: '/initialPlan',
    name: 'initialPlan',
    component: () => import('../views/initialPlan/initialPlan.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '前期规划', path: '/initialPlan' },
      ],
    },
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },
  {
    path: '/latePromotion',
    name: 'latePromotion',
    component: () => import('../views/latePromotion/latePromotion.vue'),
    meta: {
      nav: [
        { name: '主页', path: '/' },
        { name: '后期推广', path: '/latePromotion' },
      ],
    },
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

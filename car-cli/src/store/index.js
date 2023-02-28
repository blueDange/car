import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    // 全局变量
    state: {//要设置全局访问的state对象
        //要设置的初始属性值
        userInfo: undefined
    },
    //修改全局变量必须通过mutation中的方法
    mutations: {
        // 登录
        login(state, payload) {
            state.userInfo = payload
        },
        // 推出登录
        loginout(state) {
            sessionStorage.clear()
            state.userInfo = undefined
        },
    },
    // 异步方法actions
    // action不能直接修改全局变量，需要调用commit方法来出发mutations中的方法
    actions: {
        // 登录
        login(context, payload) {
            context.commit('login', payload)
        },
        // 推出登录
        loginout(context) {
            context.commit('loginout')
        },
    }
})
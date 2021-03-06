import Vue from 'vue'
import VueRouter from 'vue-router'
import City from '../pages/city/city'
import List from '../pages/list/list'
import user from '../pages/user/index'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {path: '/', component: List},
        {path: '/list', component: List},
        {path: '/City', component: City},
        {path: '/user', component: user}

    ]
})

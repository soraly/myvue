import Vue from 'vue'
import Vuerouter from 'vue-router'
import ChildB from '../components/advanceUse/ChildB.vue'

Vue.use(Vuerouter)

console.log(ChildB, 'Sport')

var routes = [
    { path: '/news', component: ChildB },
]

export default new Vuerouter({
    routes
})
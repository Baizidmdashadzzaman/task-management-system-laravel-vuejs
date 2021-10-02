import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)


const DahboardLayout = () => import('../components/Layouts/Dashboard.vue')

const Dashboard = () => import('../components/Dashboard.vue')



const Routes = [
    

    {
        path:"/",
        component:DahboardLayout,
        meta:{
            middleware:"guest"
        },
        children:[
            {
                name:"dashboard",
                path: '/',
                component: Dashboard,
                meta:{
                    title:`Home`
                }
            }
        ]
    },


]

var router  = new VueRouter({
    mode: 'history',
    routes: Routes
})



export default router
import Vue from 'vue'
// import User from './components/user/User.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'
import Login from './components/Maincom/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/' ,
            name:'home' ,
            component:Home //eager loading
        },
        {
            path:'/polls' ,
            name:'polls' ,
            component: ()=> import('./components/pages/Polls.vue')   //lazy loading 
        },
        {
            path:'/polls/:id',
            props:true,
            name:'VoteChoice',
            component:()=> import('./components/pages/PollVote.vue')
        },
       
        {
            path: '/votes/:id',
            name: 'voteInfo',
            props:true,
            component:()=> import('./components/pages/VoteResult.vue')
        },
        {
            path: '/login',
            name:'login',
            component: Login

        },
        {
            path:'/postpoll',
            name:'postpoll',
            component:()=> import('./components/Maincom/PostPoll.vue')
        },
        {
            path:'/postpoll/:id',
            name:'postchoice',
            props:true,
            component:()=> import('./components/Maincom/PostChoice.vue')
        }
    ]
})
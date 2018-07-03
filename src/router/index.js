import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import AboutOurMission from '@/components/AboutOurMission'
import AboutOurVision from '@/components/AboutOurVision'
import ApiRequest from '@/components/ApiRequest'
import BlogDetails from '@/components/BlogDetails'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            children: [
                {
                    path: '/about/ourmission',
                    name: 'mission',
                    component: AboutOurMission
                }, {
                    path: '/about/ourvision',
                    name: 'vision',
                    component: AboutOurVision
                },
            ]
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/api',
            name: 'ApiRequest',
            component: ApiRequest
        },

        {
            path: '/vuex/blog/:id',
            name: 'blogDetails',
            component: BlogDetails
        }
    ]
})

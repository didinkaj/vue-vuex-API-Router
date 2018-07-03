import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        name: 'Johnson Didinya',
        age: 26,
        dob: '20/08/1990',
        blogs: [{
            id:1,
            title: 'Server Administration ',
            body: 'Linux Administration entails the upkeep, configuration, and reliable operation of a Linux system to ensure uptime, efficient performance, proper utilization of resources, and security of the system. The report',
            date: 'Posted on June 12, 2018 by',
            author: 'Didinya Johnson',
            url: '#/about'
        },
            {
                id:2,
                title: 'Foundation and Bootstrap ',
                body: 'Foundation is one of the advanced front-end frameworks for designing beautiful responsive websites built by ZURB in 2008, contrarily, Twitter Bootstrap is the most popular framework designed by Mark  Toto and Jacob Thornton.',
                date: 'Posted on June 13, 2018 by',
                author: 'Didinya Johnson',
                url: '#/about'
            }
        ],
        jokes: [],
        loading: false
    },
    mutations: {
        updateName(state, name) {
            state.name = name
        },
        ADD_BLOG(state, data){
             state.blogs.unshift(data)
        },
        DELETE_BLOG(state, data){
            state.blogs.pop(data)
        },
        GET_JOKES(state, data) {

            state.loading = true;

            axios.get('http://api.icndb.com/jokes/random/10')
                .then( ({ data }) => {
                    state.jokes = data.value;

                }, () => {

                })
        }
    },
    getters: {
        blogs: state => state.blogs,
        jokes: state => state.jokes,
    },
    actions: {

    },
    modules: {

    }
})
export default store
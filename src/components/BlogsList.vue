<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        props: [
            'blogs'
        ],
        data() {
            return {}
        },
        computed: {},
        methods: {
            deleteBlog(blog) {
                this.$store.commit('DELETE_BLOG', blog)
            },
            trimBlog(body) {
                let limit = 40;
                if (body.length <= limit) {
                    return body
                } else {
                    let content = body.split(' ').slice(0, limit);
                    return content = content.join(' ') + "..."
                }

            }
        },
        watch:{

        }
    }
</script>
<template>
    <div class="medium-9 cell">
        <div class="card" v-for="blog in blogs">
            <div class="card-section">
                <h3>{{blog.title}} <span class="left"><button @click="deleteBlog(blog)">X</button> </span></h3>
                <p>{{trimBlog(blog.body)}}</p>
                <ul class="menu ">
                    <li class="is-active">
                        <router-link :to="{ name: 'blogDetails', params: {id:blog.id}}">
                            Read More
                        </router-link>
                    </li>
                </ul>
                <br/>
                <div class="callout">
                    <ul class="menu simple">
                        <li>{{blog.date}}</li>
                        <li><a href="#"> {{blog.author}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
    button {
        color: red;
        cursor: pointer;
    }

    .left {
        float: right;
    }

    .link {
        color: #ffffff;
    }
</style>
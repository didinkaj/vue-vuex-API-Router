<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: 'blogDetails',
        data() {
            return {
                blog: []
            }
        },
        computed: {
            ...mapState({
                blogs: 'blogs'
            })
        },
        methods: {
            ...mapMutations(['DELETE_BLOG'])
            ,
            filterBlogs(){
                let id = this.$route.params.id;
                let blog = this.blogs.filter(blog => blog.id == id);
                this.blog = blog;
                console.log(blog)
            },
            deleteBlog(blog) {
                console.log("blog deleted")
                this.$store.commit('DELETE_BLOG', blog)
            }
        },
        mounted(){
            this.filterBlogs()
        }
         //   .filter(checkAdult)
    }
</script>
<template>
    <div class="medium-9 cell height">
        <div class="card" v-for="blogv in blog">
        <div class="card" >
            <div class="card-section">
                <h3>{{blogv.title}} <span class="left"><button @click="deleteBlog(blogv)">X</button> </span></h3>
                <p>{{blogv.body}}</p>

                <div class="callout">
                    <ul class="menu simple">
                        <li>{{blogv.date}}</li>
                        <li><a href="#"> {{blogv.author}}</a></li>
                    </ul>
                </div>
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
    .height{
        min-height:650px;
    }
</style>
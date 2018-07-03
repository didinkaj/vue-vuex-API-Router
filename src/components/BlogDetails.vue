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

            filterBlogs(){
                let id = this.$route.params.id;
                let blog = this.blogs.filter(blog => blog.id == id);
                this.blog = blog;
                console.log(blog)
            },
            deleteBlog(blogv) {
                console.log("blog deleted")
                this.$store.commit('DELETE_BLOG', blogv)
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
        <div class="card" v-for="blogvalue in blog">
        <div class="card" >
            <div class="card-section">
                <h3>{{blogvalue.title}} <span class="left"><button @click="deleteBlog(blogvalue)">X</button> </span></h3>
                <p>{{blogvalue.body}}</p>

                <div class="callout">
                    <ul class="menu simple">
                        <li>{{blogvalue.date}}</li>
                        <li><a href="#"> {{blogvalue.author}}</a></li>
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
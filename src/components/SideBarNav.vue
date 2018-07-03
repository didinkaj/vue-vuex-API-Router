<script>
    import {mapState} from 'vuex'
    export default {
        props: [],
        data() {
            return {
                title1: 'Recently Added',
                searchvalue: '',
            }

        },
        methods: {
            searchBlog(searchvalue) {
                this.$root.$emit('search', searchvalue);
                console.log(this.$root.$emit('search', searchvalue));
            }
        },
        computed:{
        ...mapState({
            blogs: 'blogs'
        })
        },
        created() {
            this.$root.$on('saveBlog', (newBlog) => {
                console.log(newBlog);
                this.blogs.unshift(newBlog);
            }),
                this.$root.$on('deleteBlog', (blog) => {
                    console.log(blog);
                    this.blogs.pop(blog);
                })
        }
    }

</script>
<template>
    <div>
        <div class="card">
            <div class="card-section">
                <table>
                    <tr>
                        <td><input v-model="searchvalue" type="search" placeholder="Search"></td>
                        <td>
                            <button type="button" class="button" @click="searchBlog(searchvalue)">Search</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="card">

            <div class="card-section">
                <h4>{{title1}}</h4>
                <ul>
                    <li v-for="blog in blogs"><a href="#">{{blog.title}}</a></li>

                    <slot name="recent"></slot>
                </ul>
            </div>
        </div>
    </div>

</template>


<style>
    .ul li {
        float: left;
    }
</style>
<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        props: [
            'blogs'
        ],
        data() {
            return {}
        },
        methods: {
            deleteBlog(blog) {
               this.$store.commit('DELETE_BLOG', blog)
            }
        }
    }
</script>
<template>
    <div class="medium-9 cell">

        <div class="card" v-for="blog in blogs">
            <div class="card-section">
                <h3>{{blog.title}} <span class="left"><button @click="deleteBlog(blog)">X</button> </span></h3>
                <p>{{blog.body}}</p>
                <a v-bind:href="blog.url" type="button" class="primary button">Read More</a>
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
</style>
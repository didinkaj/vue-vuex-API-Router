<script>
    import BlogsList from '@/components/BlogsList'
    import SideBarNav from '@/components/SideBarNav'
    import BlogPagination from '@/components/BlogPagination'
    import PageHeader from '@/components/PageHeader'
    import ContentArea from '@/components/ContentArea'
    import AddBlogForm from '@/components/AddBlogForm'
    import KarmaTest from '@/components/KarmaTest'
    import {mapState} from 'vuex'

    export default {
        name: 'Home',
        components: {
            'blogs-list': BlogsList,
            'side-bar-nav': SideBarNav,
            'blog-pagination': BlogPagination,
            'page-header': PageHeader,
            'content-area': ContentArea,
            'add-blog': AddBlogForm,
            'karma-test':KarmaTest
        },
        data() {

            return {
                isActiveBlogs: true,
                isActiveForm: false,
                msgReversal: '',
                title:' Cytonn Technology  Blog Vuex'

            }

        },
        created() {
            this.$root.$on('closeForm', () => {
                this.isActiveForm = false
                this.isActiveBlogs = true
            }),

                this.$root.$on('search', (value) => {
                    console.log(value)
                    this.filteredBlog(value)

                })

        },
        methods: {
            showAddBlogForm() {
                this.isActiveForm = true
                this.isActiveBlogs = false

            }
        },
        computed: {
            Reversalmsg() {
                return this.msgReversal.split('').reverse().join('')
            },
            ...mapState({
                blogs: 'blogs'
            })

        }
    }

</script>

<template>
    <div>
        <page-header>
            <div slot="title">
                Cytonn Technology  Blog Vuex
            </div>
            <div slot="details">
                Contains all blogs written on daily basis by cytonn software developer interns; the blogs are mainly two..
                <div class="panel clearfix">
                    <button @click="showAddBlogForm()" class="primary button addblog">Add Blog Post</button>
                </div>
            </div>
        </page-header>

        <content-area>
            <div slot="content" v-if="isActiveBlogs">
                <blogs-list :blogs="blogs"></blogs-list>
            </div>

            <div slot="content" v-if="isActiveForm">
                <add-blog></add-blog>
            </div>

            <div slot="sidebar">
                <hr/>
                <h5>Computed Properties</h5>
                <p class="red">{{Reversalmsg}}</p>
                <input type="text" v-model="msgReversal"/>
                <karma-test :title="title"></karma-test>
            </div>
        </content-area>

        <blog-pagination></blog-pagination>
    </div>
</template>


<style>
    .red {
        color: brown;
    }
    .addblog{
        background-color: ;
    }

</style>
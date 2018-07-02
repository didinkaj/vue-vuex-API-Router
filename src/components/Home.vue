<template>
    <div>
        <page-header>
            <div slot="title">
                Cytonn Technology  Blog
            </div>
            <div slot="details">
                Contains all blogs written on daily basis by cytonn software developer interns; the blogs are mainly two..
                <div class="panel clearfix">
                    <button @click="addBlog()" class="primary button">Add Blog Post</button>
                </div>
            </div>
        </page-header>

        <content-area >
            <div slot="content" v-if="isActiveBlogs" >
                <blogs-list :blogs="blogs"></blogs-list>
            </div>
            <div slot="content" v-if="isActiveForm">
                <add-blog></add-blog>
            </div>
            <div slot="sidebar">
                <hr/>
                <h5>Computed Properties</h5>
                <p >{{Reversalmsg}}</p>
                <input type="text" v-model="msgReversal"/>

            </div>

        </content-area>
        <blog-pagination></blog-pagination>
    </div>


</template>

<script>
  import BlogsList from '@/components/BlogsList'
  import SideBarNav from '@/components/SideBarNav'
  import BlogPagination from '@/components/BlogPagination'
  import PageHeader from '@/components/PageHeader'
  import ContentArea from '@/components/ContentArea'
  import AddBlogForm from '@/components/AddBlogForm'

  export default {
    name:'Home',
    components: {
      'blogs-list': BlogsList,
      'side-bar-nav': SideBarNav,
      'blog-pagination': BlogPagination,
      'page-header': PageHeader,
      'content-area': ContentArea,
      'add-blog':AddBlogForm
    },
    data () {

      return {
        isActiveBlogs:true,
        isActiveForm:false,
        msgReversal:'',
        blogs:[{
          title:'Server Administration ',
          body:'Linux Administration entails the upkeep, configuration, and reliable operation of a Linux system to ensure uptime, efficient performance, proper utilization of resources, and security of the system. The report',
          date:'Posted on June 12, 2018 by',
          author:'Didinya Johnson',
          url:'#/about'
        },
          {
            title:'Foundation and Bootstrap ',
            body:'Foundation is one of the advanced front-end frameworks for designing beautiful responsive websites built by ZURB in 2008, contrarily, Twitter Bootstrap is the most popular framework designed by Mark  Toto and Jacob Thornton.',
            date:'Posted on June 13, 2018 by',
            author:'Didinya Johnson',
            url:'#/about'
          }
        ],
      }

    },
  created(){
    this.$root.$on('closeForm', () => {
      this.isActiveForm = false;
      this.isActiveBlogs = true;
    }),
      this.$root.$on('saveBlog', (newBlog) => {
        console.log(newBlog);
        this.blogs.unshift(newBlog);
        this.isActiveForm = false;
        this.isActiveBlogs = true;
      }),
      this.$root.$on('deleteBlog', (blog) => {
        console.log(blog);
        this.blogs.pop(blog);
      }),
      this.$root.$on('search',(value) =>{
        console.log(value);
        this.filteredBlog(value)

      })



  },
    methods:{
      addBlog(){
        this.isActiveForm = true;
        this.isActiveBlogs = false

      },filteredBlog(valsearch) {
        let filter = new RegExp(this.blogs, 'i')
        return this.blogs.filter(el => el.match(filter))
        console.log( this.blogs.filter(el => el.match(filter)))
      }
    },
    computed:{
      Reversalmsg(){
      return this.msgReversal.split('').reverse().join('')
    }

    }
  }

</script>

<style>

</style>
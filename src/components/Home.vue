<template>
    <div>
        <page-header>
            <div slot="title">
                Cytonn Technology  Blog
            </div>
            <div slot="details">
                Contains all blogs written on daily basis by cytonn software developer interns; the blogs are mainly two..
                <div class="panel clearfix">
                    <a href="#/about" class="primary button">Read More</a>
                    <a href ="#" class="success button addblog">Add Blog</a>
                </div>
            </div>
        </page-header>

        <content-area>
            <div slot="content">
                <blogs-list :blogs="blogs"></blogs-list>
            </div>
            <div slot="sidebar">
                <li>Home</li>

            </div>
            <blog-pagination></blog-pagination>
        </content-area>
    </div>


</template>

<script>
  import BlogsList from '@/components/BlogsList'
  import SideBarNav from '@/components/SideBarNav'
  import BlogPagination from '@/components/BlogPagination'
  import PageHeader from '@/components/PageHeader'
  import ContentArea from '@/components/ContentArea'

  export default {
    name:'Home',
    components: {
      'blogs-list': BlogsList,
      'side-bar-nav': SideBarNav,
      'blog-pagination': BlogPagination,
      'page-header': PageHeader,
      'content-area': ContentArea
    },
    data () {

      return {
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

    }
  }

</script>

<style>
    .margintop {
        margin-top: 10px;
    }
</style>
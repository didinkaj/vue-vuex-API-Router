<script>
  export default {
    props:[

    ],
    data(){
      return {
        title1:'Recently Added',
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

</style>
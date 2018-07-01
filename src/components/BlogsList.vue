<template>
    <div class="medium-9 cell">

        <div class="card" v-for="blog in blogs">
            <div class="card-section">
                <h3>{{blog.title}} </h3>
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

<script>
  export default {
    props:[
      'blogs'
    ],
    data(){
      return{



      }
    }
  }
</script>

<style>

</style>
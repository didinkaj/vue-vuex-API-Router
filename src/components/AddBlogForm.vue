<template>
    <div>
        <p>You have typed : <span class="wordcount">{{wordcount}}</span> Words</p>
        <small class="error">The title of the Article</small>
        <input v-model="title" type="text" placeholder="Title" required>

        <small class="error">The author of the article</small>

        <input v-model="author" type="text" placeholder="Author Name" required>

        <small class="error">Your article content is required</small>
        <textarea v-model="body" placeholder="Enter your article body here" required rows="5"></textarea>

        <button @click="close()" class="secondary button">Cancel</button>

        <input @click="save()" type="submit" class="nice blue radius button right" value="Save Article">

    </div>

</template>
<script>
  export default {
    data () {
      return {
        title: '',
        author: '',
        body: '',
        date: new Date(),
        url: '#/about',
        blogDetails: []

      }
    },
    methods: {
      save () {
        const date = new Date()
        const url = '#/about'
        if(this.title!='undefined' || this.bod!='undefined'|| this.author !='undefined'){
          let newBlog = {title: this.title, body: this.body, date: this.date, author: this.author, url: this.url}
          this.$root.$emit('saveBlog', newBlog)
        }


      },
      close () {
        this.$root.$emit('closeForm')
        console.log(this.$emit('closeForm'))
      }

    },
    computed:{
      wordcount(){
        return this.body.length
      }
    }
  }
</script>
<style>
    .wordcount{
        color:red;
    }

</style>
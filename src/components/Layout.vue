<script>
  import TopBarNav from '@/components/TopBarNav'
  import Footer from '@/components/FooterSection'
  export default {
    name: 'Main',
    components:{
      'top-bar': TopBarNav,
      'footer-section': Footer
    },
    data () {
      return {
        msg: 'Blog Layout'
      }
    }
  }
</script>


<template>
    <div id="main">

        <top-bar></top-bar>
        <footer-section></footer-section>

    </div>

</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

<script>
  import PageHeader from '@/components/PageHeader'
  import ContentArea from '@/components/ContentArea'
  export default {
    name:'Contact',
    components: {
      'page-header': PageHeader,
      'content-area':ContentArea
    },
    data(){
      return{

      }
    }
  }

</script>
<template>
    <div>
    <page-header>
        <div slot="title">
            Contact us
        </div>
    </page-header>
    <content-area>
        <div slot="content">
            <h2>feel free to talk to us</h2>
        </div>
        <div slot="sidebar">


        </div>
    </content-area>
    </div>

</template>



<style>

</style>
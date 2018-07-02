<script>
  import PageHeader from '@/components/PageHeader'
  import ContentArea from '@/components/ContentArea'

  export default {
    name: 'about-mission',
    components: {
      'page-header': PageHeader,
      'content-area': ContentArea
    },
    data () {
      return {}
    }
  }
</script>

<template>
    <div>

        <page-header>
            <div slot="title">
                About Page
            </div>
        </page-header>
        <content-area>
            <div slot="content">
                <router-link :to="{name:'mission'}">Mission</router-link>
                <router-link :to="{name:'vision'}">Vision</router-link>
                <router-view></router-view>
                
            </div>
            <div slot="sidebar">


            </div>
        </content-area>


    </div>


</template>


<style>

</style>
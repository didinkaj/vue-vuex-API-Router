<script>
  import PageHeader from '@/components/PageHeader'
  import ContentArea from '@/components/ContentArea'

  export default {
    name: 'about',
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
                <h2>thanks for checking on us</h2>
            </div>
            <div slot="sidebar">
                <li>About</li>
                <li>Page</li>

            </div>
        </content-area>
    </div>


</template>


<style>

</style>
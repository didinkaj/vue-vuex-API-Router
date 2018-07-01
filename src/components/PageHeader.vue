<template>
    <div class="callout large secondary medium-9">
        <div class="text">
            <h1><slot name="title"></slot></h1>
            <p class="lead"><slot name="details"></slot></p>
        </div>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        title:'Cytonn Technology  Blog',
        details:''

      }
    }
  }
</script>

<style>
    .addblog{
        color:white;
    }

</style>
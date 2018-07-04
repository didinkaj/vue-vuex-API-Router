<template>
    <div>
        <p>{{body}}</p>
    </div>
</template>

<script>
    export default {
        props:[
            'title'
        ],
        data(){
            return{
                body:'karma test'
            }
        }
    }
</script>
<style>

</style>

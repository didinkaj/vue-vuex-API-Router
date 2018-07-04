<template>
    <div>
        
        <ul v-for="fruit in fruits">
            <li>{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:[
            'title'
        ],
        data(){
            return{
                body:'karma test',
                fruits:[
                    'bananas',
                    'oranges',
                    'pinaples',
                    'apples'
                ]
            }
        }
    }
</script>
<style>

</style>

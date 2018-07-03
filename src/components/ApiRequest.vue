<script>
    import PageHeader from '@/components/PageHeader'
    import ContentArea from '@/components/ContentArea'
    import { mapGetters } from 'vuex'

    export default {
        name: 'ApiRequest',
        components: {
            'page-header': PageHeader,
            'content-area': ContentArea
        },
        data() {
            return {


            }
        },
        computed:{
            ...mapGetters({
                jokes: 'jokes',
                loading: 'loading'
            })
        },
        methods: {
            getJokes() {
                this.$store.commit('GET_JOKES');
            }
        },

        watch: {},
        beforeMount() {
            this.getJokes();
        }
    }

</script>
<template>
    <div>
        <page-header>
            <div slot="title">
                Jokes of the day
                <button id="btn" class="" @click="getJokes()">Get Jokes</button>
            </div>
        </page-header>

        <content-area>
            <div slot="content">
                <hr/>
                <ul v-for="joke in jokes">
                    <li>{{joke.joke}}</li>

                </ul>
            </div>

            <div slot="sidebar">


            </div>
        </content-area>
    </div>
</template>


<style>

</style>
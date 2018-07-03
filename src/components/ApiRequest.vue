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
                Jokes Data pulled from API
            </div>
        </page-header>

        <content-area>
            <div slot="content">
                <div class="callout " v-for="joke in jokes">
                    <span class="id">{{joke.id}} &nbsp;</span>   <p class="lead">{{joke.joke}}<p/>

                </div>
            </div>

            <div slot="sidebar">


            </div>
        </content-area>
    </div>
</template>


<style>
    .id{
        color:blue;
        float: left;
    }

</style>
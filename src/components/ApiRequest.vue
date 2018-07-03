<script>
    import PageHeader from '@/components/PageHeader'
    import ContentArea from '@/components/ContentArea'

    export default {
        name: 'ApiRequest',
        components: {
            'page-header': PageHeader,
            'content-area': ContentArea
        },
        data() {
            return {
                jokes: [],

            }
        },
        methods: {
            getJokes() {
                this.loading = true;
                this.axios.get("http://api.icndb.com/jokes/random/10")
                    .then((response) => {
                        this.loading = false;
                        this.jokes = response.data.value;
                    }, (error) => {
                        this.loading = false;
                    })
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
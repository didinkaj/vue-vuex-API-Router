<script>
    import PageHeader from '@/components/PageHeader'
    import ContentArea from '@/components/ContentArea'
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: 'Vuex',
        components: {
            'page-header': PageHeader,
            'content-area': ContentArea
        },
        data() {
            return {
                username: '',

            }
        },
        computed: {
            ...mapState([
                'name',
                'age',
                'dob'
            ]),
            my_name() {
                return this.$store.state.name
            }

        },
        methods: {
            ...mapMutations(['updateName'])
            ,
            updated() {

               const save  = this.$store.commit('updateName', this.username)
                this.username = " "
                return save

            }
        }
    }

</script>
<template>
    <div>
        <page-header>
            <div slot="title">
                Vuex Example {{my_name }}
            </div>
        </page-header>

        <content-area>
            <div slot="content">
                <h2>feel free to talk to us </h2>
                <p>{{name}}</p>
                <p>{{dob}}</p>
                <p>{{age}}</p>

                <input name="name" type="text" v-model="username"/>
                <button @click="updated()" v-on:keyup.enter="updated()" class="button primary expanded">Save</button>
            </div>
            <div slot="sidebar">

            </div>
        </content-area>
    </div>
</template>


<style>

</style>
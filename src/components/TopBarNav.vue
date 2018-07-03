<script>
    export default {
        name: 'topNav',
        data() {
            return {

                title: 'Simple Blog With Vue'

            }

        }
    }
</script>

<template>
    <div>

        <!-- Start Top Bar -->
        <div class="top-bar grid-x ">
            <div class="top-bar-left small-4 medium-4 large-6 medium-offset-1">
                <ul class="menu">
                    <li class="menu-text">{{title}}</li>
                </ul>
            </div>
            <div class="top-bar-left small-4 medium-6 large-3">
                <ul class="menu">
                    <li class="is-active">
                        <router-link :to="{name:'Home'}">Vuex</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'About'}">About</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'Contact'}">Contact</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'ApiRequest'}">API</router-link>
                    </li>

                    <li>
                        <slot name="link"></slot>
                    </li>

                </ul>
            </div>
        </div>

        <!-- End Top Bar -->
        <div class="grid-container margintop">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    .margintop {
        margin-top: 10px;
    }

</style>
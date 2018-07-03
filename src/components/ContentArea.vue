<script>
    import SideBarNav from '@/components/SideBarNav'

    export default {
        components: {
            'side-bar-nav': SideBarNav,
        },
        data() {
            return {}
        }
    }
</script>
<template>
    <div class="grid-x grid-margin-x" id="content">
        <div class="medium-9 cell">
            <slot name="content">

            </slot>
        </div>

        <div class="medium-3 cell" data-sticky-container>
            <side-bar-nav>
                <div slot="recent">
                    <slot name="sidebar"></slot>
                </div>

            </side-bar-nav>

        </div>

    </div>
</template>
<style>
    #content {
        min-height: 500px;
    }

</style>
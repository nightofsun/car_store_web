<template>
    <div>
        <b-navbar id="app-header" type="dark" variant="dark" fixed="top">
            <b-navbar-brand>{{ $t('header.appName') }}</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item @click="goToHome">{{ $t('header.home') }}</b-nav-item>
                    <b-nav-item @click="goToEdit">{{ $t('header.editCar') }}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
import { BNavbar } from 'bootstrap-vue'
import router from '@/router'
import { EDIT_CAR_PATH, HOME_PATH } from '@/common/pathConstant'
export default {
    components: {
        BNavbar
    },
    methods: {
        async goToHome() {
            if (router.currentRoute.path !== HOME_PATH)
               await router.replace({ path: HOME_PATH })
        },
        async goToEdit() {
            if (router.currentRoute.path !== EDIT_CAR_PATH)
               await router.replace({ path: EDIT_CAR_PATH })
        }
    },
}
</script>
<style scoped>
#app-header {
    height: 8vh;
    font-size: medium;
}
</style>
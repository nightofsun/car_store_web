<template>
    <div>
        <b-navbar id="app-header" type="dark" variant="dark" fixed="top">
            <b-navbar-brand>{{$t('header.appName')}}</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :href="homePath">{{$t('header.home')}}</b-nav-item>
                    <b-nav-item :href="editCarPath">{{$t('header.editCar')}}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
import { BNavbar } from 'bootstrap-vue'
import {EDIT_CAR_PATH, HOME_PATH} from '@/common/pathConstant'
export default {
    data() {
        return {
            homePath: HOME_PATH,
            editCarPath: EDIT_CAR_PATH
        }
    },
    components: {
        BNavbar
    }

}
</script>
<style scoped>
#app-header {
    height: 8vh;
}
</style>
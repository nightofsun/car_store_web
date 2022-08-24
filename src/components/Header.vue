<template>
    <div>
        <b-navbar id="app-header" type="dark" variant="dark" fixed="top">
            <b-navbar-brand>Car</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="/">ดูรายชื่อรถ</b-nav-item>
                    <b-nav-item href="/add-or-editcar">เพิ่ม/แก้ไข</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
import { BNavbar } from 'bootstrap-vue';
export default {
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
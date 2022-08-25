<template>
    <div>
        <BaseInfo imgSrc="warning.png" :title="$t('error.internet')" />
    </div>
</template>
<script>
import BaseInfo from '@/components/BaseInfo.vue';
import Search from '@/components/Search.vue';
import Footer from '@/components/Footer.vue';
export default {
    components: { BaseInfo }
}
</script>
<style>
</style>
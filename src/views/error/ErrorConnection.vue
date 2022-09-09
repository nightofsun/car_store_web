<template>
    <div>
        <BaseInfo imgSrc="warning.png" :title="$t('error.internet')" />
    </div>
</template>
<script>
import BaseInfo from '@/components/BaseInfo.vue'
export default {
    components: { BaseInfo }
}
</script>
<style>
</style>
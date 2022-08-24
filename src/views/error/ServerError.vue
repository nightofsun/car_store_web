<template>
    <div>
        <BaseInfo imgSrc="error.png" :title="$t('error.serverDown')" />
    </div>
</template>
<script>
import BaseInfo from '@/components/BaseInfo.vue';
export default {
    components: { BaseInfo }
}
</script>
<style>
    
</style>
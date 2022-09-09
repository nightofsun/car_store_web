<template>
    <div>
        <img id="img-1" :src="img" />
        <!-- <BaseInfo imgSrc="warning.png" :title="$t('error.internet')" /> -->
    </div>
</template>
<script>
import BaseInfo from '@/components/BaseInfo.vue'
import axios from 'axios';
import { rotate, tranfromImage } from '@/utils/imageUtils';
export default {
    components: { BaseInfo },
    data() {
        return {
            img: ""
        }
    },
    methods: {
        async getImg() {
            console.log('check');
            const result = await axios.post("http://localhost:8444/a").then().catch()
            rotate(`data:image/jpeg;base64,${result.data.result}`,(base64)=>this.img=base64)
            // this.img = `data:image/jpeg;base64,${result.data.result}`
            // console.log(this.img)
        }
    },
    mounted(){
        this.getImg();
    }
}

</script>
<style>
#img-1 {
    image-orientation: none;
    /* width: 400px;
    height: 400px; */
}
</style>
<template>
        <div class="info-backdrop">
            <div class="info-position">
                <img :src="require('@/assets/'+imgSrc)" class="info-image">
                <div class="info-title">{{ title }}</div>
            </div>
        </div>
</template>
<script>
export default {
    props: {
        imgSrc: String,
        title: String
    }
}
</script>
<style>
.info-backdrop {
    position: relative;
    background-color: rgb(255, 255, 255);
    z-index: 9998;
    height: 92vh;
    width: 100%;
    top: 0px;
    left: 0px;
}

.info-position {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 9999;
}

.info-image {
    width: 15rem;
    height: auto;

}

.info-title {
    margin: 20px;
    font-size: large;
}
</style>
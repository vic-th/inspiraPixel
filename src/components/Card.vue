<script setup>
defineProps(["imagem"]);
import { Icon } from '@iconify/vue';
</script>

<template>

<div class="card">
    <button><Icon icon="streamline-flex:heart" width="14" height="14" /></button>
    <img :src="imagem" alt="">

</div>

</template>

<style scoped lang="scss">

.card{
    width: 30vw;
    height: 50vh;

    

    position: relative;


    img{
        border-radius: 10px;
        height: 100%;
        width: 100%;
    }

    button{
        position: absolute;
        right: 10px;
        background-color: transparent;
        border: none;
    }

}
</style>
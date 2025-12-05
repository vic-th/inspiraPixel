<script setup>
import { ref } from 'vue';
import Card from './Card.vue';
import axios from 'axios';

const imagens = ref([]);

async function caregarImg() {
      const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=9");
    
    console.log(res);

    imagens.value = res.data;
}
caregarImg();
</script>

<template>

<h2>inpíri-se</h2>

<section class="cards">
<Card v-for="img in imagens" :imagem="img.download_url" />
</section>
</template>

<style scoped lang="scss">
    h2{
    width: 100%;
    text-align: center;
    font-family: "Roboto";
    font-size: 2.25rem;
    font-weight: 700;
    color: #2d2d2d;
    margin:3rem 0;
    }

    .cards{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
       
        justify-content: center;
    }
</style>


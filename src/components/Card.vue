<script setup>
defineProps(["imagem"]);
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const like = ref(false)

function darLike() {
    like.value = !like.value
}
</script>

<template>

<div class="card">
    <button @click="darLike"><Icon id="curtida" :icon="like ? 'prime:thumbs-up-fill' : 'prime:thumbs-up'"/></button>
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

    #curtida{
        color: rgb(255, 170, 0);
        
        width: 1.8rem;
        height: 1.5rem;
    }

 

}
</style>
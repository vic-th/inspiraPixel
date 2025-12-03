<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
<header>
<img src="../assets/logo.svg" alt="A scenic view of a vibrant landscape featuring rolling hills under a clear blue sky, with a few fluffy clouds. The foreground includes colorful wildflowers swaying gently in the breeze, creating a cheerful and inviting atmosphere.">

<nav>
    <ul>
    <li><a href="http://localhost:5174/lupa"><Icon class="icon" icon="basil:search-outline" /></a></li>
    <li><a href="http://localhost:5174/">Inicio</a></li>
    <li><a href="http://localhost:5174/galeria">Galeria</a></li>
    <li><a href="http://localhost:5174/favoritos">Favoritos</a></li>
    <li><a href="http://localhost:5174/usePage"><Icon class="icon" icon ="basil:user-outline"/></a></li>
</ul>
</nav>
</header>

</template>

<style scoped lang="scss">
header{
    display: flex;
   justify-content: space-between;
   margin: 2rem;
    
   ul{
      display: flex;
     align-items: center;
    list-style: none;
    gap: 1rem;
   }
   a{
    text-decoration: none;
    color: black;
   }

   .icon{
    font-size: 2rem;
   }
}


</style>
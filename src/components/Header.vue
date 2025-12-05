<script setup>
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';
import router from '../router';
</script>

<template>
<header>
<img src="../assets/logo.svg" alt="A scenic view of a vibrant landscape featuring rolling hills under a clear blue sky, with a few fluffy clouds. The foreground includes colorful wildflowers swaying gently in the breeze, creating a cheerful and inviting atmosphere.">

<nav>
    <ul>
        <li>
          <RouterLink to="/lupa">
            <Icon class="icon" icon="basil:search-outline" />
          </RouterLink>
        </li>
     <li><RouterLink to="/">Inicio</RouterLink></li>
    <li><RouterLink to="/galeria">Galeria</RouterLink></li>
    <li><RouterLink to="/favoritos">Favoritos</RouterLink></li>
    <li><RouterLink to="/userPage">
    <Icon class="icon" icon="basil:user-outline" />
    </RouterLink>
    </li>
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

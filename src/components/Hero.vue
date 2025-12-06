<script setup></script>
<template>
  <section class="hero">
    <div class="slogan">
      <h2>Onde a paisagem vira <span>inspiração</span>.</h2>
      <p>
        Explore paisagens, cores e luzes que inspiram novas histórias através da
        fotografia.
      </p>
    </div>
    <img src="../assets/fotografo.svg" alt="Imagem ilustrativa" />
  </section>
</template>
<style scoped lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;

  
  .slogan{
    width: 40.123rem;
    height: 14.313rem;

    margin-left: 4.813rem;
    text-align: center;
  
    h2{font-size: 2rem;}

span{
    font-size: 2rem;
    color: darkmagenta;
   
}

p{
font-family: "Poppins";
font-weight: 500;
font-size: 1rem;
 
}
}

img{
width: 30vw;

}
}
</style>
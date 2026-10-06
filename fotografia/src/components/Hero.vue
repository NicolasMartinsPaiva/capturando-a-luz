<script setup>
function irParaProxima() {
  document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="inicio" class="hero">
    <div class="hero-fundo"></div>
    <div class="container hero-conteudo anim-entrada">
      <p class="rotulo">Projeto escolar</p>
      <h1 class="hero-titulo">CAPTURANDO A LUZ</h1>
      <p class="hero-frase">"Um instante passa. Uma fotografia faz com que ele permaneça."</p>
      <p class="hero-texto">
        Uma viagem pela história das câmeras, da câmara escura ao smartphone, com as fotografias que mudaram a forma de ver o mundo.
      </p>
      <button class="botao" @click="irParaProxima">VER A HISTÓRIA DAS CÂMERAS</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--cor-fundo-escuro);
  color: var(--cor-texto-claro);
}

.hero-fundo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 25% 30%, rgba(201, 162, 75, 0.25), transparent 45%),
    radial-gradient(circle at 80% 70%, rgba(201, 162, 75, 0.12), transparent 50%);
}

.hero-conteudo {
  position: relative;
  z-index: 1;
  max-width: 760px;
  padding-top: 120px;
  padding-bottom: 80px;
}

.hero-titulo {
  font-size: clamp(2.6rem, 7vw, 5rem);
  letter-spacing: 2px;
  margin-bottom: 22px;
}

.hero-frase {
  font-family: var(--fonte-titulo);
  font-style: italic;
  font-size: clamp(1.2rem, 2.4vw, 1.6rem);
  color: var(--cor-dourado-claro);
  margin-bottom: 18px;
}

.hero-texto {
  font-size: 1.05rem;
  color: #d8d0bf;
  max-width: 560px;
  margin-bottom: 34px;
}
</style>

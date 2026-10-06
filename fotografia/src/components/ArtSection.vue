<script setup>
// Arte, Linguagem e Interpretação: conceitos de composição + fotógrafos que
// marcaram a história da fotografia.
import { conceitosArte, fotografos } from '../data.js'
</script>

<template>
  <section id="arte" class="secao">
    <div class="container cabecalho-secao">
      <p class="rotulo">Área 04</p>
      <h2 class="titulo-secao">Fotografia como arte</h2>
      <p class="subtitulo">
        A fotografia deixou de ser apenas registro de acontecimentos e passou também
        a ser uma forma de expressão. Uma fotografia pode contar diferentes histórias.
      </p>
    </div>

    <div class="container grade grade-6 conceitos-arte">
      <div class="card conceito" v-for="c in conceitosArte" :key="c.titulo">
        {{ c.titulo }}
      </div>
    </div>

    <div class="container">
      <h3 class="titulo-fotografos">Fotógrafos que marcaram a fotografia</h3>
      <div class="grade grade-3">
        <div class="card" v-for="f in fotografos" :key="f.nome">
          <div class="placeholder-imagem">Espaço para fotografia de {{ f.nome }}</div>
          <h4>{{ f.nome }}</h4>
          <p class="estilo-fotografo">{{ f.estilo }}</p>
          <p>{{ f.texto }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.conceitos-arte { margin-bottom: 60px; }

.conceito {
  text-align: center;
  font-family: var(--fonte-titulo);
  font-size: 1.05rem;
  padding: 24px 14px;
}

.titulo-fotografos {
  text-align: center;
  margin-bottom: 26px;
}

.estilo-fotografo {
  color: var(--cor-dourado);
  font-size: 0.85rem;
  font-weight: 600;
}

@media (max-width: 900px) {
  .conceitos-arte { grid-template-columns: repeat(3, 1fr); }
}
</style>

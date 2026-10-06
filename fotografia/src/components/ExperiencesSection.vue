<script setup>
import { ref } from 'vue'
import { experiencias } from '../data.js'

const abaAtiva = ref(0)
</script>

<template>
  <section id="experiencias" class="secao secao-escura">
    <div class="container cabecalho-secao">
      <p class="rotulo">Mão na massa</p>
      <h2 class="titulo-secao">Experiências</h2>
      <p class="subtitulo">Atividades simples e seguras para explorar a física da fotografia.</p>
    </div>

    <div class="container">
      <div class="abas">
        <button
          v-for="(exp, i) in experiencias"
          :key="exp.titulo"
          class="aba-botao"
          :class="{ ativo: abaAtiva === i }"
          @click="abaAtiva = i"
        >
          {{ exp.titulo }}
        </button>
      </div>

      <div class="card card-escuro experiencia-detalhe">
        <h3>{{ experiencias[abaAtiva].titulo }}</h3>
        <p><strong>Objetivo:</strong> {{ experiencias[abaAtiva].objetivo }}</p>
        <p><strong>Materiais:</strong> {{ experiencias[abaAtiva].materiais }}</p>
        <p><strong>Como fazer:</strong> {{ experiencias[abaAtiva].comoFazer }}</p>
        <p><strong>O que observar:</strong> {{ experiencias[abaAtiva].observar }}</p>
        <p><strong>Explicação científica:</strong> {{ experiencias[abaAtiva].explicacao }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.abas {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
  justify-content: center;
}

.aba-botao {
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid #3a352c;
  background: #1e1b16;
  color: var(--cor-texto-claro);
  font-size: 0.9rem;
}

.aba-botao.ativo {
  background: var(--cor-dourado);
  color: #1a1710;
  border-color: var(--cor-dourado);
  font-weight: 600;
}

.experiencia-detalhe {
  max-width: 680px;
  margin: 0 auto;
}
</style>

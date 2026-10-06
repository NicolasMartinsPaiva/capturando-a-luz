<script setup>
// Química dos Processos: etapas clicáveis do processo de revelação.
import { ref } from 'vue'
import { etapasQuimica } from '../data.js'

const etapaSelecionada = ref(null)

function selecionar(etapa) {
  etapaSelecionada.value = etapaSelecionada.value === etapa ? null : etapa
}
</script>

<template>
  <section id="quimica" class="secao secao-escura">
    <div class="container cabecalho-secao">
      <p class="rotulo">Área 02</p>
      <h2 class="titulo-secao">Química dos Processos</h2>
      <p class="subtitulo">
        Do filme fotossensível à imagem revelada: uma sequência química transforma
        luz em fotografia.
      </p>
    </div>

    <div class="container">
      <div class="fluxo-etapas">
        <template v-for="(etapa, i) in etapasQuimica" :key="etapa.titulo">
          <button
            class="etapa-botao"
            :class="{ ativo: etapaSelecionada === etapa }"
            @click="selecionar(etapa)"
          >
            {{ etapa.titulo }}
          </button>
          <span v-if="i < etapasQuimica.length - 1" class="seta">→</span>
        </template>
      </div>

      <div v-if="etapaSelecionada" class="card card-escuro etapa-detalhe">
        <h4>{{ etapaSelecionada.titulo }}</h4>
        <p>{{ etapaSelecionada.desc }}</p>
      </div>

      <div class="comparacao">
        <span>Imagem latente</span>
        <span class="seta">→</span>
        <span>Negativo</span>
        <span class="seta">→</span>
        <span>Fotografia</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fluxo-etapas {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-bottom: 24px;
}

.etapa-botao {
  padding: 12px 20px;
  border-radius: 999px;
  border: 1px solid #3a352c;
  background: #1e1b16;
  color: var(--cor-texto-claro);
  font-size: 0.9rem;
}

.etapa-botao.ativo {
  background: var(--cor-dourado);
  color: #1a1710;
  border-color: var(--cor-dourado);
  font-weight: 600;
}

.seta { color: var(--cor-dourado); }

.etapa-detalhe {
  max-width: 560px;
  margin: 0 auto 40px;
}

.comparacao {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  font-family: var(--fonte-titulo);
  font-size: 1.1rem;
  color: var(--cor-dourado-claro);
}
</style>

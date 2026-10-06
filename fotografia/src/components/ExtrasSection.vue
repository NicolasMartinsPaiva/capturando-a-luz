<script setup>
// Reúne três partes visuais mais leves do site:
// moldura interativa, cartões de frases e comparação analógico x digital,
// além do fluxo geral da fotografia (diagrama simples).
import { ref } from 'vue'
import { frases, analogico, digital } from '../data.js'

const mensagemCaptura = ref('')

function registrarMomento() {
  mensagemCaptura.value = 'Momento registrado! ✨'
  setTimeout(() => { mensagemCaptura.value = '' }, 2200)
}

const fluxo = ['Luz', 'Lente / Orifício', 'Formação da imagem', 'Registro', 'Processamento', 'Fotografia', 'Memória']
</script>

<template>
  <section class="secao">
    <!-- Moldura interativa -->
    <div class="container cabecalho-secao">
      <p class="rotulo">Capture seu instante</p>
      <h2 class="titulo-secao">Uma moldura para o seu momento</h2>
    </div>
    <div class="container moldura-bloco">
      <div class="moldura">
        <span>CAPTURE SEU INSTANTE</span>
      </div>
      <button class="botao" @click="registrarMomento">Registrar momento</button>
      <p class="mensagem-captura" v-if="mensagemCaptura">{{ mensagemCaptura }}</p>
    </div>

    <!-- Cartões de frases -->
    <div class="container frases-bloco">
      <div class="card frase-card" v-for="f in frases" :key="f">
        <p>"{{ f }}"</p>
      </div>
    </div>

    <!-- Analógico x digital -->
    <div class="container cabecalho-secao" style="margin-top:70px;">
      <p class="rotulo">Comparação</p>
      <h2 class="titulo-secao">Analógico × Digital</h2>
    </div>
    <div class="container grade grade-2">
      <div class="card">
        <h3>Fotografia analógica</h3>
        <ul>
          <li v-for="item in analogico" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="card">
        <h3>Fotografia digital</h3>
        <ul>
          <li v-for="item in digital" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- Fluxo geral da fotografia -->
    <div class="container cabecalho-secao" style="margin-top:70px;">
      <p class="rotulo">Síntese</p>
      <h2 class="titulo-secao">O fluxo da fotografia</h2>
    </div>
    <div class="container fluxo-geral">
      <template v-for="(passo, i) in fluxo" :key="passo">
        <span class="passo-fluxo">{{ passo }}</span>
        <span v-if="i < fluxo.length - 1" class="seta-fluxo">↓</span>
      </template>
    </div>
  </section>
</template>

<style scoped>
.moldura-bloco {
  text-align: center;
  margin-bottom: 60px;
}

.moldura {
  width: 260px;
  aspect-ratio: 4 / 5;
  margin: 0 auto 26px;
  border: 10px solid #fff;
  outline: 1px solid var(--cor-borda);
  box-shadow: var(--sombra-media);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #efe7d4, #d9cdb0);
  font-family: var(--fonte-titulo);
  color: #6b6357;
  text-align: center;
  padding: 20px;
}

.mensagem-captura {
  margin-top: 14px;
  color: var(--cor-dourado);
  font-weight: 600;
}

.frases-bloco {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.frase-card {
  text-align: center;
  font-family: var(--fonte-titulo);
  font-style: italic;
}

.fluxo-geral {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.passo-fluxo {
  padding: 12px 26px;
  border-radius: 999px;
  background: var(--cor-card);
  border: 1px solid var(--cor-borda);
  font-weight: 600;
}

.seta-fluxo { color: var(--cor-dourado); font-size: 1.1rem; }

@media (max-width: 800px) {
  .frases-bloco { grid-template-columns: 1fr; }
}
</style>

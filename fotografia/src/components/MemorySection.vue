<script setup>
// Memória e Identidade + Mural interativo ("O que você gostaria de preservar?")
import { ref } from 'vue'
import { perguntasMemoria } from '../data.js'

const respostas = ref([])
const textoAtual = ref('')

function enviarResposta() {
  const texto = textoAtual.value.trim()
  if (!texto) return
  respostas.value.push(texto)
  textoAtual.value = ''
}

function limparRespostas() {
  respostas.value = []
}
</script>

<template>
  <section id="memoria" class="secao">
    <div class="container cabecalho-secao">
      <p class="rotulo">Área 06</p>
      <h2 class="titulo-secao">Memória e identidade</h2>
      <p class="subtitulo">Uma fotografia pode atravessar gerações.</p>
    </div>

    <div class="container perguntas-memoria">
      <div class="card pergunta" v-for="p in perguntasMemoria" :key="p">
        <p>{{ p }}</p>
      </div>
    </div>

    <div class="container mural">
      <h3>O que você gostaria de preservar?</h3>
      <div class="mural-formulario">
        <textarea
          v-model="textoAtual"
          placeholder="Escreva aqui o que você gostaria de guardar para sempre..."
          rows="3"
        ></textarea>
        <div class="mural-botoes">
          <button class="botao" @click="enviarResposta">Enviar</button>
          <button class="botao-contorno" @click="limparRespostas" v-if="respostas.length">
            Limpar respostas
          </button>
        </div>
      </div>

      <div class="mural-cartoes" v-if="respostas.length">
        <div class="cartao-resposta" v-for="(r, i) in respostas" :key="i">
          "{{ r }}"
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perguntas-memoria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 60px;
}

.pergunta {
  text-align: center;
  font-family: var(--fonte-titulo);
  font-style: italic;
  color: var(--cor-texto-suave);
}

.mural h3 {
  text-align: center;
  margin-bottom: 22px;
}

.mural-formulario {
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mural-formulario textarea {
  padding: 14px;
  border-radius: 10px;
  border: 1px solid var(--cor-borda);
  font-family: var(--fonte-texto);
  resize: vertical;
}

.mural-botoes {
  display: flex;
  gap: 12px;
}

.mural-cartoes {
  max-width: 720px;
  margin: 30px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.cartao-resposta {
  background: var(--cor-card);
  border: 1px solid var(--cor-borda);
  border-radius: var(--raio);
  padding: 16px;
  font-style: italic;
  color: var(--cor-texto);
}

@media (max-width: 800px) {
  .perguntas-memoria { grid-template-columns: 1fr; }
  .mural-cartoes { grid-template-columns: 1fr; }
}
</style>

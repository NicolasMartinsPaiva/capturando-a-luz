<script setup>
// Quiz interativo simples, controlado apenas com JavaScript/Vue reativo.
import { ref, computed } from 'vue'
import { perguntasQuiz } from '../data.js'

const indiceAtual = ref(0)
const pontuacao = ref(0)
const respostaSelecionada = ref(null)
const respondeu = ref(false)
const finalizado = ref(false)

const perguntaAtual = computed(() => perguntasQuiz[indiceAtual.value])

function responder(indice) {
  if (respondeu.value) return
  respostaSelecionada.value = indice
  respondeu.value = true
  if (indice === perguntaAtual.value.correta) pontuacao.value++
}

function proxima() {
  if (indiceAtual.value < perguntasQuiz.length - 1) {
    indiceAtual.value++
    respostaSelecionada.value = null
    respondeu.value = false
  } else {
    finalizado.value = true
  }
}

function reiniciar() {
  indiceAtual.value = 0
  pontuacao.value = 0
  respostaSelecionada.value = null
  respondeu.value = false
  finalizado.value = false
}
</script>

<template>
  <section id="quiz" class="secao">
    <div class="container cabecalho-secao">
      <p class="rotulo">Teste seus conhecimentos</p>
      <h2 class="titulo-secao">Quiz — Capturando a Luz</h2>
    </div>

    <div class="container quiz-caixa">
      <div v-if="!finalizado" class="card">
        <p class="quiz-progresso">Pergunta {{ indiceAtual + 1 }} de {{ perguntasQuiz.length }}</p>
        <h3>{{ perguntaAtual.pergunta }}</h3>

        <div class="alternativas">
          <button
            v-for="(alt, i) in perguntaAtual.alternativas"
            :key="alt"
            class="alternativa"
            :class="{
              correta: respondeu && i === perguntaAtual.correta,
              errada: respondeu && i === respostaSelecionada && i !== perguntaAtual.correta,
            }"
            @click="responder(i)"
          >
            {{ alt }}
          </button>
        </div>

        <button v-if="respondeu" class="botao" @click="proxima">
          {{ indiceAtual < perguntasQuiz.length - 1 ? 'Próxima pergunta' : 'Ver resultado' }}
        </button>
      </div>

      <div v-else class="card resultado-quiz">
        <h3>Resultado final</h3>
        <p class="pontuacao-final">{{ pontuacao }} / {{ perguntasQuiz.length }}</p>
        <p>Você acertou {{ pontuacao }} de {{ perguntasQuiz.length }} perguntas sobre fotografia.</p>
        <button class="botao-contorno" @click="reiniciar">Refazer quiz</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quiz-caixa {
  max-width: 620px;
  margin: 0 auto;
}

.quiz-progresso {
  color: var(--cor-dourado);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.alternativas {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
}

.alternativa {
  text-align: left;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid var(--cor-borda);
  background: var(--cor-fundo);
}

.alternativa.correta {
  border-color: #4b8b5c;
  background: rgba(75, 139, 92, 0.12);
  font-weight: 600;
}

.alternativa.errada {
  border-color: #b1503f;
  background: rgba(177, 80, 63, 0.12);
}

.resultado-quiz {
  text-align: center;
}

.pontuacao-final {
  font-family: var(--fonte-titulo);
  font-size: 2.2rem;
  color: var(--cor-dourado);
}
</style>

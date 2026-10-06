<script setup>
import { ref } from 'vue'
import { curiosidades } from '../data.js'

const indice = ref(0)

function proxima() {
  indice.value = (indice.value + 1) % curiosidades.length
}
</script>

<template>
  <section class="secao secao-escura">
    <div class="container cabecalho-secao">
      <p class="rotulo">Você sabia?</p>
      <h2 class="titulo-secao">Curiosidades sobre fotografia</h2>
    </div>

    <div class="container curiosidade-caixa">
      <div class="card card-escuro">
        <p>{{ curiosidades[indice] }}</p>
      </div>
      <button class="botao-contorno" @click="proxima">Mostrar outra curiosidade</button>
    </div>
  </section>
</template>

<style scoped>
.curiosidade-caixa {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}

.curiosidade-caixa .card {
  margin-bottom: 20px;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
}
</style>

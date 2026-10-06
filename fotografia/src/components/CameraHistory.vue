<script setup>
// História das câmeras: uma trilha de marcos clicáveis e um painel com detalhes.
// Os textos e imagens ficam em src/historia.js (array `marcosCameras`).
import { ref, computed } from 'vue'
import { marcosCameras, imagem } from '../historia.js'

const indice = ref(0)
const marco = computed(() => marcosCameras[indice.value])

function anterior() {
  if (indice.value > 0) indice.value--
}
function proximo() {
  if (indice.value < marcosCameras.length - 1) indice.value++
}
</script>

<template>
  <section id="historia" class="secao secao-escura">
    <div class="container cabecalho-secao">
      <p class="rotulo">História das câmeras</p>
      <h2 class="titulo-secao">Da câmara escura ao smartphone</h2>
      <p class="subtitulo">
        Cada marco mudou o que era possível fotografar, por quem e em quanto tempo.
        Clique em uma data para explorar.
      </p>
    </div>

    <!-- Trilha de marcos -->
    <div class="container trilha">
      <button
        v-for="(m, i) in marcosCameras"
        :key="m.titulo"
        class="ponto"
        :class="{ ativo: i === indice }"
        @click="indice = i"
      >
        <span class="marcador"></span>
        <span class="ano">{{ m.ano }}</span>
      </button>
    </div>

    <!-- Painel de detalhes -->
    <div class="container">
      <article class="painel" :class="{ 'sem-foto': !marco.foto }">
        <div class="painel-texto">
          <p class="rotulo">{{ marco.ano }}</p>
          <h3>{{ marco.titulo }}</h3>
          <p class="camera-nome">{{ marco.camera }}</p>
          <p>{{ marco.desc }}</p>

          <div class="controles">
            <button class="botao-contorno" :disabled="indice === 0" @click="anterior">← Anterior</button>
            <span class="contador">{{ indice + 1 }} / {{ marcosCameras.length }}</span>
            <button class="botao-contorno" :disabled="indice === marcosCameras.length - 1" @click="proximo">Próximo →</button>
          </div>
        </div>

        <figure v-if="marco.foto" class="painel-foto">
          <div class="foto-moldura">
            <span class="foto-texto-erro">{{ marco.foto.legenda }}</span>
            <img
              :key="marco.foto.arquivo"
              :src="imagem(marco.foto.arquivo, 900)"
              :alt="marco.foto.legenda"
              loading="lazy"
              @error="$event.target.style.display = 'none'"
            />
          </div>
          <figcaption>{{ marco.foto.legenda }}</figcaption>
        </figure>
      </article>
    </div>
  </section>
</template>

<style scoped>
.trilha {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 18px;
  margin-bottom: 32px;
  border-bottom: 1px solid #34302a;
}

.ponto {
  flex: 0 0 auto;
  min-width: 112px;
  padding: 12px 10px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: none;
  color: var(--cor-texto-claro);
  text-align: center;
}

.ponto:hover { border-color: #3a352c; }

.ponto.ativo {
  background: rgba(201, 162, 75, 0.14);
  border-color: var(--cor-dourado);
}

.marcador {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--cor-dourado);
  margin: 0 auto 8px;
}

.ano {
  display: block;
  font-size: 0.8rem;
  color: var(--cor-dourado-claro);
}

.painel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  background: #1e1b16;
  border: 1px solid #34302a;
  border-radius: var(--raio);
  padding: 36px;
}

.painel.sem-foto { grid-template-columns: 1fr; max-width: 720px; margin: 0 auto; }

.painel h3 { font-size: 1.7rem; }

.camera-nome {
  color: var(--cor-dourado);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 14px;
}

.painel-foto { margin: 0; min-width: 0; }

.painel-foto .foto-moldura img { object-fit: cover; }

.painel-foto figcaption {
  margin-top: 10px;
  font-size: 0.82rem;
  color: #a89f8c;
  text-align: center;
}

.controles {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 26px;
  flex-wrap: wrap;
}

.controles button { padding: 10px 18px; }
.controles button:disabled { opacity: 0.35; cursor: default; }

.contador { font-size: 0.85rem; color: #a89f8c; }

@media (max-width: 800px) {
  .painel { grid-template-columns: 1fr; padding: 24px; gap: 24px; }
}
</style>

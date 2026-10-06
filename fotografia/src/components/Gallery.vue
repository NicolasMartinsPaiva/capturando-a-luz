<script setup>
// Galeria de fotografias históricas com ampliação (lightbox) sem bibliotecas externas.
// Setas do teclado navegam; Esc fecha. Dados em src/historia.js (`fotosImportantes`).
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { fotosImportantes, imagem } from '../historia.js'

const atual = ref(null)
const foto = computed(() => (atual.value === null ? null : fotosImportantes[atual.value]))

function abrir(i) { atual.value = i }
function fechar() { atual.value = null }
function anterior() {
  atual.value = (atual.value - 1 + fotosImportantes.length) % fotosImportantes.length
}
function proxima() {
  atual.value = (atual.value + 1) % fotosImportantes.length
}

function teclado(e) {
  if (atual.value === null) return
  if (e.key === 'Escape') fechar()
  if (e.key === 'ArrowLeft') anterior()
  if (e.key === 'ArrowRight') proxima()
}

onMounted(() => window.addEventListener('keydown', teclado))
onUnmounted(() => window.removeEventListener('keydown', teclado))
</script>

<template>
  <section id="galeria" class="secao">
    <div class="container cabecalho-secao">
      <p class="rotulo">Galeria</p>
      <h2 class="titulo-secao">Fotografias que mudaram a história</h2>
      <p class="subtitulo">
        Oito imagens, de 1826 a 1968, que mostram o que cada nova câmera tornou possível.
        Clique para ampliar e ler a história por trás de cada uma.
      </p>
    </div>

    <div class="container grade grade-4 fotos">
      <button v-for="(f, i) in fotosImportantes" :key="f.arquivo" class="card foto-item" @click="abrir(i)">
        <div class="foto-moldura cobrir">
          <span class="foto-texto-erro">{{ f.titulo }}</span>
          <img :src="imagem(f.arquivo, 500)" :alt="f.titulo" loading="lazy" @error="$event.target.style.display = 'none'" />
        </div>
        <span class="foto-ano">{{ f.ano }}</span>
        <h4>{{ f.titulo }}</h4>
        <p class="foto-autor">{{ f.autor }}</p>
      </button>
    </div>

    <!-- Ampliação -->
    <div v-if="foto" class="modal-fundo" @click.self="fechar">
      <div class="modal-caixa" role="dialog" aria-modal="true" :aria-label="foto.titulo">
        <button class="modal-fechar" @click="fechar" aria-label="Fechar">✕</button>

        <div class="modal-imagem">
          <button class="seta seta-esq" @click="anterior" aria-label="Foto anterior">‹</button>
          <img :key="foto.arquivo" :src="imagem(foto.arquivo, 1400)" :alt="foto.titulo" />
          <button class="seta seta-dir" @click="proxima" aria-label="Próxima foto">›</button>
        </div>

        <div class="modal-texto">
          <p class="rotulo">{{ foto.ano }}</p>
          <h3>{{ foto.titulo }}</h3>
          <p class="modal-autor">{{ foto.autor }}</p>
          <p>{{ foto.contexto }}</p>
          <p class="modal-credito">{{ foto.credito }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fotos { gap: 20px; }

.foto-item {
  cursor: pointer;
  text-align: left;
  padding: 14px;
  font: inherit;
  color: inherit;
}

.foto-item h4 { margin: 12px 0 2px; font-size: 1.02rem; }

.foto-ano {
  display: block;
  margin-top: 12px;
  font-size: 0.78rem;
  letter-spacing: 1px;
  color: var(--cor-dourado);
  font-weight: 600;
}

.foto-autor {
  margin: 0;
  font-size: 0.85rem;
  color: var(--cor-texto-suave);
}

.modal-fundo {
  position: fixed;
  inset: 0;
  background: rgba(10, 9, 7, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 16px;
}

.modal-caixa {
  position: relative;
  background: var(--cor-fundo-escuro);
  color: var(--cor-texto-claro);
  border: 1px solid #34302a;
  border-radius: var(--raio);
  width: 100%;
  max-width: 920px;
  max-height: 94vh;
  overflow-y: auto;
}

.modal-fechar {
  position: absolute;
  top: 10px;
  right: 12px;
  z-index: 2;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(20, 18, 15, 0.7);
  color: var(--cor-texto-claro);
  font-size: 1.1rem;
}

.modal-imagem {
  position: relative;
  background: #0a0907;
  display: flex;
  justify-content: center;
}

.modal-imagem img {
  max-width: 100%;
  max-height: 58vh;
  object-fit: contain;
}

.seta {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(20, 18, 15, 0.65);
  color: var(--cor-dourado-claro);
  font-size: 1.8rem;
  line-height: 1;
}

.seta:hover { background: var(--cor-dourado); color: #1a1710; }
.seta-esq { left: 12px; }
.seta-dir { right: 12px; }

.modal-texto { padding: 22px 28px 26px; }
.modal-texto h3 { margin-bottom: 4px; }
.modal-autor { color: var(--cor-dourado-claro); font-size: 0.9rem; }
.modal-credito { font-size: 0.78rem; color: #8a8171; margin: 0; }

@media (max-width: 900px) {
  .fotos { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .fotos { grid-template-columns: 1fr; }
  .modal-texto { padding: 18px; }
}
</style>

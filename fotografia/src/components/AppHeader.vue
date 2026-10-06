<script setup>
// Cabeçalho fixo com menu de navegação, barra de progresso de leitura,
// versão mobile (botão para abrir/fechar) e botão "voltar ao topo".
import { ref, onMounted, onUnmounted } from 'vue'
import { menuItens } from '../data.js'

const menuAberto = ref(false)
const progresso = ref(0)
const mostrarTopo = ref(false)

function atualizarScroll() {
  const alturaTotal = document.documentElement.scrollHeight - window.innerHeight
  progresso.value = alturaTotal > 0 ? (window.scrollY / alturaTotal) * 100 : 0
  mostrarTopo.value = window.scrollY > 500
}

function irParaTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function fecharMenu() {
  menuAberto.value = false
}

onMounted(() => window.addEventListener('scroll', atualizarScroll))
onUnmounted(() => window.removeEventListener('scroll', atualizarScroll))
</script>

<template>
  <header class="cabecalho">
    <div class="barra-progresso" :style="{ width: progresso + '%' }"></div>

    <div class="cabecalho-conteudo container">
      <a href="#inicio" class="logo">Capturando a Luz</a>

      <nav class="menu-desktop">
        <a v-for="item in menuItens" :key="item.alvo" :href="'#' + item.alvo">{{ item.texto }}</a>
      </nav>

      <button class="botao-menu" @click="menuAberto = !menuAberto" aria-label="Abrir menu">
        <span v-if="!menuAberto">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <nav v-if="menuAberto" class="menu-mobile">
      <a v-for="item in menuItens" :key="item.alvo" :href="'#' + item.alvo" @click="fecharMenu">
        {{ item.texto }}
      </a>
    </nav>
  </header>

  <button v-show="mostrarTopo" class="botao-topo" @click="irParaTopo" aria-label="Voltar ao topo">
    ↑
  </button>
</template>

<style scoped>
.cabecalho {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(247, 243, 236, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--cor-borda);
}

.barra-progresso {
  height: 3px;
  background: var(--cor-dourado);
  transition: width 0.1s linear;
}

.cabecalho-conteudo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-bottom: 14px;
}

.logo {
  font-family: var(--fonte-titulo);
  font-weight: 700;
  font-size: 1.15rem;
  text-decoration: none;
  color: var(--cor-texto);
}

.menu-desktop {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
}

.menu-desktop a {
  text-decoration: none;
  font-size: 0.9rem;
  color: var(--cor-texto);
  font-weight: 500;
}

.menu-desktop a:hover { color: var(--cor-dourado); }

.botao-menu {
  display: none;
  background: none;
  border: none;
  font-size: 1.4rem;
}

.menu-mobile {
  display: none;
}

.botao-topo {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 90;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: var(--cor-dourado);
  color: #1a1710;
  font-size: 1.1rem;
  box-shadow: var(--sombra-media);
}

@media (max-width: 800px) {
  .menu-desktop { display: none; }
  .botao-menu { display: block; }
  .menu-mobile {
    display: flex;
    flex-direction: column;
    background: var(--cor-fundo);
    border-top: 1px solid var(--cor-borda);
    padding: 12px 24px 20px;
  }
  .menu-mobile a {
    padding: 10px 0;
    text-decoration: none;
    color: var(--cor-texto);
    border-bottom: 1px solid var(--cor-borda);
  }
}
</style>

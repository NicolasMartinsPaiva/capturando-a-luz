<script setup>
// Seção de Física da Luz e Óptica: conceitos básicos, experiência da câmara
// escura (ilustração simples em CSS) e partes de uma câmera fotográfica.
import { ref } from 'vue'
import { conceitosFisica, partesCamera } from '../data.js'

const mostrarExplicacao = ref(false)
const parteSelecionada = ref(partesCamera[0])
</script>

<template>
  <section id="fisica" class="secao">
    <div class="container cabecalho-secao">
      <p class="rotulo">Área 01</p>
      <h2 class="titulo-secao">Física da Luz e Óptica</h2>
      <p class="subtitulo">
        Tudo começa com a luz: como ela viaja, como forma imagens e como uma câmera
        controla o que é registrado.
      </p>
    </div>

    <div class="container grade grade-3">
      <div class="card" v-for="c in conceitosFisica" :key="c.titulo">
        <h3>{{ c.titulo }}</h3>
        <p>{{ c.desc }}</p>
      </div>
    </div>

    <!-- Experiência interativa: câmara escura -->
    <div class="container camara-bloco">
      <div class="camara-texto">
        <h3>Experiência da câmara escura</h3>
        <p>
          A luz que passa pelo pequeno orifício viaja em linha reta e forma uma
          imagem invertida do outro lado da caixa.
        </p>
        <button class="botao-contorno" @click="mostrarExplicacao = !mostrarExplicacao">
          Como funciona?
        </button>
        <p v-if="mostrarExplicacao" class="explicacao">
          Cada ponto do objeto emite luz em várias direções. Como o orifício é pequeno,
          apenas um raio de cada ponto consegue passar — e esses raios se cruzam,
          formando do outro lado uma imagem invertida e (normalmente) menor do que o objeto original.
        </p>
      </div>

      <div class="camara-ilustracao">
        <div class="objeto-externo">🕯️</div>
        <div class="raio raio-1"></div>
        <div class="raio raio-2"></div>
        <div class="caixa">
          <div class="orificio"></div>
          <div class="imagem-invertida">🕯️</div>
        </div>
      </div>
    </div>

    <!-- Partes da câmera -->
    <div class="container partes-camera">
      <h3>Como uma câmera captura uma imagem?</h3>
      <div class="partes-lista">
        <button
          v-for="p in partesCamera"
          :key="p.titulo"
          class="botao-parte"
          :class="{ ativo: parteSelecionada.titulo === p.titulo }"
          @click="parteSelecionada = p"
        >
          {{ p.titulo }}
        </button>
      </div>
      <div class="card parte-detalhe">
        <h4>{{ parteSelecionada.titulo }}</h4>
        <p>{{ parteSelecionada.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.camara-bloco {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.explicacao {
  margin-top: 14px;
  color: var(--cor-texto-suave);
  font-size: 0.95rem;
}

.camara-ilustracao {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.objeto-externo { font-size: 2rem; }

.raio {
  width: 60px;
  height: 1px;
  background: var(--cor-dourado);
  opacity: 0.6;
}

.caixa {
  position: relative;
  width: 160px;
  height: 110px;
  background: #1e1b16;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orificio {
  position: absolute;
  left: -3px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: var(--cor-dourado);
  border-radius: 50%;
}

.imagem-invertida {
  font-size: 1.6rem;
  transform: rotate(180deg);
  opacity: 0.85;
}

.partes-camera {
  margin-top: 70px;
}

.partes-lista {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 18px 0 22px;
}

.botao-parte {
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid var(--cor-borda);
  background: var(--cor-card);
  font-size: 0.9rem;
}

.botao-parte.ativo {
  background: var(--cor-dourado);
  border-color: var(--cor-dourado);
  color: #1a1710;
  font-weight: 600;
}

@media (max-width: 800px) {
  .camara-bloco { grid-template-columns: 1fr; }
}
</style>

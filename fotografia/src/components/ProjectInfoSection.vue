<script setup>
// Conclusão, informações sobre o projeto e integrantes da equipe.
// Para trocar os nomes da equipe, edite o array `equipe` em src/data.js.
import { areas, equipe } from '../data.js'
</script>

<template>
  <section class="secao">
    <!-- Conclusão -->
    <div class="container cabecalho-secao">
      <p class="rotulo">Para fechar</p>
      <h2 class="titulo-secao">Guardar pequenos pedaços do tempo</h2>
    </div>
    <div class="container conclusao-texto">
      <p>
        Hoje fotografamos momentos simples, grandes conquistas, pessoas que amamos,
        lugares que visitamos e acontecimentos que queremos lembrar.
      </p>
      <p>
        Compartilhamos imagens para contar quem somos, onde estivemos e aquilo que sentimos.
      </p>
      <p>
        Uma fotografia pode atravessar gerações, contar histórias que já não podem ser
        ouvidas e fazer alguém sentir, por alguns segundos, aquilo que aconteceu muito
        antes de seu nascimento.
      </p>
      <p class="frase-final">"Fotografar é transformar o efêmero em memória."</p>
    </div>
  </section>

  <!-- Sobre o projeto -->
  <section class="secao secao-escura">
    <div class="container cabecalho-secao">
      <p class="rotulo">Sobre o projeto</p>
      <h2 class="titulo-secao">Por que "Capturando a Luz"?</h2>
    </div>
    <div class="container sobre-texto">
      <p>
        Este projeto nasceu da admiração pela capacidade da fotografia de capturar
        aquilo que é passageiro.
      </p>
      <p>
        O objetivo é olhar para a fotografia não apenas como uma imagem, mas como
        resultado de uma longa jornada de curiosidade, criatividade e descobertas.
      </p>
      <div class="lista-areas-resumo">
        <span v-for="a in areas" :key="a.numero">{{ a.titulo }}</span>
      </div>
    </div>
  </section>

  <!-- Equipe -->
  <section id="equipe" class="secao">
    <div class="container cabecalho-secao">
      <p class="rotulo">Quem fez</p>
      <h2 class="titulo-secao">Nossa equipe</h2>
      <p class="subtitulo">Cada integrante ficou responsável por uma área do projeto.</p>
    </div>
    <div class="container grade grade-3">
      <div class="card" v-for="membro in equipe" :key="membro.papel">
        <p class="papel-equipe">{{ membro.papel }}</p>
        <h4>{{ membro.nome }}</h4>
        <ul>
          <li v-for="t in membro.tarefas" :key="t">{{ t }}</li>
        </ul>
      </div>
    </div>
  </section>

</template>

<style scoped>
.conclusao-texto, .sobre-texto {
  max-width: 720px;
  margin: 0 auto;
}

.frase-final {
  font-family: var(--fonte-titulo);
  font-style: italic;
  font-size: 1.3rem;
  color: var(--cor-dourado);
  text-align: center;
  margin-top: 30px;
}

.lista-areas-resumo {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.lista-areas-resumo span {
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #3a352c;
  font-size: 0.85rem;
}

.papel-equipe {
  color: var(--cor-dourado);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

</style>

<script setup>
import { evolucaoAcesso } from '../data.js'
</script>

<template>
  <section id="sociedade" class="secao secao-escura">
    <div class="container cabecalho-secao">
      <p class="rotulo">Área 05</p>
      <h2 class="titulo-secao">Fotografia, sociedade e democratização</h2>
      <p class="subtitulo">
        A evolução tecnológica tornou a fotografia cada vez mais acessível, mudando a
        forma como registramos, comunicamos e guardamos informação.
      </p>
    </div>

    <div class="container">
      <div class="grade grade-4">
        <div class="card card-escuro">
          <h4>Registro</h4>
          <p>A fotografia documenta acontecimentos históricos e do cotidiano.</p>
        </div>
        <div class="card card-escuro">
          <h4>Comunicação</h4>
          <p>Imagens transmitem informação de forma rápida e direta.</p>
        </div>
        <div class="card card-escuro">
          <h4>Memória coletiva</h4>
          <p>Fotografias ajudam a construir a memória de uma sociedade inteira.</p>
        </div>
        <div class="card card-escuro">
          <h4>Acesso</h4>
          <p>A popularização das câmeras tornou a fotografia cada vez mais comum.</p>
        </div>
      </div>

      <div class="linha-acesso">
        <template v-for="(item, i) in evolucaoAcesso" :key="item">
          <span class="etapa-acesso">{{ item }}</span>
          <span v-if="i < evolucaoAcesso.length - 1" class="seta">→</span>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.linha-acesso {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

.etapa-acesso {
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid #3a352c;
  font-size: 0.9rem;
}

.seta { color: var(--cor-dourado); }
</style>

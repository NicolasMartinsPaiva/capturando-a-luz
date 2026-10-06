<script setup>
// App.vue organiza as seções do site, na ordem em que aparecem na página.
// O foco do site é a história das câmeras e as fotografias que marcaram época.
// Componentes de outras áreas (Physics, Chemistry, Art, Society, Memory, Extras)
// continuam na pasta components/ e podem voltar para a página: basta importar e listar aqui.
import AppHeader from './components/AppHeader.vue'
import Hero from './components/Hero.vue'
import Intro from './components/Intro.vue'
import CameraHistory from './components/CameraHistory.vue'
import Gallery from './components/Gallery.vue'
import ExperiencesSection from './components/ExperiencesSection.vue'
import QuizSection from './components/QuizSection.vue'
import CuriositiesSection from './components/CuriositiesSection.vue'
import ProjectInfoSection from './components/ProjectInfoSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main>
    <Hero />
    <Intro />
    <CameraHistory />
    <Gallery />
    <ExperiencesSection />
    <QuizSection />
    <CuriositiesSection />
    <ProjectInfoSection />
  </main>

  <AppFooter />
</template>

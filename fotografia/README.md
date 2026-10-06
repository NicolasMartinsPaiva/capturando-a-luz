# Capturando a Luz

Site em Vue 3 + Vite sobre o projeto escolar "Capturando a Luz", com foco na
**história das câmeras** (da câmara escura ao smartphone) e em fotografias
históricas importantes.

## Como criar/rodar o projeto

Se você recebeu esta pasta pronta, pule direto para o passo 2.

1. Criar um projeto novo do zero (opcional, caso queira começar do padrão do Vite):
   npm create vite@latest fotografia -- --template vue

2. Instalar as dependências (dentro da pasta do projeto):
   npm install

3. Rodar em modo de desenvolvimento:
   npm run dev

4. Abrir o endereço mostrado no terminal (geralmente http://localhost:5173)
   no navegador.

5. Para gerar a versão final (pasta `dist`), pronta para publicar:
   npm run build

## Onde editar cada coisa

- **Nomes da equipe**: `src/data.js`, no array `equipe` (troque "Nome do integrante").
- **História das câmeras e galeria de fotografias**: `src/historia.js`
  (`marcosCameras` e `fotosImportantes`). As imagens vêm do Wikimedia Commons
  (domínio público) pela internet; para usar offline, baixe-as para
  `public/images/` e troque a função `imagem()` por caminhos locais.
- **Quiz, curiosidades, menu e experiências**: `src/data.js` reúne quase todo o conteúdo do site em
  arrays simples (linha do tempo, curiosidades, quiz, cronograma, etc).
- **Cores**: `src/style.css`, no topo, dentro de `:root` (variáveis como
  `--cor-fundo`, `--cor-dourado`, `--cor-fundo-escuro`).
- **Imagens**: coloque os arquivos dentro de `public/images/` com os nomes
  indicados em `src/data.js` (ex.: `/images/camera-antiga.jpg`). Se a imagem
  não existir, o site continua funcionando normalmente com um espaço reservado.
- **Seções da página**: `src/App.vue` lista todos os componentes de seção, na
  ordem em que aparecem — para reordenar, basta mudar a ordem ali.
- **Menu do topo**: `src/data.js`, array `menuItens`.

## Estrutura de pastas

```
fotografia/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── style.css
│   ├── data.js
│   └── components/
│       ├── AppHeader.vue
│       ├── Hero.vue
│       ├── Intro.vue
│       ├── AreasGrid.vue
│       ├── PhysicsSection.vue
│       ├── ChemistrySection.vue
│       ├── HistorySection.vue
│       ├── TimelineSection.vue
│       ├── ArtSection.vue
│       ├── SocietySection.vue
│       ├── MemorySection.vue
│       ├── Gallery.vue
│       ├── ExtrasSection.vue
│       ├── ExperiencesSection.vue
│       ├── QuizSection.vue
│       ├── CuriositiesSection.vue
│       ├── ProjectInfoSection.vue
│       └── AppFooter.vue
└── public/
    └── images/   (coloque suas fotos aqui)
```

O código foi escrito de forma simples e comentada, sem TypeScript, sem
Pinia/Vuex e sem backend — só Vue 3 + HTML + CSS + JavaScript.

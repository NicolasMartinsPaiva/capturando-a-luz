/* ==========================================================
   CAPTURANDO A LUZ — conteúdo do site
   Tudo fica em arrays/objetos simples, sem banco de dados.
   Para editar textos, nomes ou imagens, mude os valores aqui.
   ========================================================== */

// As seis áreas do projeto (cronograma)
export const areas = [
  { numero: '01', titulo: 'Física da Luz e Óptica', desc: 'Como a luz se propaga e forma imagens.', alvo: 'fisica' },
  { numero: '02', titulo: 'Química dos Processos', desc: 'Do filme fotossensível à fotografia revelada.', alvo: 'quimica' },
  { numero: '03', titulo: 'História e Evolução', desc: 'Da câmara escura ao smartphone.', alvo: 'historia' },
  { numero: '04', titulo: 'Arte, Linguagem e Interpretação', desc: 'A fotografia como forma de expressão.', alvo: 'arte' },
  { numero: '05', titulo: 'Sociedade e Democratização', desc: 'Como a fotografia se tornou acessível a todos.', alvo: 'sociedade' },
  { numero: '06', titulo: 'Memória e Identidade', desc: 'Fotografias que atravessam gerações.', alvo: 'memoria' },
]

// Física — cards curtos
export const conceitosFisica = [
  { titulo: 'Luz', desc: 'A luz é a base de toda fotografia: sem luz não existe imagem.' },
  { titulo: 'Câmara escura', desc: 'Uma caixa fechada com um pequeno orifício projeta a imagem invertida.' },
  { titulo: 'Lentes', desc: 'Curvam a luz para formar imagens mais nítidas e controladas.' },
  { titulo: 'Abertura', desc: 'Controla a quantidade de luz que entra na câmera.' },
  { titulo: 'Velocidade do obturador', desc: 'Controla por quanto tempo a luz atinge o sensor ou filme.' },
  { titulo: 'ISO', desc: 'Controla a sensibilidade do sensor (ou filme) à luz.' },
]

// Partes de uma câmera (seção interativa)
export const partesCamera = [
  { titulo: 'Lente', desc: 'Recebe e direciona a luz que vem do ambiente.' },
  { titulo: 'Abertura', desc: 'Um pequeno "diafragma" que regula quanta luz passa.' },
  { titulo: 'Obturador', desc: 'Abre e fecha, controlando o tempo de exposição à luz.' },
  { titulo: 'Sensor / Filme', desc: 'Onde a luz é registrada e se transforma em imagem.' },
]

// Química — etapas do processo
export const etapasQuimica = [
  { titulo: 'Exposição', desc: 'A luz atinge o filme, sensibilizando os cristais de sal de prata.' },
  { titulo: 'Revelação', desc: 'Produtos químicos tornam visível a imagem latente formada pela luz.' },
  { titulo: 'Interrupção', desc: 'Um banho de parada interrompe a ação do revelador.' },
  { titulo: 'Fixação', desc: 'O fixador remove o material sensível restante, estabilizando a imagem.' },
  { titulo: 'Lavagem', desc: 'Remove resíduos químicos do filme ou papel.' },
  { titulo: 'Secagem', desc: 'A imagem finalmente pode ser manuseada e vista à luz do dia.' },
]

// Conceitos de arte/composição
export const conceitosArte = [
  { titulo: 'Enquadramento' },
  { titulo: 'Luz' },
  { titulo: 'Sombra' },
  { titulo: 'Perspectiva' },
  { titulo: 'Composição' },
  { titulo: 'Ponto de vista' },
]

// Fotógrafos (sem inventar informações — dados básicos e conhecidos)
export const fotografos = [
  {
    nome: 'Sebastião Salgado',
    estilo: 'Fotojornalismo e fotografia documental em preto e branco',
    texto: 'Fotógrafo brasileiro reconhecido mundialmente por documentar pessoas, trabalho e paisagens em diferentes países.',
  },
  {
    nome: 'Henri Cartier-Bresson',
    estilo: 'Fotografia de rua e o "momento decisivo"',
    texto: 'Fotógrafo francês conhecido por capturar instantes espontâneos do cotidiano com grande sensibilidade de composição.',
  },
  {
    nome: 'Vik Muniz',
    estilo: 'Fotografia conceitual e arte contemporânea',
    texto: 'Artista brasileiro que utiliza materiais inusitados para criar imagens que depois são fotografadas.',
  },
]

// Transformação das câmeras (sociedade)
export const evolucaoAcesso = [
  'Câmeras grandes',
  'Câmeras portáteis',
  'Câmeras de filme',
  'Câmeras digitais',
  'Smartphones',
]

// Perguntas reflexivas (memória)
export const perguntasMemoria = [
  'Que momento você gostaria de guardar?',
  'O que merece ser lembrado?',
  'Qual instante você registraria?',
]

// Frases do projeto (cartões)
export const frases = [
  'Registre os momentos.',
  'Mostre seu ponto de vista.',
  'A luz também conta histórias.',
  'Todo instante passa.',
  'O que você escolheria guardar?',
  'Fotografar é escolher o que merece permanecer.',
]

// Comparação analógico x digital
export const analogico = ['Filme', 'Exposição', 'Revelação', 'Quantidade limitada de fotos', 'Processo químico', 'Espera pelo resultado']
export const digital = ['Sensor', 'Armazenamento digital', 'Visualização imediata', 'Grande quantidade de imagens', 'Edição digital', 'Compartilhamento rápido']

// Experiências práticas
export const experiencias = [
  {
    titulo: 'Câmara escura',
    objetivo: 'Observar como a luz forma uma imagem invertida.',
    materiais: 'Caixa de papelão, papel vegetal, fita adesiva, agulha.',
    comoFazer: 'Faça um pequeno orifício em um dos lados da caixa e cole papel vegetal no lado oposto.',
    observar: 'A imagem projetada aparece invertida no papel vegetal.',
    explicacao: 'A luz viaja em linha reta; ao passar por um orifício pequeno, os raios se cruzam e invertem a imagem.',
  },
  {
    titulo: 'Câmera caseira',
    objetivo: 'Construir uma versão simples de uma câmera com materiais recicláveis.',
    materiais: 'Caixa, papel-alumínio, papel vegetal, tesoura, agulha.',
    comoFazer: 'Adapte o modelo da câmara escura, ajustando o tamanho do orifício.',
    observar: 'Quanto menor o orifício, mais nítida (e mais escura) fica a imagem.',
    explicacao: 'O tamanho da abertura influencia diretamente a nitidez e a luminosidade da imagem formada.',
  },
  {
    titulo: 'Observação da luz',
    objetivo: 'Perceber como a luz muda ao longo do dia e como isso afeta imagens.',
    materiais: 'Uma superfície branca e um ambiente com luz natural.',
    comoFazer: 'Observe a mesma superfície em diferentes horários do dia.',
    observar: 'Sombras e cores mudam conforme o ângulo e a intensidade da luz.',
    explicacao: 'A posição da fonte de luz altera diretamente sombras, contraste e cor percebida.',
  },
  {
    titulo: 'Formação de imagem',
    objetivo: 'Entender visualmente como um orifício projeta uma imagem.',
    materiais: 'Uma vela ou lanterna, um cartão com um furo, uma parede.',
    comoFazer: 'Posicione a fonte de luz, o cartão furado e observe a projeção na parede.',
    observar: 'A imagem projetada é invertida em relação à fonte de luz original.',
    explicacao: 'Este é o mesmo princípio óptico usado na câmara escura e nas primeiras câmeras fotográficas.',
  },
]

// Quiz
export const perguntasQuiz = [
  {
    pergunta: 'Quem produziu a fotografia mais antiga que sobreviveu, a "Vista da janela em Le Gras"?',
    alternativas: ['Louis Daguerre', 'Joseph Nicéphore Niépce', 'William Henry Fox Talbot', 'George Eastman'],
    correta: 1,
  },
  {
    pergunta: 'O que é uma câmara escura?',
    alternativas: ['Um tipo de lente', 'Um laboratório de revelação', 'Uma caixa ou sala escura com um pequeno orifício que projeta uma imagem invertida', 'Uma câmera que usa filme'],
    correta: 2,
  },
  {
    pergunta: 'Qual foi a primeira câmera vendida comercialmente, em 1839?',
    alternativas: ['Kodak Brownie', 'Leica I', 'Câmera de daguerreótipo (Daguerre-Giroux)', 'Polaroid Land'],
    correta: 2,
  },
  {
    pergunta: 'Qual era a grande vantagem do calótipo de Talbot sobre o daguerreótipo?',
    alternativas: ['Era colorido', 'Dispensava a luz', 'Revelava na hora', 'Gerava um negativo que permitia fazer várias cópias'],
    correta: 3,
  },
  {
    pergunta: 'O que a Kodak de 1888 tornou possível?',
    alternativas: ['Fotografar sem precisar saber química, apenas apertando o botão', 'Fotografar no escuro', 'Imprimir fotos em cores', 'Ver a foto na hora'],
    correta: 0,
  },
  {
    pergunta: 'O que as fotografias de Muybridge, em 1878, mostraram?',
    alternativas: ['Como revelar mais rápido', 'Que o cavalo em galope tem um momento com as quatro patas fora do chão', 'A cor da luz', 'Como fotografar o céu'],
    correta: 1,
  },
  {
    pergunta: 'Quem montou o primeiro protótipo de câmera digital, em 1975?',
    alternativas: ['Steven Sasson, da Kodak', 'Edwin Land', 'Oskar Barnack', 'Louis Daguerre'],
    correta: 0,
  },
  {
    pergunta: 'Qual câmera popularizou o filme de 35 mm e ajudou a criar o fotojornalismo?',
    alternativas: ['Brownie', 'Daguerre-Giroux', 'Polaroid Land', 'Leica I'],
    correta: 3,
  },
]

// Curiosidades
export const curiosidades = [
  'A palavra "fotografia" vem do grego e significa, aproximadamente, "desenhar com luz".',
  'Na "Vista da janela em Le Gras", a exposição durou cerca de oito horas. Por isso o Sol parece iluminar as paredes dos dois lados do pátio.',
  'No Boulevard du Temple (1838), a rua cheia não aparece: a exposição durou vários minutos e só quem ficou parado, como um homem engraxando os sapatos, foi registrado.',
  'No verso de seu autorretrato de 1839, Robert Cornelius escreveu que era a primeira "imagem de luz" já feita.',
  'A primeira câmera digital, de 1975, pesava cerca de 3,6 kg e levava 23 segundos para gravar uma única foto.',
  'Segundo estudos posteriores, a foto colorida de Maxwell funcionou em parte por acaso: as placas também registraram a luz ultravioleta refletida pelo vermelho da fita.',
  'Hoje, a maioria das fotografias do mundo é feita por smartphones.',
]

// Equipe do projeto
export const equipe = [
  { papel: 'Óptica / Física', nome: 'Nicolas', tarefas: ['Pesquisar conteúdo', 'Preparar explicação', 'Participar da construção da câmara escura'] },
  { papel: 'Química', nome: 'Pedro', tarefas: ['Pesquisar conteúdo', 'Preparar explicação', 'Organizar material sobre revelação e filme'] },
  { papel: 'História', nome: 'Guilherme', tarefas: ['Pesquisar evolução', 'Organizar linha do tempo', 'Selecionar imagens e informações'] },
  { papel: 'Arte', nome: 'Eloisa', tarefas: ['Pesquisar fotografia como arte', 'Selecionar fotógrafos e obras', 'Organizar galeria'] },
  { papel: 'Sociedade e democratização', nome: 'Carlos', tarefas: ['Pesquisar impacto social', 'Pesquisar a democratização da fotografia'] },
  { papel: 'Memória e identidade', nome: 'Valentina', tarefas: ['Organizar parte sobre memória', 'Preparar mural interativo'] },
]

// Cronograma
export const cronogramaSemana1 = [
  'Definir integrantes', 'Definir conteúdos', 'Definir experiências', 'Definir materiais',
  'Definir fotografias', 'Pesquisar Física', 'Pesquisar Química', 'Pesquisar História',
  'Pesquisar Arte', 'Pesquisar Memória/Sociedade', 'Selecionar informações', 'Selecionar imagens',
  'Escrever textos', 'Definir frases', 'Fazer esboço do stand', 'Fazer lista de materiais',
]

export const cronogramaSemana2 = [
  'Construir câmara escura', 'Construir câmera caseira', 'Montar painéis', 'Montar linha do tempo',
  'Montar painel de revelação', 'Montar moldura', 'Montar mural', 'Produzir fotografias',
  'Imprimir fotografias', 'Imprimir textos', 'Preparar cartões', 'Preparar post-its',
  'Montar o stand', 'Testar experiências', 'Testar interações', 'Revisar textos', 'Ensaiar apresentação',
]

// Checklist final
export const checklistFinal = [
  { grupo: 'Conteúdo', itens: ['Física', 'Química', 'História', 'Arte', 'Memória/Sociedade'] },
  { grupo: 'Experiências', itens: ['Câmara escura', 'Câmera caseira'] },
  { grupo: 'Exposição', itens: ['Linha do tempo', 'Painel de revelação', 'Galeria', 'Mural', 'Moldura', 'Cartões/frases'] },
  { grupo: 'Equipe', itens: ['Divisão definida', 'Pesquisa concluída', 'Materiais separados', 'Construção concluída', 'Apresentação ensaiada'] },
]

// Itens do menu principal
export const menuItens = [
  { texto: 'Início', alvo: 'inicio' },
  { texto: 'História das câmeras', alvo: 'historia' },
  { texto: 'Fotografias', alvo: 'galeria' },
  { texto: 'Experiências', alvo: 'experiencias' },
  { texto: 'Quiz', alvo: 'quiz' },
]

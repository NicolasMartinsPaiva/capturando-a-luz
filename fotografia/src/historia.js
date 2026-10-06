/* ==========================================================
   HISTÓRIA DAS CÂMERAS — dados do site
  As imagens vêm do Wikimedia Commons, com licenças livres, e são
   carregadas pela internet. Para usar offline, baixe os arquivos,
   coloque em public/images/ e troque `imagem()` por '/images/nome.jpg'.
   ========================================================== */

// Monta o endereço de uma imagem do Wikimedia Commons a partir do nome do arquivo
export function imagem(arquivo, largura = 900) {
  return (
    'https://commons.wikimedia.org/wiki/Special:FilePath/' +
    encodeURIComponent(arquivo) +
    '?width=' + largura
  )
}

// Marcos da história das câmeras (ordem cronológica)
// `foto` é opcional: se existir, aparece ao lado do texto.
export const marcosCameras = [
  {
    ano: 'Séc. V a.C. – XI',
    titulo: 'A câmara escura',
    camera: 'Caixa ou sala escura com um orifício',
    desc: 'Pensadores como Mozi, na China, e Aristóteles descreveram imagens formadas por um pequeno orifício. No século XI, Ibn al-Haytham (Alhazen) estudou o fenômeno em seu Livro de Óptica. Ainda não havia como guardar a imagem: era apenas uma projeção invertida, usada para observar o Sol e desenhar paisagens.',
    foto: { arquivo: '1646 Athanasius Kircher - Camera obscura.jpg', legenda: 'Representação posterior da câmara escura, por Athanasius Kircher (1646) · Domínio público' },
  },
  {
    ano: '1826–1827',
    titulo: 'Niépce fixa a primeira imagem',
    camera: 'Câmara escura com lente',
    desc: 'Joseph Nicéphore Niépce apontou uma câmara escura para fora da janela, com uma placa coberta de betume sensível à luz. Depois de uma exposição de muitas horas, surgiu a "Vista da janela em Le Gras", a fotografia mais antiga que sobreviveu.',
    foto: { arquivo: 'View from the Window at Le Gras, Joseph Nicéphore Niépce.jpg', legenda: 'Vista da janela em Le Gras, Niépce (1826–1827)' },
  },
  {
    ano: '1839',
    titulo: 'Daguerreótipo: a primeira câmera à venda',
    camera: 'Câmera Daguerre-Giroux',
    desc: 'Louis Daguerre apresentou seu processo em Paris, e a casa de Alphonse Giroux passou a vender a câmera, uma caixa de madeira com lente. A imagem era única, feita em placa de cobre revestida de prata, e pedia exposições de minutos. A França comprou os direitos e divulgou o processo ao mundo.',
    foto: { arquivo: 'Boulevard du Temple by Daguerre.jpg', legenda: 'Boulevard du Temple, Paris, Daguerre (1838)' },
  },
  {
    ano: '1841',
    titulo: 'Calótipo: do negativo às cópias',
    camera: 'Câmera com papel sensibilizado',
    desc: 'William Henry Fox Talbot patenteou o calótipo, que gerava um negativo em papel. Dele era possível tirar quantas cópias se quisesse, o que deu à fotografia a característica de ser reproduzível, algo que o daguerreótipo, de imagem única, não oferecia.',
    foto: { arquivo: 'William Henry Fox Talbot - Leaves of Orchidea.jpg', legenda: 'Negativo fotogênico de Talbot, precursor do calótipo (1839) · Domínio público' },
  },
  {
    ano: '1861',
    titulo: 'A primeira fotografia colorida',
    camera: 'Três exposições com filtros',
    desc: 'O físico James Clerk Maxwell mostrou que três fotografias feitas com filtros vermelho, verde e azul, projetadas juntas, recriam as cores do original. O fotógrafo Thomas Sutton fez o registro de uma fita xadrez. O princípio das três cores está na base das câmeras digitais até hoje.',
    foto: { arquivo: 'Tartan Ribbon.jpg', legenda: 'Fita de tartã, Maxwell e Sutton (1861)' },
  },
  {
    ano: '1878',
    titulo: 'Muybridge congela o movimento',
    camera: 'Fileira de câmeras com obturador rápido',
    desc: 'Eadweard Muybridge alinhou várias câmeras ao longo de uma pista e as disparou, uma após a outra, com fios atravessados pelo cavalo. Com exposições muito curtas, mostrou as fases do galope e abriu caminho para o cinema.',
    foto: { arquivo: 'The Horse in Motion.jpg', legenda: 'The Horse in Motion, Muybridge (1878)' },
  },
  {
    ano: '1888',
    titulo: 'Kodak: a fotografia para todos',
    camera: 'Kodak nº 1 e, depois, a Brownie',
    desc: 'George Eastman lançou uma câmera simples, já carregada com filme em rolo. Depois de fotografar, o cliente enviava a câmera à fábrica, que revelava as fotos e a devolvia recarregada. Em 1900, a Brownie, vendida a 1 dólar, levou a fotografia para as famílias.',
    foto: { arquivo: 'Cutaway front view of first Kodak camera.jpg', legenda: 'Vista em corte da primeira câmera Kodak (1888) · Domínio público' },
  },
  {
    ano: '1925',
    titulo: 'Leica e o filme de 35 mm',
    camera: 'Leica I',
    desc: 'Projetada por Oskar Barnack, a Leica I chegou ao mercado com filme de 35 mm. Era pequena e leve o bastante para acompanhar o fotógrafo pela rua, e ajudou a criar o fotojornalismo e a fotografia documental, como a de Henri Cartier-Bresson.',
    foto: { arquivo: 'Leica I Camera Austin Calhoon Photograph.jpg', legenda: 'Câmera Leica I (1925) · Foto: Austin Calhoon, CC BY-SA 3.0' },
  },
  {
    ano: '1948',
    titulo: 'Polaroid: foto na hora',
    camera: 'Polaroid Land Model 95',
    desc: 'Edwin Land lançou a Polaroid Land Camera Model 95, que entregava a fotografia pronta em cerca de um minuto, sem laboratório. Era o primeiro gosto da imediatez que as câmeras digitais tornariam comum.',
    foto: { arquivo: 'Polaroid Land Camera Model 95 - MIT Museum - DSC03766.JPG', legenda: 'Polaroid Land Model 95 (1948) · Foto: Daderot, CC0' },
  },
  {
    ano: '1968',
    titulo: 'Câmeras no espaço',
    camera: 'Hasselblad modificada (Apollo 8)',
    desc: 'Os astronautas da Apollo 8 levaram câmeras Hasselblad para a órbita da Lua. Ao ver a Terra surgir sobre o horizonte lunar, fotografaram o "Nascer da Terra", imagem que ajudou a mudar a forma como vemos nosso planeta.',
    foto: { arquivo: 'NASA-Apollo8-Dec24-Earthrise.jpg', legenda: 'Earthrise, William Anders, NASA (1968)' },
  },
  {
    ano: '1975',
    titulo: 'A primeira câmera digital',
    camera: 'Protótipo de Steven Sasson (Kodak)',
    desc: 'O engenheiro Steven Sasson montou, na Kodak, um protótipo que guardava imagens em preto e branco, de 0,01 megapixel, em fita cassete. Cada foto levava cerca de 23 segundos para ser gravada, e para vê-la era preciso um aparelho de leitura ligado a uma televisão.',
    foto: { arquivo: 'Kodak Sasson BL.jpg', legenda: 'Esboço do primeiro protótipo digital da Kodak · Bertrand Labévue, CC BY-SA 4.0' },
  },
  {
    ano: '2000',
    titulo: 'A câmera vai para o bolso',
    camera: 'Celular com câmera (Sharp J-SH04)',
    desc: 'Os primeiros celulares com câmera chegaram ao mercado japonês por volta de 2000, como o J-SH04, da Sharp. A partir daí a câmera passou a estar sempre à mão, e a quantidade de fotografias feitas no mundo explodiu.',
    foto: { arquivo: 'Sharp J-SH04 CP+ 2011.jpg', legenda: 'Celular com câmera Sharp J-SH04 (2000) · Foto: Morio, CC BY-SA 3.0' },
  },
  {
    ano: 'Hoje',
    titulo: 'Fotografia computacional',
    camera: 'Smartphones com várias lentes',
    desc: 'Os celulares atuais combinam vários quadros, sensores e inteligência artificial para ajustar luz, cor e foco em frações de segundo. A câmera deixou de ser só óptica: agora também é software.',
    foto: { arquivo: 'Rear view of Google Pixel 6 Pro.jpg', legenda: 'Câmera traseira de um smartphone atual · Foto: Miyako Fujimiya, CC0' },
  },
]

// Fotografias que marcaram a história
export const fotosImportantes = [
  {
    arquivo: 'View from the Window at Le Gras, Joseph Nicéphore Niépce.jpg',
    titulo: 'Vista da janela em Le Gras',
    autor: 'Joseph Nicéphore Niépce',
    ano: '1826–1827',
    credito: 'Domínio público · Wikimedia Commons',
    contexto: 'Considerada a fotografia permanente mais antiga que sobreviveu. Por causa da exposição de cerca de oito horas, o Sol ilumina as paredes dos dois lados do pátio.',
  },
  {
    arquivo: 'Boulevard du Temple by Daguerre.jpg',
    titulo: 'Boulevard du Temple',
    autor: 'Louis Daguerre',
    ano: '1838',
    credito: 'Domínio público · Wikimedia Commons',
    contexto: 'Muitas fontes a apontam como a primeira fotografia a registrar uma pessoa. A rua movimentada some porque a exposição durou vários minutos; só o homem que engraxava os sapatos, parado, ficou na imagem.',
  },
  {
    arquivo: 'RobertCornelius.jpg',
    titulo: 'Autorretrato de Robert Cornelius',
    autor: 'Robert Cornelius',
    ano: '1839',
    credito: 'Library of Congress · Wikimedia Commons',
    contexto: 'Um dos primeiros retratos fotográficos e um dos primeiros "selfies" da história. Cornelius tirou a tampa da lente, correu para o quadro e posou por cerca de um minuto.',
  },
  {
    arquivo: 'Valley of the Shadow of Death.jpg',
    titulo: 'O Vale da Sombra da Morte',
    autor: 'Roger Fenton',
    ano: '1855',
    credito: 'Domínio público · Wikimedia Commons',
    contexto: 'Feita na Guerra da Crimeia, é uma das primeiras imagens de guerra. Fenton fez duas versões, e até hoje se discute se as balas de canhão foram reposicionadas na estrada.',
  },
  {
    arquivo: 'Tartan Ribbon.jpg',
    titulo: 'Fita de tartã',
    autor: 'James Clerk Maxwell e Thomas Sutton',
    ano: '1861',
    credito: 'Domínio público · Wikimedia Commons',
    contexto: 'A primeira demonstração de fotografia colorida pelo método das três cores: o mesmo princípio que, 160 anos depois, faz funcionar os sensores das câmeras digitais.',
  },
  {
    arquivo: 'The Horse in Motion.jpg',
    titulo: 'The Horse in Motion',
    autor: 'Eadweard Muybridge',
    ano: '1878',
    credito: 'Library of Congress · Wikimedia Commons',
    contexto: 'A sequência da égua "Sallie Gardner" mostrou que há um momento do galope em que o cavalo tem as quatro patas fora do chão, e antecipou a ideia do cinema.',
  },
  {
    arquivo: 'Lange-MigrantMother02.jpg',
    titulo: 'Mãe migrante',
    autor: 'Dorothea Lange',
    ano: '1936',
    credito: 'Library of Congress · Wikimedia Commons',
    contexto: 'Retrato de Florence Owens Thompson e seus filhos na Califórnia, feito para um programa do governo dos EUA. Virou o símbolo da Grande Depressão.',
  },
  {
    arquivo: 'NASA-Apollo8-Dec24-Earthrise.jpg',
    titulo: 'Earthrise (Nascer da Terra)',
    autor: 'William Anders, Apollo 8',
    ano: '1968',
    credito: 'NASA · Wikimedia Commons',
    contexto: 'Fotografada em 24 de dezembro de 1968 da órbita lunar. Mostra a Terra como um mundo pequeno e frágil sobre o horizonte da Lua.',
  },
]

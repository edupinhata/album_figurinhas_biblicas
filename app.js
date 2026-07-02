const PAGE_WIDTH_MM = 148;
const PAGE_HEIGHT_MM = 210;
const SHEET_WIDTH_MM = 297;
const SHEET_HEIGHT_MM = 210;
const STICKER_WIDTH_MM = 38;
const STICKER_HEIGHT_MM = 48;
const DUPLICATE_OFFSET_MM = 4;
const SHEET_PAGE_SCALE_X = 1.0034;
const FIRST_THEMATIC_NATURAL_PAGE = 4;
const DRAFT_KEY = 'albumBiblicoDraftV1';

const IMPOSITION_SIDES = [
  { sheet: 1, side: 'frente', left: 20, right: 1 },
  { sheet: 1, side: 'verso', left: 2, right: 19 },
  { sheet: 2, side: 'frente', left: 18, right: 3 },
  { sheet: 2, side: 'verso', left: 4, right: 17 },
  { sheet: 3, side: 'frente', left: 16, right: 5 },
  { sheet: 3, side: 'verso', left: 6, right: 15 },
  { sheet: 4, side: 'frente', left: 14, right: 7 },
  { sheet: 4, side: 'verso', left: 8, right: 13 },
  { sheet: 5, side: 'frente', left: 12, right: 9 },
  { sheet: 5, side: 'verso', left: 10, right: 11 }
];

const THEMATIC_CONTENT = [
  {
    title: 'A Arca de Noé',
    verses: 'Gênesis 6:13-22; Gênesis 7:1-24; Gênesis 8:6-12; Hebreus 11:7',
    summary: 'Noé ouviu a voz de Deus e obedeceu. Ele construiu a arca, e Deus cuidou dele, de sua família e dos animais.',
    stickers: ['Noé — especial', 'A arca sendo construída', 'Os animais entrando na arca', 'A chuva do dilúvio', 'A família de Noé na arca']
  },
  {
    title: 'A Arca de Noé',
    verses: '',
    summary: '',
    stickers: ['A arca sobre as águas', 'A pomba com o ramo', 'A arca repousando', 'O arco-íris da promessa', 'Os animais saindo da arca']
  },
  {
    title: 'Ester, a rainha corajosa',
    verses: 'Ester 4:13-16; Ester 5:1-3; Ester 8:15-17',
    summary: 'Ester confiou em Deus e teve coragem para ajudar seu povo. Ela usou sua posição com sabedoria, graça e amor.',
    stickers: ['Ester — especial', 'A coroa da rainha', 'Ester diante do rei', 'O povo sendo protegido', 'O palácio real']
  },
  {
    title: 'José, o governador do Egito',
    verses: 'Gênesis 37:3-11; Gênesis 39:1-6; Gênesis 41:37-43; Gênesis 45:4-8',
    summary: 'José passou por momentos difíceis, mas continuou fiel a Deus. Deus cuidou dele e o usou para salvar muitas pessoas.',
    stickers: ['José — especial', 'A túnica de José', 'José no Egito', 'José interpretando sonhos', 'José reencontrando seus irmãos']
  },
  {
    title: 'Moisés, o líder',
    verses: 'Êxodo 3:1-12; Êxodo 14:13-16; Êxodo 33:11-14; Hebreus 11:24-29',
    summary: 'Deus chamou Moisés para liderar seu povo. Moisés aprendeu a obedecer, confiar e buscar a presença do Senhor.',
    support: 'Moisés deve parecer mais velho na cena da sarça ardente.',
    stickers: ['Moisés — especial', 'O bebê Moisés no cesto', 'A sarça ardente', 'O mar se abrindo', 'Moisés buscando a presença de Deus']
  },
  {
    title: 'Rute, a fiel',
    verses: 'Rute 1:16-17; Rute 2:8-12; Rute 4:13-17',
    summary: 'Rute escolheu cuidar de Noemi e permanecer fiel. Deus viu seu amor e cuidou de sua história.',
    stickers: ['Rute — especial', 'Rute e Noemi', 'Rute nos campos', 'As espigas de cevada', 'Boaz acolhendo Rute']
  },
  {
    title: 'Daniel na cova dos leões',
    verses: 'Daniel 6:10-23',
    summary: 'Daniel continuou orando a Deus mesmo quando isso era proibido. Deus cuidou dele e fechou a boca dos leões.',
    stickers: ['Daniel — especial', 'Daniel orando', 'A janela aberta', 'A cova dos leões', 'Os leões mansos']
  },
  {
    title: 'Os amigos de Daniel na fornalha',
    verses: 'Daniel 3:16-28',
    summary: 'Os amigos de Daniel não adoraram a estátua do rei. Eles escolheram obedecer a Deus, e Deus esteve com eles no meio do fogo.',
    stickers: ['Os três amigos e o anjo — especial', 'A estátua de ouro', 'Os três amigos dizendo não', 'A fornalha ardente', 'O rei admirado']
  },
  {
    title: 'Jesus, nosso melhor amigo',
    verses: 'João 3:16; Marcos 10:13-16; Lucas 24:1-7; João 14:1-3',
    summary: 'Jesus é o Filho de Deus, que nos ama, morreu por nós, ressuscitou e voltará para buscar o time dele.',
    stickers: ['Jesus — especial', 'Jesus abraçando as crianças', 'Jesus ensinando', 'Jesus curando', 'Jesus acalmando a tempestade']
  },
  {
    title: 'Jesus, nosso melhor amigo',
    verses: '',
    summary: '',
    stickers: ['Jesus multiplicando os pães', 'Jesus andando sobre as águas', 'O túmulo vazio', 'Jesus ressuscitado', 'Jesus voltará']
  },
  {
    title: 'Maria, que anunciou a novidade',
    verses: 'João 20:11-18; Marcos 16:9-10',
    summary: 'Maria viu Jesus vivo e correu para contar aos discípulos. Ela anunciou com alegria que Jesus ressuscitou.',
    stickers: ['Maria — especial', 'Maria chorando perto do túmulo', 'O túmulo vazio', 'Jesus aparecendo a Maria', 'Maria anunciando aos discípulos']
  },
  {
    title: 'Pedro, o pregador',
    verses: 'João 21:15-17; Atos 2:14-41',
    summary: 'Pedro foi chamado por Jesus, errou, foi perdoado e depois pregou com coragem sobre o amor de Deus.',
    stickers: ['Pedro — especial', 'Pedro pescador', 'A pesca milagrosa', 'Jesus restaurando Pedro', 'Pedro pregando à multidão']
  },
  {
    title: 'Paulo, que foi perdoado',
    verses: 'Atos 9:1-22; 1 Timóteo 1:12-16',
    summary: 'Paulo antes perseguia os seguidores de Jesus, mas Jesus o encontrou, perdoou e transformou sua vida.',
    stickers: ['Paulo — especial', 'O caminho de Damasco', 'A luz do céu', 'Ananias orando por Paulo', 'Paulo pregando sobre Jesus']
  },
  {
    title: 'Timóteo, o jovem aprendiz',
    verses: '2 Timóteo 1:5; 2 Timóteo 3:14-15; 1 Timóteo 4:12',
    summary: 'Timóteo aprendeu sobre Deus com sua mãe, sua avó e com Paulo. Crianças também podem amar a Palavra de Deus e servir a Jesus.',
    stickers: ['Timóteo — especial', 'A mãe e a avó de Timóteo', 'Timóteo aprendendo as Escrituras', 'Paulo ensinando Timóteo', 'Timóteo servindo a Deus']
  },
  {
    title: 'Chegou sua vez de entrar para o time!',
    verses: 'João 15:12-15; Mateus 28:19-20; João 7:37-38',
    summary: 'Estar no time de Jesus é uma alegria. Jesus nos ama e nos ensina a ter fé, obedecer, perdoar, amar e servir.',
    stickers: ['Bíblia — especial', 'Bola de futebol', 'Chuteiras', 'Violão de louvor', 'Garrafa de água']
  }
];

const state = {
  album: loadDraft() || createInitialAlbum(),
  selectedPageNumber: 1,
  selectedStickerId: null,
  selectedTextId: null,
  multiSelectedStickerIds: [],
  orderMode: 'natural',
  viewMode: 'page',
  showGrid: false,
  showSafeMargins: true,
  pageCursor: 0,
  sheetCursor: 0,
  drag: null,
  validation: []
};

function createInitialAlbum() {
  const pages = [
    makePage(1, 'No time de Jesus! Amigos da Bíblia que amavam a Deus', 'capa externa', { textBlocks: [text('title', 'No time de Jesus! Amigos da Bíblia que amavam a Deus', 10, 20, 128, 8)] }),
    makePage(2, 'Verso interno da capa', 'página introdutória', {
      textBlocks: [
        text('title', 'Bem-vindo ao time de Jesus!', 10, 16, 128, 8),
        text('summary', 'Aqui você vai colecionar amigos da Bíblia que amavam a Deus e aprendiam a viver com fé, obediência, coragem, oração, perdão, amor e alegria.', 10, 30, 128, 22)
      ]
    }),
    makePage(3, 'Meu álbum', 'página temática', {
      textBlocks: [
        text('title', 'Meu álbum', 10, 12, 128, 8),
        text('name', 'Nome: ______________________________', 10, 25, 128, 7),
        text('summary', 'Marque aqui as figurinhas que você já tem!', 10, 36, 128, 8)
      ],
      checklist: { start: 1, end: 75 }
    })
  ];

  let stickerNumber = 1;
  THEMATIC_CONTENT.forEach((content, index) => {
    const naturalNumber = FIRST_THEMATIC_NATURAL_PAGE + index;
    const slots = defaultFiveSlots(stickerNumber, content.stickers);
    pages.push(makePage(naturalNumber, content.title, 'página temática', {
      textBlocks: [
        text('title', content.title, 8, 8, 132, 8),
        text('verses', content.verses, 8, 18, 132, 14),
        text('summary', content.summary, 8, 34, 132, 16),
        text('support', content.support || '', 8, 182, 132, 10, { visible: Boolean(content.support), fontSize: 3.1, bg: 'rgba(255,255,255,0.70)' }),
        text('pageNumber', `Página ${index + 2}`, 122, 200, 18, 6, { align: 'right', fontSize: 3.2, bg: 'transparent' })
      ],
      stickers: slots
    }));
    stickerNumber += 5;
  });

  pages.push(
    makePage(19, 'Desenhe você aqui!', 'página de desenho', {
      textBlocks: [
        text('title', 'Desenhe você aqui!', 10, 10, 128, 10),
        text('verses', 'Marcos 10:13-16; João 15:14; Efésios 5:1-2', 10, 22, 128, 8),
        text('support', 'Jesus também chama você para fazer parte do time dEle!', 10, 32, 128, 10)
      ],
      drawingArea: { x: 10, y: 48, w: 128, h: 150 }
    }),
    makePage(20, 'Capa traseira', 'capa traseira / página final', {
      textBlocks: [
        text('support', 'Entrar no time de Jesus é viver com fé, amor, coragem e alegria!', 10, 188, 128, 15, { align: 'center', bg: 'rgba(255,255,255,0.7)' })
      ]
    })
  );

  return {
    meta: {
      name: 'No time de Jesus! Amigos da Bíblia que amavam a Deus',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      stickerWidthMm: STICKER_WIDTH_MM,
      stickerHeightMm: STICKER_HEIGHT_MM
    },
    pages
  };
}

function makePage(naturalNumber, title, type, overrides = {}) {
  return {
    naturalNumber,
    title,
    type,
    background: {
      image: '',
      fit: 'cover',
      scale: 1,
      offsetX: 0,
      offsetY: 0,
      locked: false,
      baseColor: '#ffffff',
      safeMargin: 8
    },
    textBlocks: [],
    stickers: [],
    checklist: null,
    drawingArea: null,
    ...overrides
  };
}

function text(kind, content, x, y, w, h, extra = {}) {
  return {
    id: crypto.randomUUID(),
    kind,
    content,
    x,
    y,
    width: w,
    height: h,
    visible: true,
    fontSize: kind === 'title' ? 5.2 : 3.4,
    color: '#1f2937',
    align: 'left',
    bg: kind === 'title' ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.45)',
    shadow: false,
    border: false,
    layer: 'above',
    ...extra
  };
}

function defaultFiveSlots(startNumber, captions) {
  const base = [
    { x: 12, y: 56 },
    { x: 55, y: 56 },
    { x: 98, y: 56 },
    { x: 32, y: 110 },
    { x: 78, y: 110 }
  ];
  return base.map((pos, idx) => ({
    id: crypto.randomUUID(),
    number: startNumber + idx,
    caption: captions[idx] || `Figurinha ${startNumber + idx}`,
    x: pos.x,
    y: pos.y,
    width: STICKER_WIDTH_MM,
    height: STICKER_HEIGHT_MM,
    borderColor: '#3d405b',
    borderStyle: 'dashed',
    locked: false
  }));
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveDraft() {
  state.album.meta.updatedAt = new Date().toISOString();
  localStorage.setItem(DRAFT_KEY, JSON.stringify(state.album));
}

function getNaturalPage(pageNumber) {
  return state.album.pages.find((p) => p.naturalNumber === pageNumber);
}

function getCurrentPageForEdit() {
  if (state.viewMode === 'page') {
    return getNaturalPage(state.selectedPageNumber);
  }
  return null;
}

function render() {
  renderSidebar();
  renderStage();
  renderProperties();
  renderValidation();
}

function renderSidebar() {
  const host = document.getElementById('pages-sidebar');
  host.innerHTML = '<h3 class="panel-title">Páginas</h3>';
  state.album.pages.forEach((page) => {
    const div = document.createElement('div');
    div.className = `page-item ${state.selectedPageNumber === page.naturalNumber ? 'active' : ''}`;
    div.innerHTML = `
      <strong>${page.naturalNumber}. ${escapeHtml(page.title)}</strong>
      <div>Tipo: ${escapeHtml(page.type)}</div>
      <div>Figurinhas: ${page.stickers.length}</div>
    `;
    div.onclick = () => {
      state.selectedPageNumber = page.naturalNumber;
      state.selectedStickerId = null;
      state.selectedTextId = null;
      state.multiSelectedStickerIds = [];
      state.pageCursor = getPageSequence().indexOf(page.naturalNumber);
      render();
    };
    host.appendChild(div);
  });
}

function renderStage() {
  const host = document.getElementById('canvas-host');
  host.innerHTML = '';

  const label = document.getElementById('stage-label');
  if (state.viewMode === 'page') {
    const sequence = getPageSequence();
    if (!sequence.includes(state.selectedPageNumber)) {
      state.selectedPageNumber = sequence[0];
    }
    state.pageCursor = Math.max(0, sequence.indexOf(state.selectedPageNumber));
    label.textContent = `Página ${state.selectedPageNumber} (${state.orderMode === 'natural' ? 'ordem natural' : 'ordem de imposição'})`;
    host.appendChild(renderPageCanvas(getNaturalPage(state.selectedPageNumber), true));
  } else {
    const sequence = getSheetSequence();
    if (state.sheetCursor > sequence.length - 1) {
      state.sheetCursor = 0;
    }
    const side = sequence[state.sheetCursor];
    label.textContent = side.label;
    host.appendChild(renderSheetCanvas(side));
  }
}

function renderPageCanvas(page, interactive = false) {
  const root = document.createElement('div');
  root.className = `page-canvas ${state.showGrid ? 'grid' : ''}`;
  root.style.backgroundColor = page.background.baseColor || '#fff';

  const bgLayer = document.createElement('div');
  bgLayer.className = 'background-layer';
  if (page.background.image) {
    const img = document.createElement('img');
    img.src = page.background.image;
    img.style.objectFit = page.background.fit === 'fill' ? 'fill' : page.background.fit;
    img.style.objectPosition = `${50 + page.background.offsetX}% ${50 + page.background.offsetY}%`;
    img.style.transform = `scale(${page.background.scale})`;
    bgLayer.appendChild(img);
  }
  root.appendChild(bgLayer);

  if (state.showSafeMargins) {
    const margin = page.background.safeMargin || 8;
    const safe = document.createElement('div');
    safe.className = 'safe-margin';
    safe.style.left = `${margin}mm`;
    safe.style.top = `${margin}mm`;
    safe.style.width = `${PAGE_WIDTH_MM - margin * 2}mm`;
    safe.style.height = `${PAGE_HEIGHT_MM - margin * 2}mm`;
    root.appendChild(safe);
  }

  page.textBlocks.filter((t) => t.layer === 'below').forEach((t) => root.appendChild(renderTextBlock(page, t, interactive)));

  page.stickers.forEach((slot) => {
    const sticker = document.createElement('div');
    sticker.className = `sticker-slot ${slot.locked ? 'locked' : ''} ${state.multiSelectedStickerIds.includes(slot.id) ? 'selected' : ''}`;
    sticker.style.left = `${slot.x}mm`;
    sticker.style.top = `${slot.y}mm`;
    sticker.style.width = `${STICKER_WIDTH_MM}mm`;
    sticker.style.height = `${STICKER_HEIGHT_MM}mm`;
    sticker.style.borderStyle = slot.borderStyle;
    sticker.style.borderColor = slot.borderColor;
    sticker.innerHTML = `<div class="sticker-number">#${slot.number}</div><div class="sticker-caption">${escapeHtml(slot.caption)}</div>`;

    if (interactive) {
      sticker.addEventListener('mousedown', (event) => {
        event.stopPropagation();
        if (event.ctrlKey || event.metaKey) {
          if (state.multiSelectedStickerIds.includes(slot.id)) {
            state.multiSelectedStickerIds = state.multiSelectedStickerIds.filter((id) => id !== slot.id);
          } else {
            state.multiSelectedStickerIds = [...state.multiSelectedStickerIds, slot.id];
          }
        } else {
          state.multiSelectedStickerIds = [slot.id];
        }
        state.selectedStickerId = slot.id;
        state.selectedTextId = null;
        if (!slot.locked) {
          state.drag = {
            pageNumber: page.naturalNumber,
            slotId: slot.id,
            startX: event.clientX,
            startY: event.clientY,
            originX: slot.x,
            originY: slot.y,
            pxPerMm: root.clientWidth / PAGE_WIDTH_MM
          };
        }
        render();
      });
    }
    root.appendChild(sticker);
  });

  page.textBlocks.filter((t) => t.layer !== 'below').forEach((t) => root.appendChild(renderTextBlock(page, t, interactive)));

  if (page.checklist) {
    root.appendChild(renderChecklist(page.checklist));
  }
  if (page.drawingArea) {
    const drawing = document.createElement('div');
    drawing.style.position = 'absolute';
    drawing.style.left = `${page.drawingArea.x}mm`;
    drawing.style.top = `${page.drawingArea.y}mm`;
    drawing.style.width = `${page.drawingArea.w}mm`;
    drawing.style.height = `${page.drawingArea.h}mm`;
    drawing.style.background = '#fff';
    drawing.style.border = '1.5px dashed #7b8794';
    root.appendChild(drawing);
  }

  if (interactive) {
    root.onclick = () => {
      state.selectedStickerId = null;
      state.selectedTextId = null;
      state.multiSelectedStickerIds = [];
      render();
    };
  }

  return root;
}

function renderTextBlock(page, block, interactive = false) {
  const div = document.createElement('div');
  div.className = `text-block ${state.selectedTextId === block.id ? 'selected' : ''}`;
  div.style.left = `${block.x}mm`;
  div.style.top = `${block.y}mm`;
  div.style.width = `${block.width}mm`;
  div.style.minHeight = `${block.height}mm`;
  div.style.fontSize = `${block.fontSize}mm`;
  div.style.color = block.color;
  div.style.textAlign = block.align;
  div.style.background = block.bg;
  div.style.display = block.visible ? 'block' : 'none';
  div.style.boxShadow = block.shadow ? '0 1.2mm 2mm rgba(0,0,0,0.2)' : 'none';
  div.style.border = block.border ? '0.25mm solid #334155' : 'none';
  div.textContent = block.content;

  if (interactive) {
    div.contentEditable = true;
    div.spellcheck = false;
    div.addEventListener('click', (event) => {
      event.stopPropagation();
      state.selectedTextId = block.id;
      state.selectedStickerId = null;
      render();
    });
    div.addEventListener('input', () => {
      block.content = div.textContent || '';
      saveDraft();
    });
  }

  return div;
}

function renderChecklist(checklist) {
  const wrap = document.createElement('div');
  wrap.style.position = 'absolute';
  wrap.style.left = '10mm';
  wrap.style.top = '50mm';
  wrap.style.width = '128mm';
  wrap.style.height = '145mm';
  wrap.style.display = 'grid';
  wrap.style.gridTemplateColumns = 'repeat(5, 1fr)';
  wrap.style.gap = '1.3mm';
  wrap.style.fontSize = '3mm';
  wrap.style.background = 'rgba(255,255,255,0.65)';
  wrap.style.padding = '2mm';
  for (let i = checklist.start; i <= checklist.end; i += 1) {
    const item = document.createElement('div');
    item.textContent = `☐ ${i}`;
    wrap.appendChild(item);
  }
  return wrap;
}

function renderSheetCanvas(side) {
  const root = document.createElement('div');
  root.className = 'sheet-canvas';
  root.appendChild(renderSheetPage(side.left));
  root.appendChild(renderSheetPage(side.right));
  return root;
}

function renderSheetPage(pageNumber) {
  const page = getNaturalPage(pageNumber);
  const wrap = document.createElement('div');
  wrap.className = 'sheet-page';
  const mini = renderPageCanvas(page, false);
  mini.style.width = '148.5mm';
  mini.style.height = '210mm';
  mini.style.transform = `scale(${SHEET_PAGE_SCALE_X})`;
  mini.style.transformOrigin = 'left top';
  mini.style.boxShadow = 'none';
  mini.style.border = 'none';
  wrap.appendChild(mini);
  return wrap;
}

function renderProperties() {
  const host = document.getElementById('properties-sidebar');
  host.innerHTML = '<h3 class="panel-title">Propriedades</h3>';
  const page = getNaturalPage(state.selectedPageNumber);
  if (!page) return;

  host.appendChild(renderPageProperties(page));
  host.appendChild(renderTextProperties(page));
  host.appendChild(renderStickerProperties(page));
}

function renderPageProperties(page) {
  const group = el('div', 'group');
  group.innerHTML = `<h4>Página</h4>`;

  const bgUrl = textInput('URL da arte de fundo', page.background.image, (val) => {
    page.background.image = val.trim();
    saveDraft();
    render();
  });
  group.appendChild(bgUrl);

  const uploadBtn = document.createElement('button');
  uploadBtn.textContent = 'Upload fundo';
  uploadBtn.onclick = () => document.getElementById('bg-file-input').click();
  group.appendChild(uploadBtn);

  group.appendChild(selectInput('Ajuste do fundo', page.background.fit, [
    ['fill', 'Preencher página'],
    ['contain', 'Conter'],
    ['cover', 'Cortar para preencher']
  ], (val) => {
    page.background.fit = val;
    saveDraft();
    render();
  }));

  group.appendChild(numberInput('Escala do fundo', page.background.scale, 0.4, 3, 0.05, (val) => {
    page.background.scale = val;
    saveDraft();
    render();
  }));

  group.appendChild(numberInput('Reposicionamento X (%)', page.background.offsetX, -50, 50, 1, (val) => {
    page.background.offsetX = val;
    saveDraft();
    render();
  }));
  group.appendChild(numberInput('Reposicionamento Y (%)', page.background.offsetY, -50, 50, 1, (val) => {
    page.background.offsetY = val;
    saveDraft();
    render();
  }));

  group.appendChild(colorInput('Cor base', page.background.baseColor, (val) => {
    page.background.baseColor = val;
    saveDraft();
    render();
  }));

  group.appendChild(numberInput('Margem segura (mm)', page.background.safeMargin, 0, 25, 1, (val) => {
    page.background.safeMargin = val;
    saveDraft();
    render();
  }));

  const lock = checkboxInput('Bloquear fundo', page.background.locked, (val) => {
    page.background.locked = val;
    saveDraft();
  });
  group.appendChild(lock);

  return group;
}

function renderTextProperties(page) {
  const group = el('div', 'group');
  group.innerHTML = '<h4>Texto selecionado</h4>';
  if (!state.selectedTextId) {
    group.innerHTML += '<p>Selecione um bloco de texto para editar.</p>';
    return group;
  }

  const block = page.textBlocks.find((t) => t.id === state.selectedTextId);
  if (!block) {
    group.innerHTML += '<p>Bloco não encontrado.</p>';
    return group;
  }

  group.appendChild(textAreaInput('Conteúdo', block.content, (val) => {
    block.content = val;
    saveDraft();
    render();
  }));
  group.appendChild(numberInput('Fonte (mm)', block.fontSize, 2, 12, 0.2, (val) => {
    block.fontSize = val;
    saveDraft();
    render();
  }));
  group.appendChild(colorInput('Cor', block.color, (val) => {
    block.color = val;
    saveDraft();
    render();
  }));
  group.appendChild(selectInput('Alinhamento', block.align, [['left', 'Esquerda'], ['center', 'Centro'], ['right', 'Direita']], (val) => {
    block.align = val;
    saveDraft();
    render();
  }));
  group.appendChild(textInput('Fundo translúcido', block.bg, (val) => {
    block.bg = val;
    saveDraft();
    render();
  }));
  group.appendChild(checkboxInput('Sombra', block.shadow, (val) => {
    block.shadow = val;
    saveDraft();
    render();
  }));
  group.appendChild(checkboxInput('Borda', block.border, (val) => {
    block.border = val;
    saveDraft();
    render();
  }));
  group.appendChild(checkboxInput('Exibir bloco', block.visible, (val) => {
    block.visible = val;
    saveDraft();
    render();
  }));
  group.appendChild(selectInput('Camada', block.layer, [['above', 'Acima das figurinhas'], ['below', 'Abaixo das figurinhas']], (val) => {
    block.layer = val;
    saveDraft();
    render();
  }));

  group.appendChild(numberInput('X (mm)', block.x, 0, PAGE_WIDTH_MM, 1, (val) => {
    block.x = val;
    saveDraft();
    render();
  }));
  group.appendChild(numberInput('Y (mm)', block.y, 0, PAGE_HEIGHT_MM, 1, (val) => {
    block.y = val;
    saveDraft();
    render();
  }));
  group.appendChild(numberInput('Largura (mm)', block.width, 10, PAGE_WIDTH_MM, 1, (val) => {
    block.width = val;
    saveDraft();
    render();
  }));

  return group;
}

function renderStickerProperties(page) {
  const group = el('div', 'group');
  group.innerHTML = '<h4>Espaços de figurinhas</h4>';

  const toolbar = document.createElement('div');
  toolbar.className = 'row';
  const actions = [
    ['Adicionar', () => addSticker(page)],
    ['Adicionar 5', () => addFiveStickers(page)],
    ['Duplicar', () => duplicateSelectedSticker(page)],
    ['Remover', () => removeSelectedSticker(page)]
  ];
  actions.forEach(([label, fn]) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.onclick = () => {
      fn();
      saveDraft();
      render();
    };
    toolbar.appendChild(btn);
  });
  group.appendChild(toolbar);

  const quick = document.createElement('div');
  quick.className = 'row';
  [
    ['3 em cima / 2 embaixo', () => arrangeThreeTwo(page)],
    ['Coluna lateral', () => arrangeSideColumn(page)],
    ['Centralizar seleção', () => centerSelected(page)],
    ['Alinhar margem segura', () => alignToSafeMargin(page)]
  ].forEach(([label, fn]) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.onclick = () => {
      fn();
      saveDraft();
      render();
    };
    quick.appendChild(btn);
  });
  group.appendChild(quick);

  const alignRow = document.createElement('div');
  alignRow.className = 'row';
  [
    ['Alinhar entre si', () => alignAmong(page)],
    ['Distribuir H', () => distributeHorizontal(page)],
    ['Distribuir V', () => distributeVertical(page)],
    ['Alinhar grade', () => alignToGrid(page)]
  ].forEach(([label, fn]) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.onclick = () => {
      fn();
      saveDraft();
      render();
    };
    alignRow.appendChild(btn);
  });
  group.appendChild(alignRow);

  const list = document.createElement('div');
  list.className = 'sticker-list';
  page.stickers.forEach((slot) => {
    const item = document.createElement('div');
    item.className = 'row';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = state.multiSelectedStickerIds.includes(slot.id);
    checkbox.onchange = () => {
      if (checkbox.checked) {
        state.multiSelectedStickerIds = [...new Set([...state.multiSelectedStickerIds, slot.id])];
      } else {
        state.multiSelectedStickerIds = state.multiSelectedStickerIds.filter((id) => id !== slot.id);
      }
      state.selectedStickerId = state.multiSelectedStickerIds[0] || null;
      render();
    };
    const label = document.createElement('label');
    label.textContent = `#${slot.number} (${slot.x.toFixed(1)}mm, ${slot.y.toFixed(1)}mm)`;
    item.appendChild(checkbox);
    item.appendChild(label);
    list.appendChild(item);
  });
  group.appendChild(list);

  const selected = page.stickers.find((s) => s.id === state.selectedStickerId);
  if (selected) {
    group.appendChild(numberInput('Número', selected.number, 1, 999, 1, (val) => {
      selected.number = val;
      saveDraft();
      render();
    }));
    group.appendChild(textInput('Legenda', selected.caption, (val) => {
      selected.caption = val;
      saveDraft();
      render();
    }));
    group.appendChild(numberInput('X (mm)', selected.x, 0, PAGE_WIDTH_MM - STICKER_WIDTH_MM, 0.5, (val) => {
      selected.x = val;
      saveDraft();
      render();
    }));
    group.appendChild(numberInput('Y (mm)', selected.y, 0, PAGE_HEIGHT_MM - STICKER_HEIGHT_MM, 0.5, (val) => {
      selected.y = val;
      saveDraft();
      render();
    }));
    group.appendChild(textInput('Tamanho', `${STICKER_WIDTH_MM}mm x ${STICKER_HEIGHT_MM}mm (travado)`, () => {}));
    group.appendChild(colorInput('Cor da borda', selected.borderColor, (val) => {
      selected.borderColor = val;
      saveDraft();
      render();
    }));
    group.appendChild(selectInput('Estilo da borda', selected.borderStyle, [['dashed', 'Tracejada'], ['solid', 'Sólida'], ['dotted', 'Pontilhada']], (val) => {
      selected.borderStyle = val;
      saveDraft();
      render();
    }));
    group.appendChild(checkboxInput('Bloquear posição', selected.locked, (val) => {
      selected.locked = val;
      saveDraft();
      render();
    }));
  }

  return group;
}

function addSticker(page) {
  const number = nextStickerNumber(page);
  page.stickers.push({
    id: crypto.randomUUID(),
    number,
    caption: `Figurinha ${number}`,
    x: 12,
    y: 60,
    width: STICKER_WIDTH_MM,
    height: STICKER_HEIGHT_MM,
    borderColor: '#3d405b',
    borderStyle: 'dashed',
    locked: false
  });
}

function addFiveStickers(page) {
  const start = nextStickerNumber(page);
  const extra = defaultFiveSlots(start, []);
  page.stickers.push(...extra);
}

function duplicateSelectedSticker(page) {
  const slot = page.stickers.find((s) => s.id === state.selectedStickerId);
  if (!slot) return;
  const duplicated = {
    ...slot,
    id: crypto.randomUUID(),
    x: Math.min(slot.x + DUPLICATE_OFFSET_MM, PAGE_WIDTH_MM - STICKER_WIDTH_MM),
    y: Math.min(slot.y + DUPLICATE_OFFSET_MM, PAGE_HEIGHT_MM - STICKER_HEIGHT_MM)
  };
  page.stickers.push(duplicated);
  state.selectedStickerId = duplicated.id;
  state.multiSelectedStickerIds = [duplicated.id];
}

function removeSelectedSticker(page) {
  if (!state.selectedStickerId) return;
  page.stickers = page.stickers.filter((s) => s.id !== state.selectedStickerId);
  state.multiSelectedStickerIds = state.multiSelectedStickerIds.filter((id) => id !== state.selectedStickerId);
  state.selectedStickerId = null;
}

function getWorkingSelection(page) {
  const selected = page.stickers.filter((s) => state.multiSelectedStickerIds.includes(s.id));
  const base = selected.length > 0 ? selected : page.stickers;
  return base.filter((s) => !s.locked);
}

function arrangeThreeTwo(page) {
  const slots = getWorkingSelection(page);
  const target = slots.length >= 5 ? slots.slice(0, 5) : page.stickers.slice(0, 5);
  const positions = defaultFiveSlots(1, []).map((s) => ({ x: s.x, y: s.y }));
  target.forEach((slot, idx) => {
    slot.x = positions[idx].x;
    slot.y = positions[idx].y;
  });
}

function arrangeSideColumn(page) {
  const slots = getWorkingSelection(page);
  slots.forEach((slot, idx) => {
    slot.x = PAGE_WIDTH_MM - STICKER_WIDTH_MM - 10;
    slot.y = 18 + idx * (STICKER_HEIGHT_MM + 3);
  });
}

function centerSelected(page) {
  const slots = getWorkingSelection(page);
  slots.forEach((slot) => {
    slot.x = (PAGE_WIDTH_MM - STICKER_WIDTH_MM) / 2;
  });
}

function alignToSafeMargin(page) {
  const margin = page.background.safeMargin || 8;
  getWorkingSelection(page).forEach((slot) => {
    slot.x = margin;
  });
}

function alignAmong(page) {
  const slots = getWorkingSelection(page);
  if (!slots.length) return;
  const y = slots[0].y;
  slots.forEach((slot) => {
    slot.y = y;
  });
}

function distributeHorizontal(page) {
  const slots = getWorkingSelection(page).sort((a, b) => a.x - b.x);
  if (slots.length < 3) return;
  const min = slots[0].x;
  const max = slots[slots.length - 1].x;
  const step = (max - min) / (slots.length - 1);
  slots.forEach((slot, idx) => {
    slot.x = min + step * idx;
  });
}

function distributeVertical(page) {
  const slots = getWorkingSelection(page).sort((a, b) => a.y - b.y);
  if (slots.length < 3) return;
  const min = slots[0].y;
  const max = slots[slots.length - 1].y;
  const step = (max - min) / (slots.length - 1);
  slots.forEach((slot, idx) => {
    slot.y = min + step * idx;
  });
}

function alignToGrid(page) {
  getWorkingSelection(page).forEach((slot) => {
    slot.x = Math.round(slot.x);
    slot.y = Math.round(slot.y);
  });
}

function nextStickerNumber(page) {
  return page.stickers.length ? Math.max(...page.stickers.map((s) => Number(s.number) || 0)) + 1 : 1;
}

function getPageSequence() {
  if (state.orderMode === 'natural') {
    return state.album.pages.map((p) => p.naturalNumber);
  }
  return IMPOSITION_SIDES.flatMap((s) => [s.left, s.right]);
}

function getSheetSequence() {
  if (state.orderMode === 'print') {
    return IMPOSITION_SIDES.map((s) => ({ ...s, label: `Folha ${s.sheet} — ${s.side} (imposição)` }));
  }
  const pages = state.album.pages.map((p) => p.naturalNumber);
  const out = [];
  for (let i = 0; i < pages.length; i += 2) {
    out.push({
      sheet: i / 2 + 1,
      side: 'natural',
      left: pages[i],
      right: pages[i + 1],
      label: `Folha ${i / 2 + 1} (natural: páginas ${pages[i]} e ${pages[i + 1]})`
    });
  }
  return out;
}

function renderValidation() {
  const host = document.getElementById('validation-report');
  host.innerHTML = '<strong>Relatório de validação</strong>';
  if (!state.validation.length) {
    host.innerHTML += '<p>Clique em “Validar projeto”.</p>';
    return;
  }
  const ul = document.createElement('ul');
  state.validation.forEach((item) => {
    const li = document.createElement('li');
    li.className = item.ok ? 'pass' : 'fail';
    li.textContent = `${item.ok ? '✔' : '✖'} ${item.message}`;
    ul.appendChild(li);
  });
  host.appendChild(ul);
}

function validateProject(album) {
  const results = [];
  const pages = album.pages;
  const sorted = [...pages].sort((a, b) => a.naturalNumber - b.naturalNumber);

  results.push({ ok: pages.length === 20, message: 'Todas as 20 páginas existem.' });
  results.push({ ok: sorted.every((p, i) => p.naturalNumber === i + 1), message: 'Páginas pares e ímpares estão corretas na ordem natural.' });

  const drawingPageNatural19 = pages.find((p) => p.naturalNumber === 19);
  results.push({ ok: drawingPageNatural19 && drawingPageNatural19.stickers.length === 0, message: 'Página natural 19 (desenho) não possui espaços de figurinhas.' });

  const expectedRanges = {
    4: [1, 5], 5: [6, 10], 6: [11, 15], 7: [16, 20], 8: [21, 25],
    9: [26, 30], 10: [31, 35], 11: [36, 40], 12: [41, 45], 13: [46, 50],
    14: [51, 55], 15: [56, 60], 16: [61, 65], 17: [66, 70], 18: [71, 75]
  };

  Object.entries(expectedRanges).forEach(([pageNumber, [start, end]]) => {
    const page = pages.find((p) => p.naturalNumber === Number(pageNumber));
    const numbers = (page?.stickers || []).map((s) => Number(s.number)).sort((a, b) => a - b);
    const expected = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    const ok = expected.length === numbers.length && expected.every((num, idx) => num === numbers[idx]);
    results.push({ ok, message: `Página natural ${pageNumber} possui figurinhas corretas (${start}-${end}).` });
  });

  const allStickers = pages.flatMap((p) => p.stickers);
  results.push({
    ok: allStickers.every((s) => Number(s.width) === STICKER_WIDTH_MM && Number(s.height) === STICKER_HEIGHT_MM),
    message: `Todos os espaços têm ${STICKER_WIDTH_MM}mm x ${STICKER_HEIGHT_MM}mm.`
  });

  const numbers = allStickers.map((s) => Number(s.number));
  const unique = new Set(numbers);
  results.push({ ok: unique.size === numbers.length, message: 'Não há números duplicados de figurinhas.' });

  const missing = [];
  for (let i = 1; i <= 75; i += 1) {
    if (!unique.has(i)) missing.push(i);
  }
  results.push({ ok: missing.length === 0, message: `Todas as figurinhas de 1 a 75 possuem espaço correspondente${missing.length ? ` (faltando: ${missing.join(', ')})` : ''}.` });

  const expectedImposition = [
    [20, 1], [2, 19], [18, 3], [4, 17], [16, 5],
    [6, 15], [14, 7], [8, 13], [12, 9], [10, 11]
  ];
  const impositionOk = IMPOSITION_SIDES.every((side, idx) => side.left === expectedImposition[idx][0] && side.right === expectedImposition[idx][1]);
  results.push({ ok: impositionOk, message: 'A imposição do livreto está correta.' });

  const firstFront = IMPOSITION_SIDES[0];
  const firstBack = IMPOSITION_SIDES[1];
  results.push({ ok: firstFront.right === 1, message: 'A capa aparece à direita na folha 1 frente.' });
  results.push({ ok: firstBack.left === 2, message: 'A contracapa interna aparece à esquerda na folha 1 verso.' });
  results.push({ ok: firstBack.right === 19, message: 'A página natural 19 aparece à direita na folha 1 verso.' });
  results.push({ ok: firstFront.left === 20, message: 'A capa traseira aparece à esquerda na folha 1 frente.' });

  return results;
}

function wireEvents() {
  document.getElementById('order-mode').onchange = (event) => {
    state.orderMode = event.target.value;
    state.pageCursor = 0;
    state.sheetCursor = 0;
    const sequence = getPageSequence();
    state.selectedPageNumber = sequence[0];
    render();
  };

  document.getElementById('view-mode').onchange = (event) => {
    state.viewMode = event.target.value;
    render();
  };

  document.getElementById('btn-toggle-grid').onclick = () => {
    state.showGrid = !state.showGrid;
    render();
  };

  document.getElementById('btn-toggle-safe').onclick = () => {
    state.showSafeMargins = !state.showSafeMargins;
    render();
  };

  document.getElementById('btn-prev').onclick = () => {
    if (state.viewMode === 'page') {
      const seq = getPageSequence();
      state.pageCursor = Math.max(0, state.pageCursor - 1);
      state.selectedPageNumber = seq[state.pageCursor];
    } else {
      state.sheetCursor = Math.max(0, state.sheetCursor - 1);
    }
    render();
  };

  document.getElementById('btn-next').onclick = () => {
    if (state.viewMode === 'page') {
      const seq = getPageSequence();
      state.pageCursor = Math.min(seq.length - 1, state.pageCursor + 1);
      state.selectedPageNumber = seq[state.pageCursor];
    } else {
      const seq = getSheetSequence();
      state.sheetCursor = Math.min(seq.length - 1, state.sheetCursor + 1);
    }
    render();
  };

  document.getElementById('btn-validate').onclick = () => {
    state.validation = validateProject(state.album);
    renderValidation();
  };

  document.getElementById('btn-save-json').onclick = saveJsonProject;
  document.getElementById('btn-load-json').onclick = () => document.getElementById('json-file-input').click();
  document.getElementById('btn-export-page').onclick = exportCurrentPagePng;
  document.getElementById('btn-export-sheet').onclick = exportCurrentSheetPng;
  document.getElementById('btn-export-pdf').onclick = exportAllSheetsPdf;

  document.getElementById('json-file-input').onchange = importJsonProject;
  document.getElementById('bg-file-input').onchange = uploadBackground;

  window.addEventListener('mousemove', handleDragMove);
  window.addEventListener('mouseup', handleDragEnd);
}

function handleDragMove(event) {
  if (!state.drag) return;
  const page = getNaturalPage(state.drag.pageNumber);
  const slot = page?.stickers.find((s) => s.id === state.drag.slotId);
  if (!slot) return;

  const dxMm = (event.clientX - state.drag.startX) / state.drag.pxPerMm;
  const dyMm = (event.clientY - state.drag.startY) / state.drag.pxPerMm;
  const snappedX = Math.min(PAGE_WIDTH_MM - STICKER_WIDTH_MM, Math.max(0, state.drag.originX + dxMm));
  const snappedY = Math.min(PAGE_HEIGHT_MM - STICKER_HEIGHT_MM, Math.max(0, state.drag.originY + dyMm));
  slot.x = state.showGrid ? Math.round(snappedX) : snappedX;
  slot.y = state.showGrid ? Math.round(snappedY) : snappedY;
  render();
}

function handleDragEnd() {
  if (!state.drag) return;
  state.drag = null;
  saveDraft();
}

function saveJsonProject() {
  const data = JSON.stringify(state.album, null, 2);
  downloadBlob(new Blob([data], { type: 'application/json' }), `album-biblico-${Date.now()}.json`);
}

function importJsonProject(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      state.album = parsed;
      state.selectedPageNumber = 1;
      state.selectedStickerId = null;
      state.selectedTextId = null;
      state.multiSelectedStickerIds = [];
      saveDraft();
      render();
    } catch {
      alert('JSON inválido.');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function uploadBackground(event) {
  const page = getNaturalPage(state.selectedPageNumber);
  const file = event.target.files?.[0];
  if (!page || !file) return;
  const reader = new FileReader();
  reader.onload = () => {
    page.background.image = String(reader.result);
    saveDraft();
    render();
  };
  reader.readAsDataURL(file);
  event.target.value = '';
}

async function exportCurrentPagePng() {
  const page = getNaturalPage(state.selectedPageNumber);
  if (!page) return;
  const node = renderPageCanvas(page, false);
  await exportNodeToPng(node, `pagina-${page.naturalNumber}.png`);
}

async function exportCurrentSheetPng() {
  const sequence = getSheetSequence();
  const side = sequence[state.sheetCursor] || sequence[0];
  if (!side) return;
  const node = renderSheetCanvas(side);
  await exportNodeToPng(node, `folha-${side.sheet}-${side.side}.png`);
}

async function exportAllSheetsPdf() {
  const sequence = IMPOSITION_SIDES.map((s) => ({ ...s, label: `Folha ${s.sheet} ${s.side}` }));
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  for (let i = 0; i < sequence.length; i += 1) {
    const node = renderSheetCanvas(sequence[i]);
    const dataUrl = await nodeToDataUrl(node);
    if (i > 0) pdf.addPage('a4', 'landscape');
    pdf.addImage(dataUrl, 'PNG', 0, 0, SHEET_WIDTH_MM, SHEET_HEIGHT_MM);
  }
  pdf.save('album-imposicao-a4.pdf');
}

async function exportNodeToPng(node, filename) {
  const dataUrl = await nodeToDataUrl(node);
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  downloadBlob(blob, filename);
}

async function nodeToDataUrl(node) {
  const sandbox = document.createElement('div');
  sandbox.style.position = 'fixed';
  sandbox.style.left = '-10000px';
  sandbox.style.top = '0';
  sandbox.appendChild(node);
  document.body.appendChild(sandbox);
  const canvas = await html2canvas(node, {
    backgroundColor: '#ffffff',
    scale: 2,
    useCORS: true
  });
  document.body.removeChild(sandbox);
  return canvas.toDataURL('image/png');
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(text) {
  return String(text ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function el(tag, className) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function labeledInput(labelText, control) {
  const row = el('div', 'row');
  const label = document.createElement('label');
  label.textContent = labelText;
  row.appendChild(label);
  row.appendChild(control);
  return row;
}

function textInput(labelText, value, onChange) {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = value ?? '';
  input.oninput = (e) => onChange(e.target.value);
  return labeledInput(labelText, input);
}

function textAreaInput(labelText, value, onChange) {
  const input = document.createElement('textarea');
  input.value = value ?? '';
  input.rows = 3;
  input.oninput = (e) => onChange(e.target.value);
  return labeledInput(labelText, input);
}

function numberInput(labelText, value, min, max, step, onChange) {
  const input = document.createElement('input');
  input.type = 'number';
  input.value = value ?? 0;
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.oninput = (e) => onChange(Number(e.target.value));
  return labeledInput(labelText, input);
}

function selectInput(labelText, value, options, onChange) {
  const select = document.createElement('select');
  options.forEach(([val, textLabel]) => {
    const option = document.createElement('option');
    option.value = val;
    option.textContent = textLabel;
    if (val === value) option.selected = true;
    select.appendChild(option);
  });
  select.onchange = (e) => onChange(e.target.value);
  return labeledInput(labelText, select);
}

function colorInput(labelText, value, onChange) {
  const input = document.createElement('input');
  input.type = 'color';
  input.value = value || '#ffffff';
  input.oninput = (e) => onChange(e.target.value);
  return labeledInput(labelText, input);
}

function checkboxInput(labelText, value, onChange) {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = Boolean(value);
  input.onchange = (e) => onChange(e.target.checked);
  return labeledInput(labelText, input);
}

window.addEventListener('DOMContentLoaded', () => {
  wireEvents();
  state.validation = validateProject(state.album);
  render();
});

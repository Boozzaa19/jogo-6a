/* ============================================================
   ARENA DOS CAMPEÕES — O DESAFIO DOS ESPORTES
   script.js  (versão SEM persistência — reseta no F5)
   ============================================================ */

/* ============================================================
   1. CATEGORIAS / MODALIDADES
   ============================================================ */
const CATEGORIAS = {
  futsal:    { nome: 'Futsal',        icone: '⚽', tag: 'Esporte de Invasão',      cor: '#ff7a18' },
  basquete:  { nome: 'Basquete',      icone: '🏀', tag: 'Esporte de Invasão',      cor: '#ff9f1c' },
  handebol:  { nome: 'Handebol',      icone: '🤾', tag: 'Esporte de Invasão',      cor: '#f2b705' },
  volei:     { nome: 'Vôlei',         icone: '🏐', tag: 'Esporte de Rede',         cor: '#1565ff' },
  capoeira:  { nome: 'Capoeira',      icone: '🤸', tag: 'Prática Corporal e Luta', cor: '#17c964' },
  judo:      { nome: 'Judô',          icone: '🥋', tag: 'Luta e Fair Play',        cor: '#7b2ff7' },
  atletismo: { nome: 'Atletismo',     icone: '🏃', tag: 'Esporte de Marca',        cor: '#ff2d95' },
  saude:     { nome: 'Saúde e Corpo', icone: '❤️', tag: 'Fisiologia e Cuidados',   cor: '#00c2d1' }
};

/* ============================================================
   2. BANCO DE DESAFIOS — EDUCAÇÃO FÍSICA 6º ANO
   ============================================================ */
const BANCO = [
  /* ---------------- FUTSAL ---------------- */
  {
    categoria: 'futsal',
    pergunta: 'No futsal, o goleiro pode pegar a bola com as mãos em qualquer parte da quadra.',
    resposta: false,
    explicacao: 'FALTA TÁTICA! O goleiro só pode usar as mãos dentro da sua própria área de meta. Fora dela, ele joga como qualquer outro jogador.',
    dica: 'Pense no espaço delimitado pela linha da área. Dentro dele, o goleiro tem privilégio; fora, não.'
  },
  {
    categoria: 'futsal',
    pergunta: 'No futsal, o cronômetro é parado sempre que a bola sai de jogo ou o árbitro apita.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! Diferente do futebol de campo, o futsal tem tempo cronometrado com paradas, como no basquete.',
    dica: 'No futsal, o tempo só corre quando a bola está em jogo.'
  },
  {
    categoria: 'futsal',
    pergunta: 'Uma partida oficial de futsal adulto é dividida em dois tempos de 20 minutos.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! São 2 tempos de 20 minutos cronometrados, com 10 minutos de intervalo.',
    dica: 'São dois tempos iguais, e o número é o mesmo de uma partida de basquete em minutos por quarto... mas aqui são só dois tempos.'
  },

  /* ---------------- BASQUETE ---------------- */
  {
    categoria: 'basquete',
    pergunta: 'No basquete, o jogador pode quicar a bola, segurá-la com as duas mãos e depois voltar a quicar.',
    resposta: false,
    explicacao: 'FALTA TÁTICA! Isso é o "drible duplo" (condução ilegal). Depois de segurar a bola com as duas mãos, o jogador só pode passar ou arremessar.',
    dica: 'Existe um nome para essa violação: drible duplo ou condução ilegal.'
  },
  {
    categoria: 'basquete',
    pergunta: 'No basquete, a equipe que ataca tem 24 segundos para arremessar a bola à cesta.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! É a regra dos 24 segundos: se o ataque não arremessar nesse tempo, a posse passa para o adversário.',
    dica: 'É um número que também aparece nas horas do dia... mas aqui é a regra do tempo de ataque.'
  },
  {
    categoria: 'basquete',
    pergunta: 'No basquete, um lance livre convertido vale 2 pontos para a equipe.',
    resposta: false,
    explicacao: 'FALTA TÁTICA! O lance livre vale apenas 1 ponto. Vale 2 dentro do garrafão e 3 atrás da linha de três.',
    dica: 'É o arremesso mais "barato" do basquete, feito parado na linha.'
  },

  /* ---------------- HANDEBOL ---------------- */
  {
    categoria: 'handebol',
    pergunta: 'No handebol, o jogador pode dar até três passos com a bola na mão sem quicá-la no chão.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! São permitidos no máximo 3 passos com a bola na mão. Depois disso, é preciso quicar, passar ou arremessar.',
    dica: 'Pense no número de passos que um árbitro conta antes de marcar "passos".'
  },
  {
    categoria: 'handebol',
    pergunta: 'No handebol, é permitido tocar a bola com os pés durante o jogo em qualquer situação.',
    resposta: false,
    explicacao: 'FALTA TÁTICA! Jogadores de linha não podem tocar a bola com os pés. Só o goleiro, dentro da sua área, pode usar os pés.',
    dica: 'Pense em quem tem permissão especial dentro da área.'
  },
  {
    categoria: 'handebol',
    pergunta: 'Uma equipe de handebol joga com 7 atletas em quadra, incluindo o goleiro.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! São 7 jogadores por equipe: 6 na linha e 1 goleiro.',
    dica: 'É um número entre 6 e 8. Pense em 6 na linha + 1 goleiro.'
  },

  /* ---------------- VÔLEI ---------------- */
  {
    categoria: 'volei',
    pergunta: 'No vôlei, uma equipe pode tocar na bola até três vezes antes de devolvê-la à quadra adversária.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! São permitidos no máximo 3 toques (sem contar o bloqueio) antes de enviar a bola para o outro lado.',
    dica: 'Toque, levantamento, ataque. Conte os toques dessa sequência clássica.'
  },
  {
    categoria: 'volei',
    pergunta: 'No vôlei, o líbero pode sacar, atacar e bloquear normalmente como os outros jogadores.',
    resposta: false,
    explicacao: 'FALTA TÁTICA! O líbero é especialista em defesa e não pode sacar, atacar acima da rede nem bloquear. Ele usa uniforme diferente.',
    dica: 'O líbero tem uma função bem específica: recepção e defesa.'
  },
  {
    categoria: 'volei',
    pergunta: 'No vôlei, se a bola tocar a linha da quadra, ela é considerada dentro.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! A linha faz parte da quadra. Bola na linha é bola dentro.',
    dica: 'As linhas delimitam a quadra — pense se elas fazem parte dela.'
  },

  /* ---------------- CAPOEIRA ---------------- */
  {
    categoria: 'capoeira',
    pergunta: 'Na capoeira, os golpes são executados apenas com as mãos.',
    resposta: false,
    explicacao: 'FALTA TÁTICA! A capoeira usa principalmente os pés (armada, queixada, benção), além de cabeça, joelhos e cotovelos.',
    dica: 'Pense nos golpes mais famosos da capoeira: armada, queixada, benção...'
  },
  {
    categoria: 'capoeira',
    pergunta: 'A roda de capoeira é o espaço onde os praticantes jogam ao som do berimbau e dos cânticos.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! A roda é formada pelos participantes e é o coração da capoeira: música, palmas, cânticos e o jogo no centro.',
    dica: 'É um formato circular, com música ao vivo e todos batendo palmas.'
  },
  {
    categoria: 'capoeira',
    pergunta: 'A capoeira é uma prática corporal brasileira que mistura luta, dança, música e cultura.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! A capoeira é patrimônio cultural do Brasil e une luta, dança, música, ritmo e expressão corporal.',
    dica: 'É uma manifestação criada no Brasil, reconhecida como patrimônio cultural.'
  },

  /* ---------------- JUDÔ ---------------- */
  {
    categoria: 'judo',
    pergunta: 'No judô, o objetivo é derrubar o adversário e imobilizá-lo, sem golpes que machuquem de propósito.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! O judô é uma arte marcial de origem japonesa baseada em projeções, imobilizações e controle, sempre com respeito ao adversário.',
    dica: 'Pense na palavra japonesa "ju" (suave) e no uso da força do outro.'
  },
  {
    categoria: 'judo',
    pergunta: 'No judô, o "ippon" é a vitória máxima, conquistada com uma queda perfeita ou imobilização de 20 segundos.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! O ippon encerra a luta imediatamente. Também pode ocorrer por imobilização de 20 segundos (osaekomi).',
    dica: 'É o equivalente ao nocaute do boxe: a luta acaba na hora.'
  },
  {
    categoria: 'judo',
    pergunta: 'No judô, empurrar o adversário com força bruta e bater nele de propósito faz parte das regras oficiais.',
    resposta: false,
    explicacao: 'FALTA TÁTICA! O judô valoriza o respeito e a técnica. Golpes que machucam de propósito resultam em punição, não em ponto.',
    dica: 'O judô tem um princípio forte de respeito e segurança do adversário.'
  },

  /* ---------------- ATLETISMO ---------------- */
  {
    categoria: 'atletismo',
    pergunta: 'O atletismo reúne provas de corrida, salto e arremesso.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! O atletismo é o esporte mais antigo dos Jogos Olímpicos e engloba corridas, saltos, arremessos e lançamentos.',
    dica: 'É o esporte base dos Jogos Olímpicos, presente desde a Grécia Antiga.'
  },
  {
    categoria: 'atletismo',
    pergunta: 'Na corrida de revezamento, os atletas precisam passar um bastão entre si dentro de uma zona de troca.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! O bastão deve ser passado dentro da zona de troca determinada. Deixar cair ou passar fora da zona gera desclassificação.',
    dica: 'Existe um objeto que vai de mão em mão durante a prova.'
  },
  {
    categoria: 'atletismo',
    pergunta: 'No salto em distância, o resultado do atleta é medido pela altura máxima que ele atinge no ar.',
    resposta: false,
    explicacao: 'FALTA TÁTICA! No salto em distância, mede-se a distância horizontal entre a tábua de impulsão e a marca mais próxima no chão.',
    dica: 'Existe outra prova cujo resultado é medido em altura. Aqui, não.'
  },

  /* ---------------- SAÚDE E CORPO ---------------- */
  {
    categoria: 'saude',
    pergunta: 'A frequência cardíaca aumenta durante o exercício porque o coração precisa levar mais sangue aos músculos.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! Durante o exercício, os músculos precisam de mais oxigênio e nutrientes. O coração acelera para atender essa demanda.',
    dica: 'Pense no que os músculos precisam durante o esforço: oxigênio e nutrientes.'
  },
  {
    categoria: 'saude',
    pergunta: 'Beber água apenas quando sentir sede é suficiente para se manter hidratado durante um treino longo.',
    resposta: false,
    explicacao: 'FALTA TÁTICA! A sede já é um sinal de desidratação leve. O ideal é beber água antes, durante e depois do exercício, mesmo sem sede.',
    dica: 'A sede aparece antes ou depois de o corpo já estar perdendo água?'
  },
  {
    categoria: 'saude',
    pergunta: 'O aquecimento antes da atividade física prepara o corpo e ajuda a reduzir o risco de lesões.',
    resposta: true,
    explicacao: 'JOGADA VÁLIDA! O aquecimento aumenta a temperatura corporal, melhora a circulação e prepara músculos e articulações para o esforço.',
    dica: 'É a etapa que sempre vem antes do treino ou da partida.'
  }
];

/* ============================================================
   3. ITENS DO ARMÁRIO DE CONQUISTAS
   ============================================================ */
const ITENS = [
  { id: 'medalha-ouro',   nome: 'Medalha de Ouro',      icone: '🥇', desc: 'Acerte 90% ou mais dos desafios.',        verifica: c => c.percentual >= 0.9 },
  { id: 'medalha-prata',  nome: 'Medalha de Prata',     icone: '🥈', desc: 'Acerte 70% ou mais dos desafios.',        verifica: c => c.percentual >= 0.7 },
  { id: 'medalha-bronze', nome: 'Medalha de Bronze',    icone: '🥉', desc: 'Acerte 50% ou mais dos desafios.',        verifica: c => c.percentual >= 0.5 },
  { id: 'bola-ouro',      nome: 'Bola de Ouro',         icone: '⚽', desc: 'Acerte todos os desafios de Futsal.',     verifica: c => c.completo('futsal') },
  { id: 'cesta-ouro',     nome: 'Cesta de Ouro',        icone: '🏀', desc: 'Acerte todos os desafios de Basquete.',   verifica: c => c.completo('basquete') },
  { id: 'luva-handebol',  nome: 'Luva de Handebol',     icone: '🤾', desc: 'Acerte todos os desafios de Handebol.',   verifica: c => c.completo('handebol') },
  { id: 'bola-volei',     nome: 'Bola de Vôlei',        icone: '🏐', desc: 'Acerte todos os desafios de Vôlei.',      verifica: c => c.completo('volei') },
  { id: 'corda-capoeira', nome: 'Corda de Capoeira',    icone: '🪢', desc: 'Acerte todos os desafios de Capoeira.',   verifica: c => c.completo('capoeira') },
  { id: 'kimono-prata',   nome: 'Kimono de Prata',      icone: '🥋', desc: 'Acerte todos os desafios de Judô.',       verifica: c => c.completo('judo') },
  { id: 'sapatilha',      nome: 'Sapatilha de Atletismo', icone: '👟', desc: 'Acerte todos os desafios de Atletismo.', verifica: c => c.completo('atletismo') },
  { id: 'coracao-atleta', nome: 'Coração de Atleta',    icone: '❤️', desc: 'Acerte todos os desafios de Saúde.',      verifica: c => c.completo('saude') },
  { id: 'garrafa',        nome: 'Garrafa de Hidratação', icone: '💧', desc: 'Use a Pausa para Hidratação.',           verifica: c => c.usouHidratacao },
  { id: 'fair-play',      nome: 'Troféu de Fair Play',  icone: '🤝', desc: 'Termine sem perder nenhuma energia.',     verifica: c => c.vidasPerdidas === 0 },
  { id: 'alvo-ouro',      nome: 'Alvo de Ouro',         icone: '🎯', desc: 'Faça 3 aquecimentos perfeitos.',          verifica: c => c.precisaoPerfeita >= 3 },
  { id: 'combo',          nome: 'Cordão de Energia',    icone: '⚡', desc: 'Acerte 5 desafios seguidos.',             verifica: c => c.maxCombo >= 5 }
];

/* ============================================================
   4. ÁUDIO — WEB AUDIO API
   ============================================================ */
const Som = (function () {
  let ctx = null;
  let mudo = false;

  function garantir() {
    if (mudo) return null;
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { return null; }
    }
    if (ctx.state === 'suspended') {
      try { ctx.resume(); } catch (e) { /* ignora */ }
    }
    return ctx;
  }

  function tom(freq, dur, tipo, vol, atraso) {
    const c = garantir();
    if (!c) return;
    const t0 = c.currentTime + (atraso || 0);
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = tipo || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(vol || 0.12, 0.0002), t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  function ruido(dur, freq, q, vol, atraso) {
    const c = garantir();
    if (!c) return;
    const t0 = c.currentTime + (atraso || 0);
    const n = Math.max(1, Math.floor(c.sampleRate * dur));
    const buf = c.createBuffer(1, n, c.sampleRate);
    const dados = buf.getChannelData(0);
    for (let i = 0; i < n; i++) dados[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    src.buffer = buf;
    const filtro = c.createBiquadFilter();
    filtro.type = 'bandpass';
    filtro.frequency.value = freq;
    filtro.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(Math.max(vol, 0.0002), t0 + 0.1);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(filtro);
    filtro.connect(g);
    g.connect(c.destination);
    src.start(t0);
    src.stop(t0 + dur + 0.05);
  }

  function apito() {
    const c = garantir();
    if (!c) return;
    const t0 = c.currentTime;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1850, t0);
    osc.frequency.linearRampToValueAtTime(2350, t0 + 0.06);
    osc.frequency.linearRampToValueAtTime(1950, t0 + 0.3);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(0.15, t0 + 0.02);
    g.gain.setValueAtTime(0.15, t0 + 0.22);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.4);
    osc.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + 0.45);
  }

  return {
    iniciar() { garantir(); },

    apito,

    torcida() {
      ruido(1.6, 900, 0.6, 0.09);
      ruido(1.4, 1700, 0.9, 0.045, 0.08);
    },

    tick() { tom(1500, 0.05, 'square', 0.045); },

    acerto() {
      tom(523.25, 0.16, 'triangle', 0.12, 0);
      tom(659.25, 0.16, 'triangle', 0.12, 0.09);
      tom(783.99, 0.3, 'triangle', 0.13, 0.18);
    },

    erro() {
      tom(196, 0.22, 'sawtooth', 0.10, 0);
      tom(146.83, 0.32, 'sawtooth', 0.10, 0.10);
    },

    conquista() {
      tom(659.25, 0.14, 'sine', 0.13, 0);
      tom(880, 0.14, 'sine', 0.13, 0.1);
      tom(1046.5, 0.14, 'sine', 0.13, 0.2);
      tom(1318.5, 0.42, 'sine', 0.14, 0.3);
    },

    clique() { tom(720, 0.06, 'square', 0.05); },

    alternar() {
      mudo = !mudo;
      if (!mudo) garantir();
      return mudo;
    },

    estaMudo() { return mudo; }
  };
})();

/* ============================================================
   5. CONFIGURAÇÕES
   ============================================================ */
const TOTAL_DESAFIOS       = 12;
const TEMPO_BASE           = 18;   // segundos por pergunta
const ENERGIA_INICIAL      = 3;
const ENERGIA_MAXIMA       = 5;
const PONTOS_BASE          = 100;
const BONUS_PRECISAO_MAX   = 50;
const BONUS_TEMPO_MAX      = 50;
const BONUS_TEMPO_SEGUNDOS = 6;    // segundos extras máximos pelo aquecimento

/* ============================================================
   6. ESTADO GLOBAL — sem persistência!
   ============================================================ */
let fila = [];
let indice = 0;
let questaoAtual = null;
let fase = 'idle';                 // 'aquecimento' | 'pergunta' | 'feedback'
let travado = false;
let dicaMostrada = false;

let pontuacao = 0;
let energia = ENERGIA_INICIAL;
let acertos = 0;

let tempoRestante = 0;
let tempoTotal = TEMPO_BASE;
let intervaloTempo = null;
let tempoPausado = false;
let intervaloPausa = null;

let bonusPrecisao = 0;
let bonusTempoExtra = 0;

let cartoes = {
  prancheta:  { usos: 2, max: 2 },
  tempo:      { usos: 1, max: 1 },
  hidratacao: { usos: 1, max: 1 }
};

let stats = {
  acertos: 0,
  erros: 0,
  comboAtual: 0,
  maxCombo: 0,
  vidasPerdidas: 0,
  precisaoPerfeita: 0,
  usouHidratacao: false,
  porCategoria: {}
};

/* ------------------------------------------------------------
   Melhor pontuação e armário: APENAS em memória.
   Ao dar F5, voltam a zero / vazio.
------------------------------------------------------------ */
let melhorPontuacao = 0;
let armario = [];

/* ---------- Mini-jogo de aquecimento ---------- */
const aquecimento = {
  tipo: null,
  ativo: false,
  pos: 0,
  dir: 1,
  velocidade: 85,
  raf: null,
  ultimoT: 0,
  marcador: null,
  painel: null,
  timeoutId: null,
  pronto: false,
  inicioReflexo: 0
};

/* ============================================================
   7. REFERÊNCIAS AO DOM
   ============================================================ */
const telaInicio = document.getElementById('tela-inicio');
const telaJogo   = document.getElementById('tela-jogo');
const telaFim    = document.getElementById('tela-fim');

const botaoSom      = document.getElementById('botao-som');
const botaoComecar  = document.getElementById('botao-comecar');
const botaoReiniciar = document.getElementById('botao-reiniciar');
const botaoProxima  = document.getElementById('botao-proxima');

const hudVidas    = document.getElementById('hud-vidas');
const numeroQuestao = document.getElementById('numero-questao');
const totalQuestoes = document.getElementById('total-questoes');
const pontuacaoEl = document.getElementById('pontuacao');
const tempoTexto  = document.getElementById('tempo-texto');
const preenchimentoTempo = document.getElementById('preenchimento-tempo');

const avisoTimeout    = document.getElementById('aviso-timeout');
const timeoutContador = document.getElementById('timeout-contador');

const faixaModalidade  = document.getElementById('faixa-modalidade');
const modalidadeIcone  = document.getElementById('modalidade-icone');
const modalidadeNome   = document.getElementById('modalidade-nome');
const modalidadeTag    = document.getElementById('modalidade-tag');

const zonaAquecimento     = document.getElementById('zona-aquecimento');
const aquecimentoTitulo   = document.getElementById('aquecimento-titulo');
const aquecimentoInstrucao = document.getElementById('aquecimento-instrucao');
const palcoAquecimento    = document.getElementById('palco-aquecimento');
const botaoAcao           = document.getElementById('botao-acao');
const aquecimentoResultado = document.getElementById('aquecimento-resultado');

const zonaPergunta   = document.getElementById('zona-pergunta');
const textoPergunta  = document.getElementById('texto-pergunta');
const dicaTecnico    = document.getElementById('dica-tecnico');
const dicaTexto      = document.getElementById('dica-texto');
const botoesResposta = document.getElementById('botoes-resposta');
const botaoValida    = document.querySelector('.botao-valida');
const botaoInvalida  = document.querySelector('.botao-invalida');

const cartaoPrancheta  = document.getElementById('cartao-prancheta');
const cartaoTempo      = document.getElementById('cartao-tempo');
const cartaoHidratacao = document.getElementById('cartao-hidratacao');

const painelFeedback    = document.getElementById('painel-feedback');
const feedbackTitulo    = document.getElementById('feedback-titulo');
const feedbackExplicacao = document.getElementById('feedback-explicacao');

const medalha          = document.getElementById('medalha');
const mensagemFim      = document.getElementById('mensagem-fim');
const pontosFinais     = document.getElementById('pontos-finais');
const acertosFinais    = document.getElementById('acertos-finais');
const desafiosFinais   = document.getElementById('desafios-finais');
const vestiarioSub     = document.getElementById('vestiario-sub');
const armarioInicio    = document.getElementById('armario-inicio');
const armarioFim       = document.getElementById('armario-fim');
const melhorPontuacaoEl = document.getElementById('melhor-pontuacao');
const melhorPontuacaoFim = document.getElementById('melhor-pontuacao-fim');

/* ============================================================
   8. UTILITÁRIOS
   ============================================================ */
function embaralhar(array) {
  const copia = array.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copia[i];
    copia[i] = copia[j];
    copia[j] = tmp;
  }
  return copia;
}

function mostrarTela(tela) {
  document.querySelectorAll('.tela').forEach(function (t) {
    t.classList.remove('ativa');
  });
  tela.classList.add('ativa');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function limitar(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

/* ============================================================
   9. HUD / PLACAR DE LED
   ============================================================ */
function atualizarHUD() {
  let coracoes = '';
  for (let i = 0; i < ENERGIA_MAXIMA; i++) {
    coracoes += i < energia ? '❤️' : '🖤';
  }
  hudVidas.textContent = coracoes;
  pontuacaoEl.textContent = pontuacao;
}

/* ============================================================
   10. TEMPORIZADOR
   ============================================================ */
function iniciarTemporizador(segundos) {
  clearInterval(intervaloTempo);
  tempoRestante = segundos;
  tempoTotal = segundos;
  tempoPausado = false;
  atualizarBarraTempo();

  intervaloTempo = setInterval(function () {
    if (tempoPausado) return;
    tempoRestante -= 0.1;

    if (tempoRestante <= 0) {
      tempoRestante = 0;
      atualizarBarraTempo();
      clearInterval(intervaloTempo);
      intervaloTempo = null;
      tempoEsgotado();
      return;
    }
    atualizarBarraTempo();
  }, 100);
}

function pararTemporizador() {
  clearInterval(intervaloTempo);
  intervaloTempo = null;
}

function atualizarBarraTempo() {
  const pct = tempoTotal > 0 ? (tempoRestante / tempoTotal) * 100 : 0;
  preenchimentoTempo.style.width = pct + '%';

  const segundos = Math.ceil(tempoRestante);
  tempoTexto.textContent = segundos;

  preenchimentoTempo.classList.remove('medio', 'baixo');
  if (segundos <= 5) {
    preenchimentoTempo.classList.add('baixo');
  } else if (segundos <= 9) {
    preenchimentoTempo.classList.add('medio');
  }
}

/* ============================================================
   11. MONTAGEM DA PARTIDA
   ============================================================ */
function montarFila() {
  const porCategoria = {};
  BANCO.forEach(function (q) {
    if (!porCategoria[q.categoria]) porCategoria[q.categoria] = [];
    porCategoria[q.categoria].push(q);
  });

  const selecionadas = [];
  const sobras = [];

  Object.keys(porCategoria).forEach(function (cat) {
    const lista = embaralhar(porCategoria[cat]);
    selecionadas.push(lista[0]);
    for (let i = 1; i < lista.length; i++) sobras.push(lista[i]);
  });

  const faltam = TOTAL_DESAFIOS - selecionadas.length;
  const extras = embaralhar(sobras).slice(0, Math.max(0, faltam));

  return embaralhar(selecionadas.concat(extras));
}

/* ============================================================
   12. INÍCIO / RESET DO JOGO
   ============================================================ */
function iniciarJogo() {
  Som.iniciar();
  Som.apito();

  fila = montarFila();
  indice = 0;
  questaoAtual = null;
  pontuacao = 0;
  energia = ENERGIA_INICIAL;
  acertos = 0;
  travado = false;
  dicaMostrada = false;
  fase = 'idle';
  bonusPrecisao = 0;
  bonusTempoExtra = 0;

  cartoes = {
    prancheta:  { usos: 2, max: 2 },
    tempo:      { usos: 1, max: 1 },
    hidratacao: { usos: 1, max: 1 }
  };

  stats = {
    acertos: 0,
    erros: 0,
    comboAtual: 0,
    maxCombo: 0,
    vidasPerdidas: 0,
    precisaoPerfeita: 0,
    usouHidratacao: false,
    porCategoria: {}
  };

  totalQuestoes.textContent = fila.length;
  atualizarHUD();
  atualizarCartoes();

  mostrarTela(telaJogo);
  carregarQuestao();
}

/* ============================================================
   13. CARREGAR QUESTÃO
   ============================================================ */
function carregarQuestao() {
  limparAquecimento();
  pararTemporizador();
  pararPausa();

  if (indice >= fila.length) {
    finalizarJogo();
    return;
  }

  questaoAtual = fila[indice];
  travado = false;
  fase = 'aquecimento';
  dicaMostrada = false;
  bonusPrecisao = 0;
  bonusTempoExtra = 0;

  /* --- estatística por categoria --- */
  const catId = questaoAtual.categoria;
  if (!stats.porCategoria[catId]) {
    stats.porCategoria[catId] = { total: 0, acertos: 0 };
  }
  stats.porCategoria[catId].total++;

  /* --- faixa da modalidade --- */
  const cat = CATEGORIAS[catId] || CATEGORIAS.futsal;
  modalidadeIcone.textContent = cat.icone;
  modalidadeNome.textContent = cat.nome;
  modalidadeTag.textContent = cat.tag;
  faixaModalidade.style.setProperty('--cor-modalidade', cat.cor);

  /* --- placar --- */
  numeroQuestao.textContent = indice + 1;

  /* --- UI --- */
  zonaPergunta.classList.add('oculto');
  zonaAquecimento.classList.remove('oculto');
  painelFeedback.classList.add('oculto');
  painelFeedback.classList.remove('acerto', 'erro', 'tempo-esgotado');
  dicaTecnico.classList.add('oculto');
  dicaTexto.textContent = '';
  aquecimentoResultado.textContent = '';
  avisoTimeout.classList.add('oculto');

  botaoValida.disabled = false;
  botaoInvalida.disabled = false;

  atualizarHUD();
  atualizarCartoes();

  iniciarAquecimento();
}

/* ============================================================
   14. MINI-JOGO DE AQUECIMENTO
   ============================================================ */
const TIPO_POR_CATEGORIA = {
  futsal:    'mira',
  basquete:  'mira',
  handebol:  'mira',
  volei:     'forca',
  capoeira:  'reflexo',
  judo:      'reflexo',
  atletismo: 'forca',
  saude:     'reflexo'
};

const TEXTOS_AQUECIMENTO = {
  mira: {
    titulo: '🎯 Aqueça a mira!',
    instrucao: 'Clique quando o marcador cruzar a ZONA VERDE.',
    botao: '🎯 LANÇAR!'
  },
  forca: {
    titulo: '💪 Cobre a força!',
    instrucao: 'Clique quando a barra de força estiver na ZONA VERDE.',
    botao: '💪 SOLTAR!'
  },
  reflexo: {
    titulo: '⚡ Reflexo de atleta!',
    instrucao: 'Clique no botão ASSIM QUE o sinal ficar verde.',
    botao: '⚡ AGORA!'
  }
};

function iniciarAquecimento() {
  const tipo = TIPO_POR_CATEGORIA[questaoAtual.categoria] || 'mira';
  aquecimento.tipo = tipo;
  aquecimento.ativo = true;
  aquecimento.pronto = false;
  aquecimento.pos = 0;
  aquecimento.dir = 1;
  aquecimento.ultimoT = 0;
  aquecimento.inicioReflexo = 0;

  const textos = TEXTOS_AQUECIMENTO[tipo];
  aquecimentoTitulo.textContent = textos.titulo;
  aquecimentoInstrucao.textContent = textos.instrucao;
  botaoAcao.textContent = textos.botao;
  botaoAcao.disabled = false;

  montarPalco(tipo);
}

function montarPalco(tipo) {
  palcoAquecimento.innerHTML = '';
  aquecimento.marcador = null;
  aquecimento.painel = null;

  if (tipo === 'mira') {
    const pista = document.createElement('div');
    pista.className = 'pista';

    const zona = document.createElement('div');
    zona.className = 'zona-alvo';

    const marcador = document.createElement('div');
    marcador.className = 'marcador';

    pista.appendChild(zona);
    pista.appendChild(marcador);
    palcoAquecimento.appendChild(pista);

    aquecimento.marcador = marcador;
    aquecimento.velocidade = 88;
    aquecimento.pos = 0;
    aquecimento.dir = 1;
    aquecimento.raf = requestAnimationFrame(animarBarra);

  } else if (tipo === 'forca') {
    const pista = document.createElement('div');
    pista.className = 'pista-forca';

    const zona = document.createElement('div');
    zona.className = 'zona-forca';

    const preenchimento = document.createElement('div');
    preenchimento.className = 'preenchimento-forca';

    pista.appendChild(zona);
    pista.appendChild(preenchimento);
    palcoAquecimento.appendChild(pista);

    aquecimento.marcador = preenchimento;
    aquecimento.velocidade = 95;
    aquecimento.pos = 0;
    aquecimento.dir = 1;
    aquecimento.raf = requestAnimationFrame(animarBarra);

  } else {
    /* reflexo */
    const painel = document.createElement('div');
    painel.className = 'painel-reflexo';

    const emoji = document.createElement('span');
    emoji.className = 'reflexo-emoji';
    emoji.textContent = '🔴';

    const texto = document.createElement('span');
    texto.className = 'reflexo-texto';
    texto.textContent = 'ESPERE...';

    painel.appendChild(emoji);
    painel.appendChild(texto);
    palcoAquecimento.appendChild(painel);

    aquecimento.painel = painel;

    const atraso = 900 + Math.random() * 2200;
    aquecimento.timeoutId = setTimeout(function () {
      if (!aquecimento.ativo) return;
      aquecimento.pronto = true;
      aquecimento.inicioReflexo = performance.now();
      painel.classList.add('pronto');
      emoji.textContent = '🟢';
      texto.textContent = 'AGORA!';
      Som.tick();
    }, atraso);
  }
}

function animarBarra(t) {
  if (!aquecimento.ativo) return;

  if (!aquecimento.ultimoT) aquecimento.ultimoT = t;
  const dt = Math.min((t - aquecimento.ultimoT) / 1000, 0.05);
  aquecimento.ultimoT = t;

  aquecimento.pos += aquecimento.dir * aquecimento.velocidade * dt;

  if (aquecimento.pos >= 100) {
    aquecimento.pos = 100;
    aquecimento.dir = -1;
  } else if (aquecimento.pos <= 0) {
    aquecimento.pos = 0;
    aquecimento.dir = 1;
  }

  if (aquecimento.marcador) {
    if (aquecimento.tipo === 'mira') {
      aquecimento.marcador.style.left = aquecimento.pos + '%';
    } else {
      aquecimento.marcador.style.width = aquecimento.pos + '%';
    }
  }

  aquecimento.raf = requestAnimationFrame(animarBarra);
}

function limparAquecimento() {
  if (aquecimento.raf) {
    cancelAnimationFrame(aquecimento.raf);
    aquecimento.raf = null;
  }
  if (aquecimento.timeoutId) {
    clearTimeout(aquecimento.timeoutId);
    aquecimento.timeoutId = null;
  }
  aquecimento.ativo = false;
  aquecimento.pronto = false;
}

/* ---------- Clique no botão de ação ---------- */
function tratarAcaoAquecimento() {
  if (!aquecimento.ativo || fase !== 'aquecimento') return;

  /* --- REFLEXO --- */
  if (aquecimento.tipo === 'reflexo') {
    if (!aquecimento.pronto) {
      finalizarAquecimento(0, '❌ Antecipou o sinal! O juiz marcou queimada de largada.');
      return;
    }
    const tempo = performance.now() - aquecimento.inicioReflexo;
    const score = limitar(1 - (tempo - 250) / 900, 0, 1);
    let msg;
    if (score >= 0.9) msg = '⚡ Reflexo relâmpago!';
    else if (score >= 0.6) msg = '👏 Boa largada!';
    else if (score >= 0.3) msg = '😅 Um pouco lento, mas valeu.';
    else msg = '🐢 Reagiu devagar...';
    finalizarAquecimento(score, msg);
    return;
  }

  /* --- MIRA --- */
  if (aquecimento.tipo === 'mira') {
    const distancia = Math.abs(aquecimento.pos - 50);
    const score = limitar(1 - distancia / 30, 0, 1);
    let msg;
    if (score >= 0.9) msg = '🎯 Na mosca! Jogada perfeita!';
    else if (score >= 0.6) msg = '👏 Bom chute, quase perfeito!';
    else if (score >= 0.3) msg = '😬 Chute torto, mas a jogada continua.';
    else msg = '❌ Chutou pra fora!';
    finalizarAquecimento(score, msg);
    return;
  }

  /* --- FORÇA --- */
  if (aquecimento.tipo === 'forca') {
    const distancia = Math.abs(aquecimento.pos - 80);
    const score = limitar(1 - distancia / 25, 0, 1);
    let msg;
    if (score >= 0.9) msg = '💪 Força perfeita! Que potência!';
    else if (score >= 0.6) msg = '👏 Boa força!';
    else if (score >= 0.3) msg = '😬 Faltou força...';
    else msg = '❌ Muito fraco! A jogada saiu curta.';
    finalizarAquecimento(score, msg);
    return;
  }
}

/* ---------- Encerrar aquecimento ---------- */
function finalizarAquecimento(score, mensagem) {
  limparAquecimento();
  botaoAcao.disabled = true;

  bonusPrecisao = Math.round(score * BONUS_PRECISAO_MAX);
  bonusTempoExtra = Math.round(score * BONUS_TEMPO_SEGUNDOS);

  if (score >= 0.9) {
    stats.precisaoPerfeita++;
    Som.torcida();
    Som.acerto();
  } else if (score >= 0.4) {
    Som.tick();
  } else {
    Som.erro();
  }

  aquecimentoResultado.textContent =
    mensagem + '  •  +' + bonusPrecisao + ' precisão  •  +' + bonusTempoExtra + 's';

  setTimeout(function () {
    liberarPergunta();
  }, 850);
}

/* ============================================================
   15. LIBERAR A PERGUNTA
   ============================================================ */
function liberarPergunta() {
  fase = 'pergunta';
  travado = false;

  zonaAquecimento.classList.add('oculto');
  zonaPergunta.classList.remove('oculto');

  textoPergunta.textContent = questaoAtual.pergunta;

  botaoValida.disabled = false;
  botaoInvalida.disabled = false;
  botoesResposta.style.display = 'flex';

  iniciarTemporizador(TEMPO_BASE + bonusTempoExtra);
  atualizarCartoes();
}

/* ============================================================
   16. RESPOSTA DO JOGADOR
   ============================================================ */
function responder(respostaUsuario) {
  if (fase !== 'pergunta' || travado) return;
  travado = true;
  fase = 'feedback';
  pararTemporizador();
  pararPausa();

  const acertou = (respostaUsuario === questaoAtual.resposta);

  botaoValida.disabled = true;
  botaoInvalida.disabled = true;

  if (acertou) {
    acertos++;
    stats.acertos++;
    stats.comboAtual++;
    if (stats.comboAtual > stats.maxCombo) stats.maxCombo = stats.comboAtual;

    if (stats.porCategoria[questaoAtual.categoria]) {
      stats.porCategoria[questaoAtual.categoria].acertos++;
    }

    const bonusTempo = Math.round((tempoRestante / tempoTotal) * BONUS_TEMPO_MAX);
    const bonusCombo = stats.comboAtual >= 3 ? (stats.comboAtual - 2) * 15 : 0;
    const ganhos = PONTOS_BASE + bonusPrecisao + bonusTempo + bonusCombo;
    pontuacao += ganhos;

    Som.acerto();
    Som.torcida();

    let titulo = '🏅 GRANDE JOGADA!  +' + ganhos + ' pontos';
    if (stats.comboAtual >= 3) {
      titulo = '🔥 SEQUÊNCIA DE ' + stats.comboAtual + '!  +' + ganhos + ' pontos';
    }

    exibirFeedback('acerto', titulo, questaoAtual.explicacao);

  } else {
    energia--;
    stats.erros++;
    stats.comboAtual = 0;
    stats.vidasPerdidas++;

    Som.erro();

    exibirFeedback(
      'erro',
      '🚫 FALTA TÁTICA!  −1 energia',
      questaoAtual.explicacao
    );
  }

  atualizarHUD();
  atualizarCartoes();

  if (energia <= 0) {
    botaoProxima.style.display = 'none';
    setTimeout(finalizarJogo, 2400);
  }
}

/* ============================================================
   17. TEMPO ESGOTADO
   ============================================================ */
function tempoEsgotado() {
  if (fase !== 'pergunta' || travado) return;
  travado = true;
  fase = 'feedback';
  pararPausa();

  energia--;
  stats.erros++;
  stats.comboAtual = 0;
  stats.vidasPerdidas++;

  botaoValida.disabled = true;
  botaoInvalida.disabled = true;

  Som.erro();

  const correta = questaoAtual.resposta ? 'JOGADA VÁLIDA' : 'JOGADA INVÁLIDA';

  exibirFeedback(
    'tempo-esgotado',
    '⏰ FORA DE JOGO! O cronômetro zerou. −1 energia',
    'A resposta correta era ' + correta + '. ' + questaoAtual.explicacao
  );

  atualizarHUD();
  atualizarCartoes();

  if (energia <= 0) {
    botaoProxima.style.display = 'none';
    setTimeout(finalizarJogo, 2400);
  }
}

/* ============================================================
   18. FEEDBACK / NARRAÇÃO
   ============================================================ */
function exibirFeedback(tipo, titulo, explicacao) {
  painelFeedback.classList.remove('oculto', 'acerto', 'erro', 'tempo-esgotado');
  painelFeedback.classList.add(tipo);

  feedbackTitulo.textContent = titulo;
  feedbackExplicacao.textContent = explicacao;

  if (energia > 0) {
    if (indice < fila.length - 1) {
      botaoProxima.textContent = 'Próxima jogada ➡';
    } else {
      botaoProxima.textContent = 'Ver resultado 🏁';
    }
    botaoProxima.style.display = 'inline-block';
  } else {
    botaoProxima.style.display = 'none';
  }
}

/* ============================================================
   19. PRÓXIMA PERGUNTA
   ============================================================ */
function proximaPergunta() {
  if (fase !== 'feedback') return;
  Som.clique();
  indice++;
  if (indice >= fila.length) {
    finalizarJogo();
  } else {
    carregarQuestao();
  }
}

/* ============================================================
   20. CARTÕES TÁTICOS DO TÉCNICO
   ============================================================ */
function atualizarCartoes() {
  const podePrancheta =
    fase === 'pergunta' && !travado && cartoes.prancheta.usos > 0 && !dicaMostrada;
  const podeTempo =
    fase === 'pergunta' && !travado && cartoes.tempo.usos > 0 && !tempoPausado;
  const podeHidratacao =
    cartoes.hidratacao.usos > 0 && energia < ENERGIA_MAXIMA && energia > 0;

  cartaoPrancheta.disabled = !podePrancheta;
  cartaoTempo.disabled = !podeTempo;
  cartaoHidratacao.disabled = !podeHidratacao;

  cartaoPrancheta.querySelector('.cartao-usos').textContent = cartoes.prancheta.usos;
  cartaoTempo.querySelector('.cartao-usos').textContent = cartoes.tempo.usos;
  cartaoHidratacao.querySelector('.cartao-usos').textContent = cartoes.hidratacao.usos;

  cartaoPrancheta.querySelector('.cartao-info').childNodes[0].nodeValue = 'Dica tática • ';
  cartaoTempo.querySelector('.cartao-info').childNodes[0].nodeValue = 'Pausa 10s • ';
  cartaoHidratacao.querySelector('.cartao-info').childNodes[0].nodeValue = '+1 energia • ';
}

/* ---------- Prancheta do Técnico ---------- */
function usarPrancheta() {
  if (fase !== 'pergunta' || travado || cartoes.prancheta.usos <= 0 || dicaMostrada) return;

  cartoes.prancheta.usos--;
  dicaMostrada = true;

  dicaTexto.textContent = questaoAtual.dica;
  dicaTecnico.classList.remove('oculto');

  Som.apito();
  atualizarCartoes();
}

/* ---------- Pedido de Tempo ---------- */
function usarTimeout() {
  if (fase !== 'pergunta' || travado || cartoes.tempo.usos <= 0 || tempoPausado) return;

  cartoes.tempo.usos--;
  tempoPausado = true;

  Som.apito();

  let restante = 10;
  timeoutContador.textContent = restante;
  avisoTimeout.classList.remove('oculto');

  pararPausa();
  intervaloPausa = setInterval(function () {
    restante--;
    timeoutContador.textContent = Math.max(0, restante);
    if (restante <= 0) {
      pararPausa();
      tempoPausado = false;
      avisoTimeout.classList.add('oculto');
      atualizarCartoes();
    }
  }, 1000);

  atualizarCartoes();
}

function pararPausa() {
  if (intervaloPausa) {
    clearInterval(intervaloPausa);
    intervaloPausa = null;
  }
  avisoTimeout.classList.add('oculto');
}

/* ---------- Pausa para Hidratação ---------- */
function usarHidratacao() {
  if (cartoes.hidratacao.usos <= 0 || energia >= ENERGIA_MAXIMA || energia <= 0) return;

  cartoes.hidratacao.usos--;
  energia++;
  stats.usouHidratacao = true;

  Som.conquista();

  atualizarHUD();
  atualizarCartoes();

  if (fase === 'feedback') {
    /* nada extra */
  } else {
    aquecimentoResultado.textContent = '💧 Hidratado! +1 energia recuperada.';
  }
}

/* ============================================================
   21. FINALIZAR JOGO / VESTIÁRIO
   ============================================================ */
function finalizarJogo() {
  pararTemporizador();
  pararPausa();
  limparAquecimento();

  /* Sem localStorage: melhor pontuação vive só na sessão */
  if (pontuacao > melhorPontuacao) {
    melhorPontuacao = pontuacao;
  }

  const percentual = fila.length > 0 ? acertos / fila.length : 0;

  /* ---------- Contexto para verificar conquistas ---------- */
  const contexto = {
    percentual: percentual,
    acertos: acertos,
    erros: stats.erros,
    vidasPerdidas: stats.vidasPerdidas,
    precisaoPerfeita: stats.precisaoPerfeita,
    maxCombo: stats.maxCombo,
    usouHidratacao: stats.usouHidratacao,
    completo: function (cat) {
      const c = stats.porCategoria[cat];
      return !!c && c.total > 0 && c.acertos === c.total;
    }
  };

  /* ---------- Desbloquear itens (apenas em memória) ---------- */
  const novos = [];
  ITENS.forEach(function (item) {
    if (armario.indexOf(item.id) !== -1) return;
    let ok = false;
    try { ok = item.verifica(contexto); } catch (e) { ok = false; }
    if (ok) {
      armario.push(item.id);
      novos.push(item.id);
    }
  });

  if (novos.length > 0) {
    setTimeout(function () { Som.conquista(); }, 350);
  }

  /* ---------- Placar final ---------- */
  pontosFinais.textContent = pontuacao;
  acertosFinais.textContent = acertos;
  desafiosFinais.textContent = fila.length;
  melhorPontuacaoFim.textContent = melhorPontuacao;
  melhorPontuacaoEl.textContent = melhorPontuacao;

  /* ---------- Mensagem final ---------- */
  if (energia <= 0) {
    mensagemFim.textContent = 'Sua energia acabou! Faça uma nova pausa e volte mais forte para a Arena.';
    medalha.textContent = '💪';
  } else if (acertos === fila.length) {
    mensagemFim.textContent = 'PERFEITO! Você acertou todos os desafios e garantiu a convocação! 🎉';
    medalha.textContent = '🥇';
  } else if (percentual >= 0.75) {
    mensagemFim.textContent = 'Excelente desempenho! Você está prontíssimo para os Jogos Escolares!';
    medalha.textContent = '🏆';
  } else if (percentual >= 0.5) {
    mensagemFim.textContent = 'Bom trabalho, atleta! Continue treinando para subir no pódio.';
    medalha.textContent = '🥈';
  } else {
    mensagemFim.textContent = 'Não desanime! Cada treino te deixa mais forte. Tente novamente!';
    medalha.textContent = '🥉';
  }

  /* ---------- Vestiário ---------- */
  const totalConquistados = armario.length;
  vestiarioSub.textContent =
    'Itens conquistados: ' + totalConquistados + ' de ' + ITENS.length +
    (novos.length > 0 ? '  •  🎉 ' + novos.length + ' novo(s) nesta partida!' : '');

  renderizarArmario(armarioFim, novos);
  renderizarArmario(armarioInicio, []);

  mostrarTela(telaFim);
}

/* ============================================================
   22. RENDERIZAR ARMÁRIO
   ============================================================ */
function renderizarArmario(container, novos) {
  if (!container) return;
  container.innerHTML = '';
  const listaNovos = novos || [];

  ITENS.forEach(function (item) {
    const desbloqueado = armario.indexOf(item.id) !== -1;

    const div = document.createElement('div');
    div.className = 'armario-item ' + (desbloqueado ? 'desbloqueado' : 'bloqueado');
    if (desbloqueado && listaNovos.indexOf(item.id) !== -1) {
      div.classList.add('novo');
    }

    const icone = document.createElement('span');
    icone.className = 'armario-icone';
    icone.textContent = desbloqueado ? item.icone : '🔒';

    const nome = document.createElement('span');
    nome.className = 'armario-nome';
    nome.textContent = desbloqueado ? item.nome : '???';

    const desc = document.createElement('span');
    desc.className = 'armario-desc';
    desc.textContent = desbloqueado ? item.desc : 'Continue jogando para desbloquear';

    div.appendChild(icone);
    div.appendChild(nome);
    div.appendChild(desc);
    container.appendChild(div);
  });
}

/* ============================================================
   23. EVENTOS
   ============================================================ */
botaoComecar.addEventListener('click', function () {
  Som.clique();
  iniciarJogo();
});

botaoReiniciar.addEventListener('click', function () {
  Som.clique();
  iniciarJogo();
});

botaoProxima.addEventListener('click', proximaPergunta);

botaoValida.addEventListener('click', function () { responder(true); });
botaoInvalida.addEventListener('click', function () { responder(false); });

botaoAcao.addEventListener('click', tratarAcaoAquecimento);

cartaoPrancheta.addEventListener('click', usarPrancheta);
cartaoTempo.addEventListener('click', usarTimeout);
cartaoHidratacao.addEventListener('click', usarHidratacao);

botaoSom.addEventListener('click', function () {
  const mudo = Som.alternar();
  botaoSom.textContent = mudo ? '🔇' : '🔊';
  botaoSom.setAttribute('aria-label', mudo ? 'Ligar o som' : 'Desligar o som');
  if (!mudo) Som.clique();
});

/* ---------- Atalhos de teclado ---------- */
document.addEventListener('keydown', function (e) {
  const tecla = e.key.toLowerCase();

  /* Tela inicial */
  if (telaInicio.classList.contains('ativa')) {
    if (e.key === 'Enter') {
      e.preventDefault();
      iniciarJogo();
    }
    return;
  }

  /* Tela de jogo */
  if (telaJogo.classList.contains('ativa')) {

    /* Aquecimento */
    if (fase === 'aquecimento' && aquecimento.ativo) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        tratarAcaoAquecimento();
      }
      return;
    }

    /* Pergunta */
    if (fase === 'pergunta' && !travado) {
      if (tecla === 'v' || e.key === 'ArrowLeft' || e.key === '1') {
        e.preventDefault();
        responder(true);
      } else if (tecla === 'f' || e.key === 'ArrowRight' || e.key === '2') {
        e.preventDefault();
        responder(false);
      } else if (tecla === 'p') {
        e.preventDefault();
        usarPrancheta();
      } else if (tecla === 't') {
        e.preventDefault();
        usarTimeout();
      } else if (tecla === 'h') {
        e.preventDefault();
        usarHidratacao();
      }
      return;
    }

    /* Feedback */
    if (fase === 'feedback' && e.key === 'Enter') {
      e.preventDefault();
      if (botaoProxima.style.display !== 'none') proximaPergunta();
    }
  }
});

/* ============================================================
   24. INICIALIZAÇÃO
   ============================================================ */
(function init() {
  totalQuestoes.textContent = TOTAL_DESAFIOS;
  melhorPontuacaoEl.textContent = melhorPontuacao;
  melhorPontuacaoFim.textContent = melhorPontuacao;
  atualizarHUD();
  renderizarArmario(armarioInicio, []);
})();
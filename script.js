/* ============================================================
   BANCO DE PERGUNTAS — EDUCAÇÃO FÍSICA (6º ANO)
   Nível: intermediário a desafiador
   ============================================================ */
const PERGUNTAS = [
  {
    pergunta: "No futebol, um jogador pode receber dois cartões amarelos na mesma partida e continuar jogando.",
    resposta: false,
    explicacao: "Falso! Dois cartões amarelos na mesma partida resultam em cartão vermelho e expulsão. O jogador não pode continuar."
  },
  {
    pergunta: "No vôlei, uma equipe pode tocar na bola até três vezes antes de devolvê-la à quadra adversária.",
    resposta: true,
    explicacao: "Verdadeiro! São permitidos no máximo três toques (sem contar o bloqueio) antes de enviar a bola para o outro lado."
  },
  {
    pergunta: "No basquete, uma cesta de quadra vale 3 pontos e um arremesso de lance livre vale 1 ponto.",
    resposta: true,
    explicacao: "Verdadeiro! Cestas de dentro do garrafão valem 2 pontos, atrás da linha de 3 valem 3 pontos, e o lance livre vale 1 ponto."
  },
  {
    pergunta: "No handebol, cada equipe tem 7 jogadores em quadra, incluindo o goleiro.",
    resposta: true,
    explicacao: "Verdadeiro! O handebol é jogado com 7 jogadores por equipe em quadra (6 na linha + 1 goleiro)."
  },
  {
    pergunta: "O judô tem como objetivo principal derrubar o adversário e imobilizá-lo no chão por um tempo.",
    resposta: true,
    explicacao: "Verdadeiro! No judô, o ippon (vitória máxima) acontece com uma queda perfeita ou imobilização de 20 segundos."
  },
  {
    pergunta: "Na capoeira, os golpes são executados apenas com as mãos.",
    resposta: false,
    explicacao: "Falso! A capoeira utiliza principalmente os pés (chutes como armada, queixada, benção), além de cabeça, joelhos e cotovelos."
  },
  {
    pergunta: "O atletismo é o esporte mais antigo dos Jogos Olímpicos, presente desde a Grécia Antiga.",
    resposta: true,
    explicacao: "Verdadeiro! A corrida de estádio era a prova mais tradicional dos Jogos Olímpicos da Antiguidade, em Olímpia."
  },
  {
    pergunta: "O tempo de jogo oficial de uma partida de futsal adulto é de 2 tempos de 20 minutos cronometrados.",
    resposta: true,
    explicacao: "Verdadeiro! São 2 tempos de 20 minutos, com 10 minutos de intervalo. O cronômetro para quando a bola não está em jogo."
  },
  {
    pergunta: "A frequência cardíaca aumenta durante a prática de exercícios físicos porque o coração precisa bombear mais sangue para os músculos.",
    resposta: true,
    explicacao: "Verdadeiro! Durante o exercício, os músculos precisam de mais oxigênio e nutrientes, então o coração acelera para atender essa demanda."
  },
  {
    pergunta: "O alongamento antes do exercício previne 100% das lesões musculares.",
    resposta: false,
    explicacao: "Falso! O alongamento ajuda na flexibilidade, mas não garante prevenção total de lesões. O aquecimento dinâmico e o fortalecimento são igualmente importantes."
  },
  {
    pergunta: "No basquete, o jogador pode ficar mais de 3 segundos dentro do garrafão adversário sem a bola.",
    resposta: false,
    explicacao: "Falso! A regra dos 3 segundos proíbe que um jogador atacante permaneça mais de 3 segundos na área restritiva (garrafão) adversária."
  },
  {
    pergunta: "O xadrez é reconhecido como esporte pelo Comitê Olímpico Internacional, pois exige treino, estratégia e concentração.",
    resposta: true,
    explicacao: "Verdadeiro! O xadrez é considerado esporte mental e faz parte dos Jogos Olímpicos em algumas edições (como esporte de demonstração)."
  },
  {
    pergunta: "A ginástica artística é praticada apenas por mulheres nas Olimpíadas.",
    resposta: false,
    explicacao: "Falso! Homens também competem na ginástica artística, com aparelhos como barra fixa, cavalo com alças, argolas e salto."
  },
  {
    pergunta: "No vôlei, o líbero é um jogador especializado em defesa e não pode sacar nem atacar.",
    resposta: true,
    explicacao: "Verdadeiro! O líbero só atua na defesa, não pode sacar, atacar ou bloquear. Ele usa uniforme diferente dos demais."
  },
  {
    pergunta: "Beber água apenas quando sentir sede é suficiente para manter a hidratação durante exercícios longos.",
    resposta: false,
    explicacao: "Falso! A sede já é um sinal de desidratação leve. O ideal é beber água antes, durante e depois do exercício, mesmo sem sede."
  }
];

/* ============================================================
   CONFIGURAÇÕES DO JOGO
   ============================================================ */
const TEMPO_POR_PERGUNTA = 15;
const TOTAL_PERGUNTAS = PERGUNTAS.length;
const PONTOS_BASE = 100;
const BONUS_MAXIMO = 50;

/* ============================================================
   ESTADO DO JOGO
   ============================================================ */
let indiceAtual = 0;
let pontuacao = 0;
let vidas = 3;
let acertos = 0;
let tempoRestante = TEMPO_POR_PERGUNTA;
let intervaloTempo = null;
let travado = false;
let melhorPontuacao = Number(localStorage.getItem('melhorPontuacaoEF')) || 0;
let perguntasEmbaralhadas = [];

/* ============================================================
   REFERÊNCIAS AOS ELEMENTOS DO DOM
   ============================================================ */
const telaInicio = document.getElementById('tela-inicio');
const telaJogo = document.getElementById('tela-jogo');
const telaFim = document.getElementById('tela-fim');

const botaoComecar = document.getElementById('botao-comecar');
const botaoReiniciar = document.getElementById('botao-reiniciar');
const botaoProxima = document.getElementById('botao-proxima');

const hudVidas = document.getElementById('hud-vidas');
const numeroQuestao = document.getElementById('numero-questao');
const totalQuestoes = document.getElementById('total-questoes');
const pontuacaoEl = document.getElementById('pontuacao');

const preenchimentoTempo = document.getElementById('preenchimento-tempo');
const tempoTexto = document.getElementById('tempo-texto');

const textoPergunta = document.getElementById('texto-pergunta');
const botoesResposta = document.getElementById('botoes-resposta');
const botaoVerdadeiro = document.querySelector('.botao-verdadeiro');
const botaoFalso = document.querySelector('.botao-falso');

const painelFeedback = document.getElementById('painel-feedback');
const feedbackTitulo = document.getElementById('feedback-titulo');
const feedbackExplicacao = document.getElementById('feedback-explicacao');

const mensagemFim = document.getElementById('mensagem-fim');
const pontosFinais = document.getElementById('pontos-finais');
const acertosFinais = document.getElementById('acertos-finais');
const desafiosFinais = document.getElementById('desafios-finais');
const melhorPontuacaoEl = document.getElementById('melhor-pontuacao');
const melhorPontuacaoFim = document.getElementById('melhor-pontuacao-fim');
const medalha = document.getElementById('medalha');

/* ============================================================
   FUNÇÕES AUXILIARES
   ============================================================ */
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function mostrarTela(tela) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  tela.classList.add('ativa');
}

function atualizarHUD() {
  let coracoes = '';
  for (let i = 0; i < 3; i++) {
    coracoes += i < vidas ? '❤️' : '🖤';
  }
  hudVidas.textContent = coracoes;
  pontuacaoEl.textContent = pontuacao;
}

/* ============================================================
   TEMPORIZADOR
   ============================================================ */
function iniciarTemporizador() {
  clearInterval(intervaloTempo);
  tempoRestante = TEMPO_POR_PERGUNTA;
  atualizarBarraTempo();

  intervaloTempo = setInterval(() => {
    tempoRestante--;
    atualizarBarraTempo();

    if (tempoRestante <= 0) {
      clearInterval(intervaloTempo);
      tempoEsgotado();
    }
  }, 1000);
}

function atualizarBarraTempo() {
  const porcentagem = (tempoRestante / TEMPO_POR_PERGUNTA) * 100;
  preenchimentoTempo.style.width = porcentagem + '%';
  tempoTexto.textContent = tempoRestante + 's';

  preenchimentoTempo.classList.remove('medio', 'baixo');
  if (tempoRestante <= 5) {
    preenchimentoTempo.classList.add('baixo');
  } else if (tempoRestante <= 10) {
    preenchimentoTempo.classList.add('medio');
  }
}

/* ============================================================
   LÓGICA PRINCIPAL DO JOGO
   ============================================================ */
function iniciarJogo() {
  indiceAtual = 0;
  pontuacao = 0;
  vidas = 3;
  acertos = 0;
  travado = false;
  perguntasEmbaralhadas = embaralhar(PERGUNTAS);

  atualizarHUD();
  mostrarTela(telaJogo);
  carregarPergunta();
}

function carregarPergunta() {
  if (indiceAtual >= TOTAL_PERGUNTAS) {
    finalizarJogo();
    return;
  }

  travado = false;
  const perguntaAtual = perguntasEmbaralhadas[indiceAtual];

  numeroQuestao.textContent = indiceAtual + 1;
  textoPergunta.textContent = perguntaAtual.pergunta;

  painelFeedback.classList.add('oculto');
  painelFeedback.classList.remove('acerto', 'erro', 'tempo-esgotado');
  botaoVerdadeiro.disabled = false;
  botaoFalso.disabled = false;
  botoesResposta.style.display = 'flex';

  iniciarTemporizador();
}

/* ============================================================
   VERIFICAÇÃO DE RESPOSTA
   ============================================================ */
function verificarResposta(respostaUsuario) {
  if (travado) return;
  travado = true;
  clearInterval(intervaloTempo);

  const perguntaAtual = perguntasEmbaralhadas[indiceAtual];
  const acertou = respostaUsuario === perguntaAtual.resposta;

  botaoVerdadeiro.disabled = true;
  botaoFalso.disabled = true;

  if (acertou) {
    acertos++;
    const bonus = Math.round((tempoRestante / TEMPO_POR_PERGUNTA) * BONUS_MAXIMO);
    const pontosGanhos = PONTOS_BASE + bonus;
    pontuacao += pontosGanhos;

    exibirFeedback(
      'acerto',
      `✅ Acertou! +${pontosGanhos} pontos`,
      perguntaAtual.explicacao
    );
  } else {
    vidas--;
    exibirFeedback(
      'erro',
      '❌ Errou! -1 vida',
      perguntaAtual.explicacao
    );
  }

  atualizarHUD();

  if (vidas <= 0) {
    botaoProxima.style.display = 'none';
    setTimeout(finalizarJogo, 2200);
  }
}

/* ============================================================
   TEMPO ESGOTADO
   ============================================================ */
function tempoEsgotado() {
  if (travado) return;
  travado = true;

  const perguntaAtual = perguntasEmbaralhadas[indiceAtual];
  vidas--;

  botaoVerdadeiro.disabled = true;
  botaoFalso.disabled = true;

  exibirFeedback(
    'tempo-esgotado',
    '⏰ Tempo esgotado! -1 vida',
    `A resposta correta era: ${perguntaAtual.resposta ? 'VERDADEIRO' : 'FALSO'}. ${perguntaAtual.explicacao}`
  );

  atualizarHUD();

  if (vidas <= 0) {
    botaoProxima.style.display = 'none';
    setTimeout(finalizarJogo, 2200);
  }
}

/* ============================================================
   FEEDBACK VISUAL
   ============================================================ */
function exibirFeedback(tipo, titulo, explicacao) {
  painelFeedback.classList.remove('oculto', 'acerto', 'erro', 'tempo-esgotado');
  painelFeedback.classList.add(tipo);
  feedbackTitulo.textContent = titulo;
  feedbackExplicacao.textContent = explicacao;

  botoesResposta.style.display = 'none';

  if (vidas > 0) {
    if (indiceAtual < TOTAL_PERGUNTAS - 1) {
      botaoProxima.textContent = 'Próxima ➡';
    } else {
      botaoProxima.textContent = 'Ver resultado 🏁';
    }
    botaoProxima.style.display = 'inline-block';
  }
}

/* ============================================================
   AVANÇAR PARA A PRÓXIMA PERGUNTA
   ============================================================ */
function proximaPergunta() {
  indiceAtual++;
  if (indiceAtual >= TOTAL_PERGUNTAS) {
    finalizarJogo();
  } else {
    carregarPergunta();
  }
}

/* ============================================================
   FINALIZAR JOGO
   ============================================================ */
function finalizarJogo() {
  clearInterval(intervaloTempo);

  if (pontuacao > melhorPontuacao) {
    melhorPontuacao = pontuacao;
    localStorage.setItem('melhorPontuacaoEF', melhorPontuacao);
  }

  pontosFinais.textContent = pontuacao;
  acertosFinais.textContent = acertos;
  desafiosFinais.textContent = TOTAL_PERGUNTAS;
  melhorPontuacaoFim.textContent = melhorPontuacao;
  melhorPontuacaoEl.textContent = melhorPontuacao;

  if (vidas <= 0) {
    mensagemFim.textContent = 'Suas vidas acabaram! Tente novamente para melhorar.';
    medalha.textContent = '💪';
  } else if (acertos === TOTAL_PERGUNTAS) {
    mensagemFim.textContent = 'PERFEITO! Você acertou tudo! 🎉';
    medalha.textContent = '🥇';
  } else if (acertos >= TOTAL_PERGUNTAS * 0.75) {
    mensagemFim.textContent = 'Excelente desempenho! Você é fera em Educação Física!';
    medalha.textContent = '🏆';
  } else if (acertos >= TOTAL_PERGUNTAS * 0.5) {
    mensagemFim.textContent = 'Bom trabalho! Continue praticando para melhorar ainda mais.';
    medalha.textContent = '🥈';
  } else {
    mensagemFim.textContent = 'Não desanime! Cada tentativa te deixa mais forte.';
    medalha.textContent = '🥉';
  }

  mostrarTela(telaFim);
}

/* ============================================================
   EVENTOS DE CLIQUE
   ============================================================ */
botaoComecar.addEventListener('click', iniciarJogo);
botaoReiniciar.addEventListener('click', iniciarJogo);
botaoProxima.addEventListener('click', proximaPergunta);

botaoVerdadeiro.addEventListener('click', () => verificarResposta(true));
botaoFalso.addEventListener('click', () => verificarResposta(false));

/* ============================================================
   ATALHOS DE TECLADO
   ============================================================ */
document.addEventListener('keydown', (e) => {
  if (telaJogo.classList.contains('ativa') && !travado) {
    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'v') {
      verificarResposta(true);
    } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'f') {
      verificarResposta(false);
    }
  } else if (telaJogo.classList.contains('ativa') && travado) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (botaoProxima.style.display !== 'none') {
        proximaPergunta();
      }
    }
  } else if (telaInicio.classList.contains('ativa')) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      iniciarJogo();
    }
  }
});

/* ============================================================
   INICIALIZAÇÃO INICIAL
   ============================================================ */
totalQuestoes.textContent = TOTAL_PERGUNTAS;
melhorPontuacaoEl.textContent = melhorPontuacao;
const caseData = {
  facts: [
    {
      title: 'Narrativa principal',
      text: 'Admissão em 02/2015 como auxiliar de produção em frigorífico, com corte e desossa manual repetitiva, em câmara fria e jornada de 8h.'
    },
    {
      title: 'Condição pré-existente',
      text: 'A própria petição afirma osteoartrose em joelhos desde 2013, anterior à contratação.'
    },
    {
      title: 'Diagnósticos alegados',
      text: 'CID M75.1 para ombro e G56.0 para síndrome do túnel do carpo bilateral, com piora a partir de 2020.'
    },
    {
      title: 'Documento disponível',
      text: 'Há apenas uma ressonância de ombro direito sem data visível, descrevendo tendinopatia leve e sem referência a punho.'
    },
    {
      title: 'Afastamento previdenciário',
      text: 'Benefício B31 de 03/2021 a 11/2021, com alta do INSS por aptidão ao trabalho.'
    },
    {
      title: 'Versões conflitantes',
      text: 'A reclamante diz que não retomou efetivamente as funções até a rescisão em 06/2022, enquanto a empresa afirma trabalho normal até o desligamento.'
    }
  ],
  findings: [
    {
      severity: 'high',
      tag: 'Alta prioridade',
      title: 'Falta de suporte documental para o túnel do carpo',
      text: 'A inicial menciona G56.0 bilateral, mas não há exame de punho, laudo, data de início ou prova objetiva que sustente esse ponto no material anexado.'
    },
    {
      severity: 'high',
      tag: 'Alta prioridade',
      title: 'Divergência entre afastamento e continuidade laboral',
      text: 'O benefício B31 termina com alta apta pelo INSS, mas a narrativa afirma afastamento informal até 06/2022, o que exige cronologia clara e prova de impedimento funcional.'
    },
    {
      severity: 'medium',
      tag: 'Média prioridade',
      title: 'Exame incompleto para sustentar a tese',
      text: 'A ressonância sem data visível enfraquece a linha do tempo e, além disso, descreve apenas tendinopatia leve no ombro direito, sem dialogar com os dois quadros narrados.'
    },
    {
      severity: 'medium',
      tag: 'Média prioridade',
      title: 'Condição pré-existente exige leitura causal mais fina',
      text: 'A osteoartrose anterior à contratação não invalida a tese, mas torna necessário separar doença prévia, eventual agravamento e nexo ocupacional.'
    },
    {
      severity: 'low',
      tag: 'Baixa prioridade',
      title: 'Ausência de CAT não encerra a análise',
      text: 'A falta de CAT é um dado relevante, mas não substitui a análise de coerência entre sintomas, documentos, afastamentos e história ocupacional.'
    }
  ],
  questions: [
    {
      title: 'Cronologia',
      text: 'Quais eventos têm data certa: início dos sintomas, exames, afastamento, alta do INSS e última presença no posto de trabalho?'
    },
    {
      title: 'Prova médica',
      text: 'Existe algum exame ou atestado para punho, ombro ou joelhos fora da petição inicial?'
    },
    {
      title: 'Capacidade laboral',
      text: 'A alta do INSS foi acompanhada de nova avaliação médica, retorno formal ou registro interno de restrição de função?'
    },
    {
      title: 'Nexo ocupacional',
      text: 'Os movimentos descritos na função explicam o agravamento alegado ou a tese depende de complementação técnica?'
    }
  ],
  timeline: [
    {
      date: '2013',
      title: 'Condição anterior à contratação',
      text: 'A petição informa osteoartrose em joelhos já existente antes do vínculo.'
    },
    {
      date: '02/2015',
      title: 'Admissão na empresa',
      text: 'Início do contrato como auxiliar de produção em frigorífico, com atividades repetitivas e ambiente frio.'
    },
    {
      date: '2020',
      title: 'Piora e novos sintomas alegados',
      text: 'A narrativa indica agravamento e aparecimento de tendinopatia em ombros e túnel do carpo bilateral.'
    },
    {
      date: '03/2021 a 11/2021',
      title: 'Afastamento previdenciário',
      text: 'Benefício B31 com alta ao final do período por aptidão reconhecida pelo INSS.'
    },
    {
      date: '06/2022',
      title: 'Rescisão do contrato',
      text: 'A autora afirma afastamento informal até a rescisão, enquanto a defesa sustenta trabalho normal até a saída.'
    }
  ],
  evidence: [
    {
      status: 'present',
      title: 'Admissão e função descritas',
      text: 'Há narrativa consistente sobre cargo, rotina e ambiente de trabalho.'
    },
    {
      status: 'contradiction',
      title: 'Alta apta versus afastamento informal',
      text: 'O fim do B31 indica aptidão, mas a tese aponta continuidade de impedimento laboral.'
    },
    {
      status: 'gap',
      title: 'Exame sem data visível',
      text: 'A ressonância não permite fechar a linha do tempo com segurança.'
    },
    {
      status: 'gap',
      title: 'Sem exame para punho',
      text: 'Não há documento objetivo para o diagnóstico de túnel do carpo.'
    },
    {
      status: 'present',
      title: 'Condição preexistente informada',
      text: 'A osteoartrose anterior ao vínculo exige análise de agravamento e nexo.'
    }
  ]
};

const promptTemplate = `Você é um assistente de triagem para perícias médicas trabalhistas.

Sua tarefa é ler o texto bruto de um caso e produzir um resumo objetivo, sem inventar fatos.

Instruções:
1. Separe claramente o que é alegação, o que está documentado e o que está ausente.
2. Encontre divergências entre narrativa, exames, afastamentos e defesa da empresa.
3. Aponte lacunas de informação que podem alterar a conclusão pericial.
4. Priorize os pontos mais críticos para revisão humana.
5. Se houver datas ausentes ou provas fracas, diga isso explicitamente.

Formato de saída:
- Resumo em 5 linhas no máximo.
- Lista de inconsistências priorizadas.
- Lista de informações faltantes.
- 3 a 5 perguntas para checagem humana.

Texto bruto do caso:
{{caso}}`;

const opinionTemplate = `Parecer preliminar:\nO caso deve ser tratado como uma triagem de consistência documental, não como conclusão pericial.\nHá alegação de doença ocupacional ou agravamento de quadro pré-existente, mas o material disponível mostra lacunas relevantes de prova, principalmente para o diagnóstico de túnel do carpo e para a cronologia do afastamento.\nO ponto mais sensível é a divergência entre a alta do INSS e a afirmação de afastamento informal até a rescisão.\nTambém há fragilidade no exame anexado, pois falta a data visível e ele não cobre todo o conjunto de diagnósticos alegados.\n\nConclusão operacional:\no caso pede revisão humana focada em cronologia, documentação médica e nexo causal, antes de qualquer posição mais firme.`;

const sampleCaseText = `A Reclamante, admitida em 02/2015 na função de auxiliar de produção em frigorífico, exercia atividades de corte e desossa manual repetitiva, em ambiente com temperatura controlada (câmara fria), por jornadas de 8h diárias. Refere que já era portadora de osteoartrose em joelhos desde 2013 (anterior à contratação), mas que o esforço repetitivo e a postura exigida pela função agravaram significativamente o quadro, levando ao desenvolvimento de tendinopatia em ombros e síndrome do túnel do carpo bilateral a partir de 2020. A petição inicial menciona diagnóstico de CID M75.1 (síndrome do manguito rotador) e G56.0 (síndrome do túnel do carpo), mas o único exame de imagem anexado ao processo — uma ressonância magnética de ombro direito — não possui data visível e aponta apenas 'tendinopatia leve', sem qualquer menção ao punho. A Reclamante recebeu auxílio-doença previdenciário (B31) de 03/2021 a 11/2021, tendo sido dada alta pelo INSS nessa data por considerá-la apta ao trabalho; no entanto, alega que não conseguiu retomar efetivamente suas funções, permanecendo afastada informalmente até a rescisão do contrato em 06/2022. Não há CAT (Comunicação de Acidente de Trabalho) registrada nos autos. A empresa, em sua defesa, sustenta que a Reclamante sempre exerceu suas funções normalmente até o dia do desligamento, sem nunca ter apresentado atestados ou relatado sintomas ao setor de SESMT.`;

function buildPrompt(caseText) {
  return promptTemplate.replace('{{caso}}', caseText.trim());
}

function normalizeCaseText(text) {
  return text.trim().replace(/\s+/g, ' ');
}

function getPromptElements() {
  return {
    rawCaseText: document.getElementById('rawCaseText'),
    generatedPrompt: document.getElementById('generatedPrompt'),
    buildButton: document.getElementById('buildPromptButton'),
    buildOpinionButton: document.getElementById('buildOpinionButton'),
    copyPromptButton: document.getElementById('copyPromptButton'),
    copyOpinionButton: document.getElementById('copyOpinionButton'),
    downloadReportButton: document.getElementById('downloadReportButton'),
    printReportButton: document.getElementById('printReportButton')
  };
}

async function copyPromptText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const fallbackField = document.createElement('textarea');
  fallbackField.value = text;
  fallbackField.style.position = 'fixed';
  fallbackField.style.opacity = '0';
  document.body.appendChild(fallbackField);
  fallbackField.focus();
  fallbackField.select();
  document.execCommand('copy');
  document.body.removeChild(fallbackField);
}

function renderFacts() {
  const container = document.getElementById('factBlocks');
  container.innerHTML = caseData.facts
    .map(
      (fact) => `
        <section class="fact-block">
          <h3>${fact.title}</h3>
          <p>${fact.text}</p>
        </section>
      `
    )
    .join('');
}

function renderFindings() {
  const container = document.getElementById('findingList');
  container.innerHTML = caseData.findings
    .map(
      (finding) => `
        <section class="finding-card ${finding.severity}">
          <span class="tag ${finding.severity}">${finding.tag}</span>
          <div class="finding-title">${finding.title}</div>
          <div class="finding-text">${finding.text}</div>
        </section>
      `
    )
    .join('');
}

function renderQuestions() {
  const container = document.getElementById('questionList');
  container.innerHTML = caseData.questions
    .map(
      (question) => `
        <section class="fact-block">
          <h3 class="question-title">${question.title}</h3>
          <p class="question-text">${question.text}</p>
        </section>
      `
    )
    .join('');
}

function renderTimeline() {
  const container = document.getElementById('timelineList');
  container.innerHTML = caseData.timeline
    .map(
      (item) => `
        <section class="timeline-item">
          <span class="timeline-date">${item.date}</span>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-text">${item.text}</p>
        </section>
      `
    )
    .join('');
}

function renderEvidenceGrid() {
  const container = document.getElementById('evidenceGrid');
  container.innerHTML = caseData.evidence
    .map(
      (item) => `
        <section class="evidence-card" data-status="${item.status}">
          <span class="evidence-status">${item.status === 'present' ? 'Documento presente' : item.status === 'gap' ? 'Lacuna' : 'Contradição'}</span>
          <h3 class="evidence-title">${item.title}</h3>
          <p class="evidence-text">${item.text}</p>
        </section>
      `
    )
    .join('');
}

function updateMetrics() {
  const evidenceCount = caseData.facts.length;
  const gapCount = caseData.evidence.filter((item) => item.status !== 'present').length;
  const riskScore = caseData.findings.reduce((score, finding) => {
    if (finding.severity === 'high') return score + 3;
    if (finding.severity === 'medium') return score + 2;
    return score + 1;
  }, 0);

  document.getElementById('evidenceCount').textContent = String(evidenceCount);
  document.getElementById('gapCount').textContent = String(gapCount);
  document.getElementById('riskScore').textContent = String(riskScore);
}

function renderOpinion() {
  document.getElementById('mainThesis').textContent = 'A discussão central envolve possível doença ocupacional ou agravamento de condição pré-existente, com prova documental incompleta para fechar a cronologia e o nexo.';
  document.getElementById('mainRisk').textContent = 'Risco alto de inconsistência por divergência entre alta do INSS, afastamento informal alegado, ausência de exame de punho e exame de imagem sem data.';
  document.getElementById('preliminaryOpinion').textContent = opinionTemplate;
}

function getReportText() {
  return [
    'JusMed Triage - Relatório preliminar',
    '',
    'Resumo do caso:',
    normalizeCaseText(sampleCaseText),
    '',
    'Parecer preliminar:',
    opinionTemplate,
    '',
    'Principais inconsistências:',
    ...caseData.findings.map((finding) => `- ${finding.title}: ${finding.text}`),
    '',
    'Linha do tempo:',
    ...caseData.timeline.map((item) => `- ${item.date} | ${item.title}: ${item.text}`),
    '',
    'Evidências x lacunas:',
    ...caseData.evidence.map((item) => `- ${item.title}: ${item.text}`)
  ].join('\n');
}

function downloadReport() {
  const blob = new Blob([getReportText()], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'jusmed-triage-relatorio.txt';
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function initializePromptTool() {
  const {
    rawCaseText,
    generatedPrompt,
    buildButton,
    buildOpinionButton,
    copyPromptButton,
    copyOpinionButton,
    downloadReportButton,
    printReportButton
  } = getPromptElements();
  rawCaseText.value = sampleCaseText;
  generatedPrompt.value = buildPrompt(sampleCaseText);

  buildButton.addEventListener('click', () => {
    generatedPrompt.value = buildPrompt(rawCaseText.value);
  });

  buildOpinionButton.addEventListener('click', () => {
    renderOpinion();
  });

  copyPromptButton.addEventListener('click', async () => {
    await copyPromptText(generatedPrompt.value);
    copyPromptButton.textContent = 'Copiado';
    window.setTimeout(() => {
      copyPromptButton.textContent = 'Copiar prompt';
    }, 1400);
  });

  copyOpinionButton.addEventListener('click', async () => {
    await copyPromptText(getReportText());
    copyOpinionButton.textContent = 'Copiado';
    window.setTimeout(() => {
      copyOpinionButton.textContent = 'Copiar parecer';
    }, 1400);
  });

  downloadReportButton.addEventListener('click', downloadReport);

  printReportButton.addEventListener('click', () => {
    window.print();
  });

  renderOpinion();
}

renderTimeline();
renderEvidenceGrid();
renderFacts();
renderFindings();
renderQuestions();
updateMetrics();
initializePromptTool();

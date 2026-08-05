# JusMed Triage

Protótipo simples de uma mini ferramenta para triagem documental em perícias médicas trabalhistas.

## Problema escolhido

Este protótipo foca em um ponto específico do caso: divergências e lacunas entre o que é alegado na petição e o que está efetivamente documentado.

Exemplos que a interface destaca:
- benefício B31 com alta apta pelo INSS versus alegação de afastamento informal prolongado;
- diagnóstico de túnel do carpo sem exame de punho anexado;
- exame de imagem sem data visível;
- condição pré-existente que exige análise de agravamento e nexo.

## Como ver

Abra o arquivo `index.html` no navegador.

## Ideia de uso

A proposta é reduzir o tempo de leitura manual inicial e entregar à equipe:
- um resumo estruturado;
- pontos de atenção priorizados;
- perguntas objetivas para checagem humana.

O protótipo também inclui um gerador de prompt para IA. Ele transforma o caso bruto em uma instrução padronizada para pedir:
- resumo curto;
- inconsistências;
- lacunas documentais;
- perguntas de validação.

## Limitação

Este protótipo não faz OCR, NLP nem integrações com sistemas jurídicos. Ele mostra a lógica de triagem; uma versão mais completa poderia extrair os fatos automaticamente de PDFs e documentos anexos.

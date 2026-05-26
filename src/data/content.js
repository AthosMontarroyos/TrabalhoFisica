export const certs = [
  {
    icon: '★',
    name: 'MIL-PRF / MIL-SPEC',
    full: 'Military Performance Specification (EUA)',
    color: '#B18B9A',
    desc: 'Padrão mais rigoroso existente. Exige testes de vibração, choque mecânico, variação extrema de temperatura (−55°C a +125°C), umidade e altitude. Usado em defesa e aeroespacial.',
    scope: ['Militar', 'Aeroespacial', 'Alta Confiabilidade']
  },
  {
    icon: '◈',
    name: 'AEC-Q100 / Q101',
    full: 'Automotive Electronics Council — ICs e discretos',
    color: '#7C677A',
    desc: 'Qualificação obrigatória para componentes automotivos. Q100 cobre circuitos integrados; Q101 cobre discretos (diodos, transistores). Define graus de temperatura A, B, C, D.',
    scope: ['Automotivo', 'ICs', 'Discretos']
  },
  {
    icon: '⬡',
    name: 'IEC 60068',
    full: 'International Electrotechnical Commission',
    color: '#574963',
    desc: 'Norma internacional de ensaios ambientais. Define métodos padronizados para temperatura, umidade, vibração e impacto. Base para outras certificações setoriais.',
    scope: ['Industrial', 'Testes Ambientais', 'Global']
  },
  {
    icon: '◎',
    name: 'ISO 9001',
    full: 'Sistema de Gestão da Qualidade',
    color: '#B18B9A',
    desc: 'Certifica o sistema de gestão do fabricante, não o componente em si. Garante que processos de produção são controlados, rastreáveis e auditáveis.',
    scope: ['Fabricante', 'Processo', 'Rastreabilidade']
  },
  {
    icon: '♦',
    name: 'IATF 16949',
    full: 'Norma automotiva de gestão (substitui TS 16949)',
    color: '#7C677A',
    desc: 'Extensão da ISO 9001 para o setor automotivo. Exige controle estatístico de processo (CEP), FMEA, e planos de controle de qualidade específicos.',
    scope: ['Automotivo', 'Gestão', 'FMEA']
  },
  {
    icon: '◇',
    name: 'ABNT NBR / INMETRO',
    full: 'Normas Brasileiras — Conformidade Nacional',
    color: '#6E546C',
    desc: 'No Brasil, componentes para uso em equipamentos homologados pela ANATEL ou regulados pela ANVISA seguem normas ABNT com compulsória certificação INMETRO.',
    scope: ['Brasil', 'ANATEL', 'Regulatório']
  },
]

export const steps = [
  { title: 'Especificação de Requisitos',       body: 'Define quais normas se aplicam (setor, ambiente de uso, temperatura de operação). Seleciona-se o grau de qualificação alvo — comercial, industrial, automotivo ou militar.' },
  { title: 'Seleção de Amostras e Lote',        body: 'Componentes são retirados do lote de produção seguindo amostragem estatística. Rastreabilidade de lote (lot traceability) é documentada integralmente.' },
  { title: 'Ensaios de Estresse',               body: 'Testes destrutivos e não-destrutivos: ciclo de temperatura, burn-in (operação em estresse térmico acelerado), HAST (umidade + temperatura + pressão), vibração e impacto.' },
  { title: 'Análise de Falha (FA)',             body: 'Amostras reprovadas passam por Failure Analysis — SEM (microscopia eletrônica), análise química e delineação de falha interna para identificar causa raiz.' },
  { title: 'Documentação e Relatório de Qualificação', body: 'Emissão do Qualification Report (QR) ou Certificate of Conformance (CoC). Documento auditável que comprova a conformidade do componente com a norma aplicada.' },
  { title: 'Monitoramento Contínuo (PPAP / AQL)', body: 'Em produção seriada: Acceptable Quality Level (AQL) define o percentual máximo de defeitos por lote. PPAP (automotivo) exige requalificação a cada mudança de processo.' },
]

export const team = [
  { name: 'Laisa',  role: 'Líder',          color: '#FFE0E6' },
  { name: 'Athos',  role: 'Design / Dev',    color: '#B18B9A' },
  { name: 'Johann', role: 'Suporte Design',  color: '#7C677A' },
  { name: 'Júlio',  role: 'Apresentação',    color: '#574963' },
  { name: 'Kayo',   role: 'Pesquisa',        color: '#B18B9A' },
  { name: 'Eder',   role: 'Pesquisa',        color: '#6E546C' },
  { name: 'Bruna',  role: 'Pesquisa',        color: '#7C677A' },
]

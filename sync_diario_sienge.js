/**
 * Sincronizador Diário: Control iD (RHiD API) + Sienge ERP API
 * Centro de Custo / Obra Piloto: 24.152 - GUARNIERI_CORDEBRAS - CAMAÇARI, BA (REP #6)
 *
 * Atualiza os apontamentos mensais até a data atual e recalcula a simulação
 * de apropriação de Hora-Homem (HH) no Sienge ERP.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const RHID_USER = 'rh3@omnitradebrasil.com';
const RHID_PASS = 'Omni@123';
const SIENGE_AUTH = Buffer.from('omnitrade-claudioguidi:XjPFBTCjVJ09bKA5se2C69xrIf5fEnx7').toString('base64');

// Grupo Piloto Principal (8 Colaboradores - Equipe José Tavares)
const GRUPO_PILOTO_IDS = [355, 412, 448, 616, 310, 695, 708, 735];

// Equipe Complementar que também bate ponto no REP #6 de Camaçari (Equipe Helder Borges)
const EQUIPE_COMPLEMENTAR_IDS = [325, 469, 579, 295, 727, 744, 748];

// Mapeamento de Cargos e Grupos de Valores — Premissa Oficial de Cálculo (MOD, MOI e SG&A)
const PREMISSA_FATORES_ROL = {
  sga: { classificacao: 'SG&A', fatorPct: 12.50, comentario: 'Receita Operacional Líquida (ROL)' },
  moi: { classificacao: 'MOI', fatorPct: 5.00, comentario: 'Receita Operacional Líquida (ROL)' }
};

const TABELA_OFICIAL_MOD_HH = [
  { codigo: 'MOD-ESP', classificacao: 'MOD', departamento: 'Obras', cargo: 'Especialista', valorHH: 90.00, equivalente220h: 19800.00, ativoNaObra: false },
  { codigo: 'G1', key: 'G1_ENCARREGADO', classificacao: 'MOD', departamento: 'Obras', cargo: 'Encarregado', valorHH: 75.00, equivalente220h: 16500.00, ativoNaObra: true },
  { codigo: 'G2', key: 'G2_LIDER', classificacao: 'MOD', departamento: 'Obras', cargo: 'Líder', valorHH: 45.00, equivalente220h: 9900.00, ativoNaObra: true },
  { codigo: 'G3', key: 'G3_MONTADOR', classificacao: 'MOD', departamento: 'Obras', cargo: 'Montador', valorHH: 35.00, equivalente220h: 7700.00, ativoNaObra: true },
  { codigo: 'G4', key: 'G4_AJUDANTE', classificacao: 'MOD', departamento: 'Obras', cargo: 'Ajudante', valorHH: 25.00, equivalente220h: 5500.00, ativoNaObra: true },
  { codigo: 'MOD-ANA', classificacao: 'MOD', departamento: 'Obras', cargo: 'Analista', valorHH: 40.00, equivalente220h: 8800.00, ativoNaObra: false },
  { codigo: 'MOD-PRJ', classificacao: 'MOD', departamento: 'Projetos', cargo: 'Geral', valorHH: 50.00, equivalente220h: 11000.00, ativoNaObra: false },
  { codigo: 'MOD-EXO', classificacao: 'MOD', departamento: 'Excelência Operacional', cargo: 'Geral', valorHH: 70.00, equivalente220h: 15400.00, ativoNaObra: false }
];

const CARGOS_OVERRIDE = {
  355: { cargo: 'ENCARREGADO DE OBRAS', cargoPremissa: 'Encarregado', departamentoPremissa: 'Obras', grupoValor: 'G1_ENCARREGADO', matricula: '154', equipe: 'Equipe José Tavares (Piloto)' },
  412: { cargo: 'LIDER DE OBRAS', cargoPremissa: 'Líder', departamentoPremissa: 'Obras', grupoValor: 'G2_LIDER', matricula: '198', equipe: 'Equipe José Tavares (Piloto)' },
  448: { cargo: 'LIDER DE OBRAS', cargoPremissa: 'Líder', departamentoPremissa: 'Obras', grupoValor: 'G2_LIDER', matricula: '1069', equipe: 'Equipe José Tavares (Piloto)' },
  616: { cargo: 'MONTADOR', cargoPremissa: 'Montador', departamentoPremissa: 'Obras', grupoValor: 'G3_MONTADOR', matricula: '1252', equipe: 'Equipe José Tavares (Piloto)' },
  310: { cargo: 'MONTADOR', cargoPremissa: 'Montador', departamentoPremissa: 'Obras', grupoValor: 'G3_MONTADOR', matricula: '1277', equipe: 'Equipe José Tavares (Piloto)' },
  695: { cargo: 'AJUDANTE', cargoPremissa: 'Ajudante', departamentoPremissa: 'Obras', grupoValor: 'G4_AJUDANTE', matricula: '1341', equipe: 'Equipe José Tavares (Piloto)' },
  708: { cargo: 'MOTORISTA OP. DE GUINDAUTO', cargoPremissa: 'Montador', departamentoPremissa: 'Obras', grupoValor: 'G3_MONTADOR', matricula: '1348', equipe: 'Equipe José Tavares (Piloto)' },
  735: { cargo: 'AJUDANTE', cargoPremissa: 'Ajudante', departamentoPremissa: 'Obras', grupoValor: 'G4_AJUDANTE', matricula: '1386', equipe: 'Equipe José Tavares (Piloto)' },
  // Equipe complementar no REP #6
  325: { cargo: 'ENCARREGADO DE OBRAS', cargoPremissa: 'Encarregado', departamentoPremissa: 'Obras', grupoValor: 'G1_ENCARREGADO', matricula: '1284', equipe: 'Equipe Helder Borges (REP #6)' },
  469: { cargo: 'MONTADOR', cargoPremissa: 'Montador', departamentoPremissa: 'Obras', grupoValor: 'G3_MONTADOR', matricula: '1105', equipe: 'Equipe Helder Borges (REP #6)' },
  579: { cargo: 'MONTADOR', cargoPremissa: 'Montador', departamentoPremissa: 'Obras', grupoValor: 'G3_MONTADOR', matricula: '1215', equipe: 'Equipe Helder Borges (REP #6)' },
  295: { cargo: 'LIDER DE OBRAS', cargoPremissa: 'Líder', departamentoPremissa: 'Obras', grupoValor: 'G2_LIDER', matricula: '1262', equipe: 'Equipe Helder Borges (REP #6)' },
  727: { cargo: 'AJUDANTE', cargoPremissa: 'Ajudante', departamentoPremissa: 'Obras', grupoValor: 'G4_AJUDANTE', matricula: '1374', equipe: 'Equipe Helder Borges (REP #6)' },
  744: { cargo: 'AJUDANTE', cargoPremissa: 'Ajudante', departamentoPremissa: 'Obras', grupoValor: 'G4_AJUDANTE', matricula: '1395', equipe: 'Equipe Helder Borges (REP #6)' },
  748: { cargo: 'MONTADOR', cargoPremissa: 'Montador', departamentoPremissa: 'Obras', grupoValor: 'G3_MONTADOR', matricula: '1399', equipe: 'Equipe Helder Borges (REP #6)' }
};

const TABELA_GRUPOS_VALORES = {
  G1_ENCARREGADO: {
    codigo: 'G1',
    classificacao: 'MOD',
    departamento: 'Obras',
    cargoPremissa: 'Encarregado',
    nome: 'MOD • Obras — Encarregado',
    custoMensalComEncargos: 16500.00,
    horasBaseMes: 220,
    valorHH: 75.00
  },
  G2_LIDER: {
    codigo: 'G2',
    classificacao: 'MOD',
    departamento: 'Obras',
    cargoPremissa: 'Líder',
    nome: 'MOD • Obras — Líder',
    custoMensalComEncargos: 9900.00,
    horasBaseMes: 220,
    valorHH: 45.00
  },
  G3_MONTADOR: {
    codigo: 'G3',
    classificacao: 'MOD',
    departamento: 'Obras',
    cargoPremissa: 'Montador',
    nome: 'MOD • Obras — Montador / Guindauto',
    custoMensalComEncargos: 7700.00,
    horasBaseMes: 220,
    valorHH: 35.00
  },
  G4_AJUDANTE: {
    codigo: 'G4',
    classificacao: 'MOD',
    departamento: 'Obras',
    cargoPremissa: 'Ajudante',
    nome: 'MOD • Obras — Ajudante',
    custoMensalComEncargos: 5500.00,
    horasBaseMes: 220,
    valorHH: 25.00
  }
};

function reqRhid(method, endpoint, token, body) {
  return new Promise((resolve, reject) => {
    const bodyStr = body ? JSON.stringify(body) : '';
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = 'Bearer ' + token;
    if (bodyStr) headers['Content-Length'] = Buffer.byteLength(bodyStr);
    const req = https.request({
      hostname: 'www.rhid.com.br',
      path: '/v2/api.svc' + endpoint,
      method,
      headers,
      timeout: 20000
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { resolve(data); }
      });
    });
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

function getSienge(endpoint) {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'api.sienge.com.br',
      path: '/omnitrade/public/api/v1' + endpoint,
      method: 'GET',
      headers: { 'Authorization': 'Basic ' + SIENGE_AUTH, 'Accept': 'application/json' },
      timeout: 20000
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch (e) { resolve({ status: res.statusCode, body: null }); }
      });
    });
    req.on('error', e => resolve({ status: 500, error: e.message }));
    req.end();
  });
}

function formatMinToHHMM(min) {
  const m = Math.round(Number(min) || 0);
  const h = Math.floor(m / 60);
  const r = Math.abs(m % 60);
  return `${String(h).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
}

async function runSync() {
  console.log('[Sync Diário] Iniciando sincronização Control iD (RHiD) + Sienge ERP...');
  const now = new Date();
  const dataIni = '2026-10-01';
  const dataFim = now.toISOString().slice(0, 10);

  // 1. Login no RHiD
  const login = await reqRhid('POST', '/login', null, { email: RHID_USER, password: RHID_PASS });
  const token = login.accessToken;
  if (!token) throw new Error('Falha ao autenticar na API do Control iD (RHiD).');

  const funcsAll = JSON.parse(fs.readFileSync(path.join(__dirname, 'funcionarios_all.json'), 'utf8'));
  const allIds = [...GRUPO_PILOTO_IDS, ...EQUIPE_COMPLEMENTAR_IDS];

  const colaboradores = [];

  for (const id of allIds) {
    const cad = funcsAll.find(f => f.id === id) || {};
    const meta = CARGOS_OVERRIDE[id] || { cargo: 'OPERACIONAL', grupoValor: 'G3_MONTADOR', matricula: String(id), equipe: 'Equipe Obra 24.152' };
    const grupoInfo = TABELA_GRUPOS_VALORES[meta.grupoValor];
    const isPiloto = GRUPO_PILOTO_IDS.includes(id);

    const apRaw = await reqRhid('GET', `/apuracao_ponto?dataIni=${dataIni}&dataFinal=${dataFim}&idPerson=${id}`, token);
    const days = typeof apRaw === 'string' ? JSON.parse(apRaw) : (Array.isArray(apRaw) ? apRaw : []);

    let totalMinTrab = 0;
    let totalMinNormal = 0;
    let totalMinExtra = 0;
    let totalMinFalta = 0;
    let totalBancoPos = 0;
    let totalBancoNeg = 0;
    let diasTrabalhados = 0;
    let diasFalta = 0;

    const historicoDiario = days.map(d => {
      const trab = Number(d.totalHorasTrabalhadas || 0);
      const normRaw = Number(d.horasDiurnasNaoExtra || 0) + Number(d.horasNoturnasNaoExtra || 0);
      const norm = Math.min(trab, normRaw);
      const ext = Math.max(0, trab - norm);
      const falta = Number(d.horasFaltaAtraso || 0);
      const bhPos = Number(d.bancoMaisCredDebPositivo || 0);
      const bhNeg = Number(d.bancoMaisCredDebNegativo || 0);

      if (trab > 0) diasTrabalhados++;
      if (d.faltaDiaInteiro) diasFalta++;

      totalMinTrab += trab;
      totalMinNormal += norm;
      totalMinExtra += ext;
      totalMinFalta += falta;
      totalBancoPos += bhPos;
      totalBancoNeg += bhNeg;

      const batidas = (d.listAfdtManutencao || [])
        .map(b => String(b.hora || 0).padStart(4, '0'))
        .map(s => `${s.slice(0, 2)}:${s.slice(2, 4)}`);

      return {
        data: (d.dateTimeStr || '').slice(0, 10),
        horarioContratual: d.strHorarioContratualSimples || 'Folga/DSR',
        folga: Boolean(d.folga),
        feriado: Boolean(d.isHoliday),
        faltaDiaInteiro: Boolean(d.faltaDiaInteiro),
        batidas,
        minTrabalhados: trab,
        horasTrabalhadasFmt: formatMinToHHMM(trab),
        minNormais: norm,
        minExtras: ext,
        horasExtrasFmt: formatMinToHHMM(ext),
        minFaltaAtraso: falta
      };
    });

    const horasDecimais = Number((totalMinTrab / 60).toFixed(2));
    const horasNormaisDec = Number((totalMinNormal / 60).toFixed(2));
    const horasExtrasDec = Number((horasDecimais - horasNormaisDec).toFixed(2));
    const horasFaltaDec = Number((totalMinFalta / 60).toFixed(2));

    const custoPelasHoras = Number((horasDecimais * grupoInfo.valorHH).toFixed(2));
    const custoComAdicionalHE = Number(((horasNormaisDec * grupoInfo.valorHH) + (horasExtrasDec * grupoInfo.valorHH * 1.5)).toFixed(2));

    colaboradores.push({
      id,
      matricula: cad.registration || meta.matricula,
      pis: cad.pis || '',
      cpf: cad.cpf || '',
      nome: cad.name || `Colaborador ${id}`,
      cargo: meta.cargo,
      cargoPremissa: meta.cargoPremissa || grupoInfo.cargoPremissa || 'Montador',
      departamentoPremissa: meta.departamentoPremissa || grupoInfo.departamento || 'Obras',
      classificacaoPremissa: 'MOD',
      grupoValorKey: meta.grupoValor,
      grupoCodigo: grupoInfo.codigo,
      grupoNome: grupoInfo.nome,
      equipe: meta.equipe,
      isPiloto,
      custoMensalBase: grupoInfo.custoMensalComEncargos,
      valorHHBase: grupoInfo.valorHH,
      diasTrabalhados,
      diasFalta,
      totalMinutos: totalMinTrab,
      horasTrabalhadasFmt: formatMinToHHMM(totalMinTrab),
      horasTrabalhadasDec: horasDecimais,
      horasNormaisFmt: formatMinToHHMM(totalMinNormal),
      horasNormaisDec,
      horasExtrasFmt: formatMinToHHMM(totalMinExtra),
      horasExtrasDec,
      horasFaltaFmt: formatMinToHHMM(totalMinFalta),
      horasFaltaDec,
      mediaHorasDia: diasTrabalhados > 0 ? Number((horasDecimais / diasTrabalhados).toFixed(2)) : 0,
      custoApropriadoHoras: custoPelasHoras,
      custoApropriadoComHE50: custoComAdicionalHE,
      valorHHEfetivoFixo: horasDecimais > 0 ? Number((grupoInfo.custoMensalComEncargos / horasDecimais).toFixed(2)) : 0,
      historicoDiario
    });
  }

  // 2. Consulta ao vivo no Sienge ERP (Obra 24152 e Folha no CC 1217)
  const [obraRes, wbsRes, billsObraRes, folhaSetRes, folhaAgoRes] = await Promise.all([
    getSienge('/enterprises/24152'),
    getSienge('/building-cost-estimations/24152/sheets/0/items?limit=100'),
    getSienge('/bills?costCenterId=24152&startDate=2026-01-01&endDate=2026-12-31&limit=200'),
    getSienge('/bills/27087'),
    getSienge('/bills/26469')
  ]);

  const wbsItems = (wbsRes.body && wbsRes.body.results) || [];
  const wbsMaoDeObraInstalacao = wbsItems.find(i => i.wbsCode === '00.000.001.007') || {
    wbsCode: '00.000.001.007',
    workItemId: 80005,
    description: 'MÃO DE OBRA DE INSTALAÇÃO',
    totalPrice: 1454382.84
  };
  const wbsMaoDeObraTransformacao = wbsItems.find(i => i.wbsCode === '00.000.001.008') || {
    wbsCode: '00.000.001.008',
    workItemId: 80006,
    description: 'MÃO DE OBRA DE TRANSFORMAÇÃO',
    totalPrice: 80705.49
  };

  // Analisa títulos já lançados na obra 24152 em 2026
  const billsObra = (billsObraRes.body && billsObraRes.body.results) || [];
  let totalJaLancadoObra2026 = 0;
  let totalRefeicoesEquipeObra = 0;
  let totalAlojamentoEquipeObra = 0;
  let totalSalariosLancadosObra = 0;
  const ultimosTitulosObra = [];

  for (const b of billsObra) {
    const val = Number(b.totalInvoiceAmount || 0);
    totalJaLancadoObra2026 += val;
    const obs = (b.notes || '').toUpperCase();
    const doc = (b.documentIdentificationId || '').trim();
    if (obs.includes('REFEI') || obs.includes('CAFE') || obs.includes('ALMO')) {
      totalRefeicoesEquipeObra += val;
    }
    if (obs.includes('ALOJAMENTO') || doc === 'ALG') {
      totalAlojamentoEquipeObra += val;
    }
    if (doc === 'FLP') {
      totalSalariosLancadosObra += val;
    }
  }

  const recentObraBills = billsObra
    .filter(b => /tavares|helder|alojamento|cordebras/i.test(b.notes || ''))
    .slice(-8)
    .reverse()
    .map(b => ({
      id: b.id,
      doc: (b.documentIdentificationId || '').trim(),
      numero: b.documentNumber,
      data: b.issueDate,
      valor: b.totalInvoiceAmount,
      historico: b.notes
    }));

  const dataset = {
    ultimaAtualizacao: new Date().toISOString(),
    periodoApuracao: {
      inicio: dataIni,
      fim: dataFim,
      competencia: '10/2026 (Outubro/2026)'
    },
    equipamentoControlId: {
      id: 6,
      nome: '24.152 - GUARNIERI_CORDEBRAS - CAMAÇARI, BA',
      serial: '0M0200/004DC5',
      modelo: 'Control iD REP iDClass Bio',
      portaria: 'Portaria 671 (AFD Tipo 3 Nativo)'
    },
    siengeObra: {
      buildingId: 24152,
      costCenterId: 24152,
      nome: (obraRes.body && obraRes.body.name) || '1.4 24.152-GUARNIERI_CORDEBRAS - CAMAÇARI, BA',
      empresaId: 1,
      empresaNome: 'OMNI TRADE BRASIL REVESTIMENTOS METÁLICOS LTDA',
      endereco: (obraRes.body && obraRes.body.adress) || 'VIA PARAFUSO - KM 13,357 - ZONA INDUSTRIAL - Camaçari - BA',
      planilhaId: 0,
      planilhaNome: 'OBRA BASE (UNLOCKED)',
      wbsAlvo: {
        codigo: wbsMaoDeObraInstalacao.wbsCode,
        workItemId: wbsMaoDeObraInstalacao.workItemId,
        descricao: wbsMaoDeObraInstalacao.description,
        orcadoTotal: wbsMaoDeObraInstalacao.totalPrice
      },
      wbsSecundaria: {
        codigo: wbsMaoDeObraTransformacao.wbsCode,
        workItemId: wbsMaoDeObraTransformacao.workItemId,
        descricao: wbsMaoDeObraTransformacao.description,
        orcadoTotal: wbsMaoDeObraTransformacao.totalPrice
      },
      planoFinanceiro: {
        contaAlocacaoObra: { id: '2030114', nome: 'Alocação de custos de MO para as obras', tipo: 'Despesa / Apropriação (+)' },
        contaAnulacaoCentral: { id: '2030113', nome: '(-) Anulação de Custos Mão de Obra', tipo: 'Redutora de Custo (-)' },
        contaSalariosDireto: { id: '2030101', nome: 'Salários e Ordenados', tipo: 'Despesa Folha' },
        contaRefeicoes: { id: '2030112', nome: 'Refeições', tipo: 'Despesa Destacamento' }
      },
      diagnosticoAtualSienge: {
        centroCustoConcentradorId: 1217,
        centroCustoConcentradorNome: '1.2.17 - INDUSTRIAL DIRETO',
        folhaSetembro2026: {
          billId: 27087,
          documento: 'FLP / FO.09.2026',
          valorTotalFolha: (folhaSetRes.body && folhaSetRes.body.totalInvoiceAmount) || 459139.00,
          percentualNoCC1217: 68.91,
          valorConcentradoCC1217: 316375.19,
          valorApropriadoNaObra24152: 0.00
        },
        folhaAgosto2026: {
          billId: 26469,
          documento: 'FLP / FO.08.2026',
          valorTotalFolha: (folhaAgoRes.body && folhaAgoRes.body.totalInvoiceAmount) || 466678.16,
          percentualNoCC1217: 71.91,
          valorConcentradoCC1217: 335595.00,
          valorApropriadoNaObra24152: 0.00
        },
        despesasJaLancadasNaObra24152Em2026: {
          totalTitulos: billsObra.length,
          valorTotalGeral: Number(totalJaLancadoObra2026.toFixed(2)),
          totalRefeicoesEquipe: Number(totalRefeicoesEquipeObra.toFixed(2)),
          totalAlojamentoEquipe: Number(totalAlojamentoEquipeObra.toFixed(2)),
          totalSalariosApropriados: Number(totalSalariosLancadosObra.toFixed(2)),
          ultimosTitulosEquipe: recentObraBills
        }
      }
    },
    premissaFatoresRol: PREMISSA_FATORES_ROL,
    tabelaOficialModHH: TABELA_OFICIAL_MOD_HH,
    tabelaGruposValores: TABELA_GRUPOS_VALORES,
    colaboradores
  };

  const outJsonPath = path.join(__dirname, 'dados_simulacao_sienge_24152.json');
  fs.writeFileSync(outJsonPath, JSON.stringify(dataset, null, 2), 'utf8');
  console.log(`[Sync Diário] Arquivo atualizado com sucesso: ${outJsonPath}`);

  // Também atualiza o snapshot inline dentro do simulador_apropriacao_sienge.html se já existir
  const htmlFiles = ['simulador_apropriacao_sienge.html', 'index.html'];
  for (const hf of htmlFiles) {
    const p = path.join(__dirname, hf);
    if (fs.existsSync(p)) {
      let content = fs.readFileSync(p, 'utf8');
      const markerStart = '/*__START_SYNC_DATA__*/';
      const markerEnd = '/*__END_SYNC_DATA__*/';
      if (content.includes(markerStart) && content.includes(markerEnd)) {
        const before = content.split(markerStart)[0];
        const after = content.split(markerEnd)[1];
        content = `${before}${markerStart}\nwindow.SIMULACAO_SIENGE_DATA = ${JSON.stringify(dataset)};\n${markerEnd}${after}`;
        fs.writeFileSync(p, content, 'utf8');
        console.log(`[Sync Diário] Dados injetados automaticamente em: ${hf}`);
      }
    }
  }

  return dataset;
}

if (require.main === module) {
  runSync().catch(err => {
    console.error('[Sync Diário] Erro:', err);
    process.exit(1);
  });
}

module.exports = { runSync };


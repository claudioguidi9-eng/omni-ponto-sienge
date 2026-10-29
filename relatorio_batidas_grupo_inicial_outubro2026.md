# 📋 RELATÓRIO DE PONTO E SIMULAÇÃO DE APROPRIAÇÃO SIENGE — GRUPO PILOTO (OUTUBRO/2026)
**Fonte dos Dados:** Control iD / RHiD API + Sienge ERP API em Produção (Omni Trade Brasil)
**Obra / Alocação (REP #6):** `24.152 - GUARNIERI_CORDEBRAS - CAMAÇARI, BA` (Serial REP: `0M0200/004DC5` | Sienge ID: `24152`)
**Departamento RHiD:** `3 - PRODUÇÃO` / `6 - PRODUÇÃO INDIRETA`
**Painel Interativo p/ Reunião:** [`simulador_apropriacao_sienge.html`](file:///C:/D/Omni/omni_ponto/simulador_apropriacao_sienge.html) *(Atualizado diariamente via [`sync_diario_sienge.js`](file:///C:/D/Omni/omni_ponto/sync_diario_sienge.js))*

---

## 0. SIMULAÇÃO EXECUTIVA DE APROPRIAÇÃO NO SIENGE ERP (OBRA `24.152`)

### A) Grupos de Valores Salariais & Valor Hora-Homem (Base 220h c/ Encargos)

| Código | Grupo de Valor / Categoria Funcional | Colaboradores no Grupo Piloto | Custo Mensal Base (220h) | **Valor HH Base** | Horas Apuradas (Out/26) | **Subtotal Apropriado (R\$)** |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| **G1** | **Liderança de Campo (Encarregado de Obras)** | 1 (`José Sanches`) | R\$ 12.500,00 | **R\$ 56,82 / h** | 193,22 h | **R\$ 10.978,76** |
| **G2** | **Supervisão Técnica (Líder de Obras)** | 2 (`Tiago`, `Jonata`) | R\$ 7.670,00 | **R\$ 34,86 / h** | 377,09 h | **R\$ 13.145,36** |
| **G3** | **Execução Especializada (Montador / Op. Guindauto)** | 3 (`Antonio`, `Fabio`, `Joseilton`) | R\$ 7.670,00 | **R\$ 34,86 / h** | 555,53 h | **R\$ 19.365,78** |
| **G4** | **Apoio Operacional (Ajudante)** | 2 (`Carlos Henrique`, `Janderson`) | R\$ 5.670,00 | **R\$ 25,77 / h** | 378,46 h | **R\$ 9.752,91** |
| **TOTAL** | **Consolidado Equipe Piloto (8 Colaboradores)** | **8 homens** | **R\$ 62.190,00** | **R\$ 35,40 / h** *(médio)* | **1.504,30 h** | **R\$ 53.242,81** |

### B) Demonstrativo Nominal de Apropriação no Centro de Custo `24152`

| Matrícula | Colaborador | Cargo / Função | Grupo | Dias Efet. | H. Normais | H. Extras | **Total Horas** | **Valor HH** | **HH Efetivo** *(Fixo÷H)* | **Custo Apropriado (R\$)** |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `154` | **JOSE SANCHES TAVARES** | ENCARREGADO DE OBRAS | `G1` | 20d | 147,13 h | 46,08 h | **193,22 h** (`193:13`) | R\$ 56,82/h | R\$ 64,69/h | **R\$ 10.978,76** |
| `198` | **TIAGO ALVES DE SOUSA** | LIDER DE OBRAS | `G2` | 19d | 137,33 h | 45,98 h | **183,32 h** (`183:19`) | R\$ 34,86/h | R\$ 41,84/h | **R\$ 6.390,54** |
| `1069` | **JONATA OLIVEIRA MELO** | LIDER DE OBRAS | `G2` | 21d | 147,88 h | 45,88 h | **193,77 h** (`193:46`) | R\$ 34,86/h | R\$ 39,58/h | **R\$ 6.754,82** |
| `1252` | **ANTONIO CARLOS SOUSA OLIVEIRA** | MONTADOR | `G3` | 20d | 140,00 h | 51,88 h | **191,88 h** (`191:53`) | R\$ 34,86/h | R\$ 39,97/h | **R\$ 6.688,94** |
| `1277` | **FABIO FERREIRA DE OLIVEIRA** | MONTADOR | `G3` | 21d | 140,00 h | 63,48 h | **203,48 h** (`203:29`) | R\$ 34,86/h | R\$ 37,69/h | **R\$ 7.093,31** |
| `1341` | **CARLOS HENRIQUE DE SOUZA SILVA** | AJUDANTE | `G4` | 21d | 149,00 h | 52,98 h | **201,98 h** (`201:59`) | R\$ 25,77/h | R\$ 28,07/h | **R\$ 5.205,02** |
| `1348` | **JOSEILTON NOGUEIRA DE SOUZA** | MOT. OP. DE GUINDAUTO | `G3` | 18d | 151,33 h | 8,83 h | **160,17 h** (`160:10`) | R\$ 34,86/h | R\$ 47,89/h | **R\$ 5.583,53** |
| `1386` | **JANDERSON DA SILVA E SILVA** | AJUDANTE | `G4` | 20d | 141,20 h | 35,28 h | **176,48 h** (`176:29`) | R\$ 25,77/h | R\$ 32,13/h | **R\$ 4.547,89** |
| **TOTAL** | **8 COLABORADORES (EQUIPE TAVARES)** | — | — | **160d** | **1.153,88 h** | **350,42 h** | **1.504,30 h** (`1504:18`) | **R\$ 35,40/h** | **R\$ 41,34/h** | **R\$ 53.242,81** |

### C) Espelho de Lançamento no Sienge ERP (Obra `24152` vs. CC Central `1217`)

| Estrutura Sienge | Centro de Custo / Obra | Conta Financeira / Item Orçamentário (WBS) | Natureza | Valor Simulado |
| :--- | :--- | :--- | :---: | :---: |
| **Orçamento de Obra (`buildings-cost`)** | `24152` — GUARNIERI_CORDEBRAS (Unid. `0 - OBRA BASE`) | WBS `00.000.001.007` — **MÃO DE OBRA DE INSTALAÇÃO** *(Orçado: R\$ 1.454.382,84)* | Apropriação Física/Orçamentária | **+ R\$ 53.242,81** *(3,66% do orçamento)* |
| **Plano Financeiro (`budget-categories`)** | `24152` — GUARNIERI_CORDEBRAS | Conta `2030114` — **Alocação de custos de MO para as obras** | Entrada Custo na Obra (+) | **+ R\$ 53.242,81** |
| **Contrapartida Central (`budget-categories`)** | `1217` — 1.2.17 - INDUSTRIAL DIRETO | Conta `2030113` — **(-) Anulação de Custos Mão de Obra** | Baixa do CC Concentrador (-) | **- R\$ 53.242,81** |

---

## 1. RESUMO OPERACIONAL DE PONTO DO GRUPO (8 COLABORADORES)

| Colaborador | Cargo | Matrícula | ID | Dias Trab. | Total Horas | Banco/Extras | Faltas/Atrasos | Status Hoje (27/10) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **JOSE SANCHES TAVARES** | ENCARREGADO DE OBRAS | S/M | 355 | 22 | 193:13 | 16:08 | 18:00 | Entrada às 06:51 (Em jornada) |
| **TIAGO ALVES DE SOUSA** | LIDER DE OBRAS | S/M | 412 | 22 | 183:19 | 15:20 | 27:00 | Entrada às 06:57 (Em jornada) |
| **JONATA OLIVEIRA MELO** | LIDER DE OBRAS | S/M | 448 | 22 | 193:46 | 11:45 | 12:52 | Entrada às 07:10 (Em jornada) |
| **ANTONIO CARLOS SOUSA OLIVEIRA** | MONTADOR | S/M | 616 | 22 | 191:53 | 00:00 | 09:00 | Entrada às 06:47 (Em jornada) |
| **FABIO FERREIRA DE OLIVEIRA** | MONTADOR | S/M | 310 | 22 | 203:29 | 00:00 | 09:00 | Entrada às 06:49 (Em jornada) |
| **CARLOS HENRIQUE DE SOUZA SILVA** | AJUDANTE | S/M | 695 | 22 | 201:59 | 00:00 | 09:00 | Entrada às 06:49 (Em jornada) |
| **JOSEILTON NOGUEIRA DE SOUZA** | MOTORISTA OPERADOR DE GUINDAUTO | S/M | 708 | 19 | 160:10 | 02:17 | 09:12 | Entrada às 06:58 (Em jornada) |
| **JANDERSON DA SILVA E SILVA** | AJUDANTE | S/M | 735 | 22 | 176:29 | 00:00 | 18:00 | Entrada às 06:49 (Em jornada) |

---

## 2. DETALHAMENTO INDIVIDUAL DIA A DIA (01/10 A 27/10)

### 👤 JOSE SANCHES TAVARES — ENCARREGADO DE OBRAS
- **ID RHiD:** 355 | **PIS:** 21278124235

| Data | Dia | Batidas Registradas | Carga Real | Extra/Banco | Atraso/Falta | Ocorrência / Alerta |
| :---: | :---: | :--- | :---: | :---: | :---: | :--- |
| 01/10 | Qui | **06:53** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:01** | 10:08 | +01:08 | 00:00 | Extra acima de 10 min (banco de horas) |
| 02/10 | Sex | **07:00** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:21** | 08:21 | +00:21 | 00:00 | Extra acima de 10 min (banco de horas) |
| 03/10 | Sáb | **06:52** ➔ **12:00** ➔ **13:00** ➔ **16:14** | 08:22 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 04/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 05/10 | Seg | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:57** | 10:06 | +01:06 | 00:00 | Extra acima de 10 min (banco de horas) |
| 06/10 | Ter | **06:53** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:57** | 10:04 | +01:04 | 00:00 | Extra acima de 10 min (banco de horas) |
| 07/10 | Qua | **06:54** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:03** | 10:09 | +01:09 | 00:00 | Extra acima de 10 min (banco de horas) |
| 08/10 | Qui | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:57** | 10:05 | +01:05 | 00:00 | Extra acima de 10 min (banco de horas) |
| 09/10 | Sex | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:08** | 09:16 | +01:16 | 00:00 | Extra acima de 10 min (banco de horas) |
| 10/10 | Sáb | **06:53** ➔ **12:00** ➔ **13:00** ➔ **16:07** | 08:14 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 11/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 12/10 | Seg | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | 🟢 Normal |
| 13/10 | Ter | **06:53** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:00** | 10:07 | +01:07 | 00:00 | Extra acima de 10 min (banco de horas) |
| 14/10 | Qua | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:00** | 10:10 | +01:10 | 00:00 | Extra acima de 10 min (banco de horas) |
| 15/10 | Qui | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:06** | 10:17 | +01:17 | 00:00 | Extra acima de 10 min (banco de horas) |
| 16/10 | Sex | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:01** | 09:09 | +01:09 | 00:00 | Extra acima de 10 min (banco de horas) |
| 17/10 | Sáb | **06:53** ➔ **16:05** | 09:12 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 18/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 19/10 | Seg | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:57** | 10:06 | +01:06 | 00:00 | Extra acima de 10 min (banco de horas) |
| 20/10 | Ter | **06:52** ➔ **17:54** | 11:02 | 00:00 | 00:00 | Extra acima de 10 min |
| 21/10 | Qua | **17:57** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🔴 Falta / Inconsistência |
| 22/10 | Qui | **06:54** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:58** | 10:04 | +01:04 | 00:00 | Extra acima de 10 min (banco de horas) |
| 23/10 | Sex | **06:57** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:03** | 09:06 | +01:06 | 00:00 | Extra acima de 10 min (banco de horas) |
| 24/10 | Sáb | **06:51** ➔ **16:06** | 09:15 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 25/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 26/10 | Seg | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:52** | 10:00 | +01:00 | 00:00 | Extra acima de 10 min (banco de horas) |
| 27/10 | Ter | **06:51** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🟡 Em andamento (Jornada de hoje) |

### 👤 TIAGO ALVES DE SOUSA — LIDER DE OBRAS
- **ID RHiD:** 412 | **PIS:** 20631228866

| Data | Dia | Batidas Registradas | Carga Real | Extra/Banco | Atraso/Falta | Ocorrência / Alerta |
| :---: | :---: | :--- | :---: | :---: | :---: | :--- |
| 01/10 | Qui | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:58** | 10:07 | +01:07 | 00:00 | Extra acima de 10 min (banco de horas) |
| 02/10 | Sex | **06:48** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:18** | 08:30 | +00:30 | 00:00 | Extra acima de 10 min (banco de horas) |
| 03/10 | Sáb | **06:54** ➔ **12:00** ➔ **13:00** ➔ **16:12** | 08:18 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 04/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 05/10 | Seg | **06:54** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:55** | 10:01 | +01:01 | 00:00 | Extra acima de 10 min (banco de horas) |
| 06/10 | Ter | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:07 | +01:07 | 00:00 | Extra acima de 10 min (banco de horas) |
| 07/10 | Qua | **06:46** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:51** | 10:05 | +01:05 | 00:00 | Extra acima de 10 min (banco de horas) |
| 08/10 | Qui | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:55** | 10:06 | +01:06 | 00:00 | Extra acima de 10 min (banco de horas) |
| 09/10 | Sex | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:05** | 09:14 | +01:14 | 00:00 | Extra acima de 10 min (banco de horas) |
| 10/10 | Sáb | **06:53** ➔ **12:00** ➔ **13:00** ➔ **16:07** | 08:14 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 11/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 12/10 | Seg | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | 🟢 Normal |
| 13/10 | Ter | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:00** | 10:10 | +01:10 | 00:00 | Extra acima de 10 min (banco de horas) |
| 14/10 | Qua | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:01** | 10:10 | +01:10 | 00:00 | Extra acima de 10 min (banco de horas) |
| 15/10 | Qui | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:04** | 10:15 | +01:15 | 00:00 | Extra acima de 10 min (banco de horas) |
| 16/10 | Sex | **06:45** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:01** | 09:16 | +01:16 | 00:00 | Extra acima de 10 min (banco de horas) |
| 17/10 | Sáb | **06:52** ➔ **16:01** | 09:09 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 18/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 19/10 | Seg | **07:30** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🔴 Falta / Inconsistência |
| 20/10 | Ter | **06:50** ➔ **17:58** | 11:08 | 00:00 | 00:00 | Extra acima de 10 min |
| 21/10 | Qua | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:06 | +01:06 | 00:00 | Extra acima de 10 min (banco de horas) |
| 22/10 | Qui | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:55** | 10:05 | +01:05 | 00:00 | Extra acima de 10 min (banco de horas) |
| 23/10 | Sex | **06:54** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:02** | 09:08 | +01:08 | 00:00 | Extra acima de 10 min (banco de horas) |
| 24/10 | Sáb | **06:51** ➔ **16:01** | 09:10 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 25/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 26/10 | Seg | **17:50** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🔴 Falta / Inconsistência |
| 27/10 | Ter | **06:57** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🟡 Em andamento (Jornada de hoje) |

### 👤 JONATA OLIVEIRA MELO — LIDER DE OBRAS
- **ID RHiD:** 448 | **PIS:** 20025611350

| Data | Dia | Batidas Registradas | Carga Real | Extra/Banco | Atraso/Falta | Ocorrência / Alerta |
| :---: | :---: | :--- | :---: | :---: | :---: | :--- |
| 01/10 | Qui | **07:01** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:59** | 09:58 | +00:58 | 00:00 | Extra acima de 10 min (banco de horas) |
| 02/10 | Sex | **07:06** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:18** | 08:12 | +00:12 | 00:00 | Extra acima de 10 min (banco de horas) |
| 03/10 | Sáb | **06:59** ➔ **12:00** ➔ **13:00** ➔ **16:15** | 08:16 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 04/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 05/10 | Seg | **07:04** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:03** | 08:59 | 00:00 | 00:00 | 🟢 Normal |
| 06/10 | Ter | **06:58** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:59** | 09:01 | 00:00 | 00:00 | 🟢 Normal |
| 07/10 | Qua | **07:01** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:30** | 09:29 | +00:29 | 00:00 | Extra acima de 10 min (banco de horas) |
| 08/10 | Qui | **07:01** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:29** | 09:28 | +00:28 | 00:00 | Extra acima de 10 min (banco de horas) |
| 09/10 | Sex | **06:58** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:07** | 09:09 | +01:09 | 00:00 | Extra acima de 10 min (banco de horas) |
| 10/10 | Sáb | **06:51** ➔ **12:00** ➔ **13:00** ➔ **16:06** | 08:15 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 11/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 12/10 | Seg | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | 🟢 Normal |
| 13/10 | Ter | **06:58** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:00** | 10:02 | +01:02 | 00:00 | Extra acima de 10 min (banco de horas) |
| 14/10 | Qua | **06:45** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:55** | 10:10 | +01:10 | 00:00 | Extra acima de 10 min (banco de horas) |
| 15/10 | Qui | **06:45** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:05** | 10:20 | +01:20 | 00:00 | Extra acima de 10 min (banco de horas) |
| 16/10 | Sex | **06:45** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:03** | 09:18 | +01:18 | 00:00 | Extra acima de 10 min (banco de horas) |
| 17/10 | Sáb | **06:51** ➔ **16:05** | 09:14 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 18/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 19/10 | Seg | **06:59** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 09:57 | +00:57 | 00:00 | Extra acima de 10 min (banco de horas) |
| 20/10 | Ter | **06:56** ➔ **17:59** | 11:03 | 00:00 | 00:00 | Extra acima de 10 min |
| 21/10 | Qua | **07:01** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:58** | 09:57 | +00:57 | 00:00 | Extra acima de 10 min (banco de horas) |
| 22/10 | Qui | **06:56** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:55** | 09:59 | +00:59 | 00:00 | Extra acima de 10 min (banco de horas) |
| 23/10 | Sex | **12:53** ➔ **17:01** ➔ **13:00** ➔ **16:30** | 04:08 | 00:00 | -03:52 | Atraso acima de 10 min |
| 24/10 | Sáb | **06:58** ➔ **16:03** | 09:05 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 25/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 26/10 | Seg | **07:01** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:47** | 09:46 | +00:46 | 00:00 | Extra acima de 10 min (banco de horas) |
| 27/10 | Ter | **07:10** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🟡 Em andamento (Jornada de hoje) |

### 👤 ANTONIO CARLOS SOUSA OLIVEIRA — MONTADOR
- **ID RHiD:** 616 | **PIS:** 16135138961

| Data | Dia | Batidas Registradas | Carga Real | Extra/Banco | Atraso/Falta | Ocorrência / Alerta |
| :---: | :---: | :--- | :---: | :---: | :---: | :--- |
| 01/10 | Qui | **07:30** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | 00:00 | 🟢 Normal |
| 02/10 | Sex | **06:56** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:18** | 08:22 | 00:00 | 00:00 | Extra acima de 10 min |
| 03/10 | Sáb | **06:49** ➔ **12:00** ➔ **13:00** ➔ **16:12** | 08:23 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 04/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 05/10 | Seg | **06:54** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:53** | 09:59 | 00:00 | 00:00 | Extra acima de 10 min |
| 06/10 | Ter | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:55** | 10:06 | 00:00 | 00:00 | Extra acima de 10 min |
| 07/10 | Qua | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:50** | 10:01 | 00:00 | 00:00 | Extra acima de 10 min |
| 08/10 | Qui | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:07 | 00:00 | 00:00 | Extra acima de 10 min |
| 09/10 | Sex | **06:57** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:00** | 09:03 | 00:00 | 00:00 | Extra acima de 10 min |
| 10/10 | Sáb | **06:55** ➔ **12:00** ➔ **13:00** ➔ **16:01** | 08:06 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 11/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 12/10 | Seg | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | 🟢 Normal |
| 13/10 | Ter | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:00** | 10:09 | 00:00 | 00:00 | Extra acima de 10 min |
| 14/10 | Qua | **06:48** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:00** | 10:12 | 00:00 | 00:00 | Extra acima de 10 min |
| 15/10 | Qui | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:05** | 10:15 | 00:00 | 00:00 | Extra acima de 10 min |
| 16/10 | Sex | **06:46** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:01** | 09:15 | 00:00 | 00:00 | Extra acima de 10 min |
| 17/10 | Sáb | **06:53** ➔ **16:00** | 09:07 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 18/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 19/10 | Seg | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:06 | 00:00 | 00:00 | Extra acima de 10 min |
| 20/10 | Ter | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:58** | 10:08 | 00:00 | 00:00 | Extra acima de 10 min |
| 21/10 | Qua | **06:47** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:09 | 00:00 | 00:00 | Extra acima de 10 min |
| 22/10 | Qui | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:07 | 00:00 | 00:00 | Extra acima de 10 min |
| 23/10 | Sex | **06:54** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:01** | 09:07 | 00:00 | 00:00 | Extra acima de 10 min |
| 24/10 | Sáb | **06:51** ➔ **16:03** | 09:12 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 25/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 26/10 | Seg | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:50** | 09:59 | 00:00 | 00:00 | Extra acima de 10 min |
| 27/10 | Ter | **06:47** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🟡 Em andamento (Jornada de hoje) |

### 👤 FABIO FERREIRA DE OLIVEIRA — MONTADOR
- **ID RHiD:** 310 | **PIS:** 20628447730

| Data | Dia | Batidas Registradas | Carga Real | Extra/Banco | Atraso/Falta | Ocorrência / Alerta |
| :---: | :---: | :--- | :---: | :---: | :---: | :--- |
| 01/10 | Qui | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:58** | 10:07 | 00:00 | 00:00 | Extra acima de 10 min |
| 02/10 | Sex | **06:47** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:18** | 08:31 | 00:00 | 00:00 | Extra acima de 10 min |
| 03/10 | Sáb | **06:52** ➔ **12:00** ➔ **13:00** ➔ **16:12** | 08:20 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 04/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 05/10 | Seg | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:54** | 10:02 | 00:00 | 00:00 | Extra acima de 10 min |
| 06/10 | Ter | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:07 | 00:00 | 00:00 | Extra acima de 10 min |
| 07/10 | Qua | **06:48** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:50** | 10:02 | 00:00 | 00:00 | Extra acima de 10 min |
| 08/10 | Qui | **06:48** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:08 | 00:00 | 00:00 | Extra acima de 10 min |
| 09/10 | Sex | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:04** | 09:13 | 00:00 | 00:00 | Extra acima de 10 min |
| 10/10 | Sáb | **06:52** ➔ **12:00** ➔ **13:00** ➔ **16:06** | 08:14 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 11/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 12/10 | Seg | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | 🟢 Normal |
| 13/10 | Ter | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:01** | 10:10 | 00:00 | 00:00 | Extra acima de 10 min |
| 14/10 | Qua | **06:48** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:01** | 10:13 | 00:00 | 00:00 | Extra acima de 10 min |
| 15/10 | Qui | **06:48** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:04** | 10:16 | 00:00 | 00:00 | Extra acima de 10 min |
| 16/10 | Sex | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:02** | 09:12 | 00:00 | 00:00 | Extra acima de 10 min |
| 17/10 | Sáb | **06:53** ➔ **16:03** | 09:10 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 18/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 19/10 | Seg | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:04 | 00:00 | 00:00 | Extra acima de 10 min |
| 20/10 | Ter | **06:50** ➔ **17:58** | 11:08 | 00:00 | 00:00 | Extra acima de 10 min |
| 21/10 | Qua | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:57** | 10:07 | 00:00 | 00:00 | Extra acima de 10 min |
| 22/10 | Qui | **06:48** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:55** | 10:07 | 00:00 | 00:00 | Extra acima de 10 min |
| 23/10 | Sex | **06:53** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:02** | 09:09 | 00:00 | 00:00 | Extra acima de 10 min |
| 24/10 | Sáb | **06:51** ➔ **16:02** | 09:11 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 25/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 26/10 | Seg | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:50** | 09:58 | 00:00 | 00:00 | Extra acima de 10 min |
| 27/10 | Ter | **06:49** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🟡 Em andamento (Jornada de hoje) |

### 👤 CARLOS HENRIQUE DE SOUZA SILVA — AJUDANTE
- **ID RHiD:** 695 | **PIS:** 9400351380

| Data | Dia | Batidas Registradas | Carga Real | Extra/Banco | Atraso/Falta | Ocorrência / Alerta |
| :---: | :---: | :--- | :---: | :---: | :---: | :--- |
| 01/10 | Qui | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:58** | 10:09 | 00:00 | 00:00 | Extra acima de 10 min |
| 02/10 | Sex | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:17** | 08:28 | 00:00 | 00:00 | Extra acima de 10 min |
| 03/10 | Sáb | **06:52** ➔ **12:00** ➔ **13:00** ➔ **16:13** | 08:21 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 04/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 05/10 | Seg | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:51** | 09:59 | 00:00 | 00:00 | Extra acima de 10 min |
| 06/10 | Ter | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:55** | 10:06 | 00:00 | 00:00 | Extra acima de 10 min |
| 07/10 | Qua | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:50** | 10:01 | 00:00 | 00:00 | Extra acima de 10 min |
| 08/10 | Qui | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:07 | 00:00 | 00:00 | Extra acima de 10 min |
| 09/10 | Sex | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:03** | 09:11 | 00:00 | 00:00 | Extra acima de 10 min |
| 10/10 | Sáb | **06:51** ➔ **12:00** ➔ **13:00** ➔ **16:06** | 08:15 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 11/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 12/10 | Seg | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | 🟢 Normal |
| 13/10 | Ter | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:59** | 10:08 | 00:00 | 00:00 | Extra acima de 10 min |
| 14/10 | Qua | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:00** | 10:10 | 00:00 | 00:00 | Extra acima de 10 min |
| 15/10 | Qui | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **18:00** | 10:11 | 00:00 | 00:00 | Extra acima de 10 min |
| 16/10 | Sex | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:01** | 09:11 | 00:00 | 00:00 | Extra acima de 10 min |
| 17/10 | Sáb | **06:53** ➔ **16:02** | 09:09 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 18/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 19/10 | Seg | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:04 | 00:00 | 00:00 | Extra acima de 10 min |
| 20/10 | Ter | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:53** | 10:03 | 00:00 | 00:00 | Extra acima de 10 min |
| 21/10 | Qua | **06:49** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:56** | 10:07 | 00:00 | 00:00 | Extra acima de 10 min |
| 22/10 | Qui | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:55** | 10:05 | 00:00 | 00:00 | Extra acima de 10 min |
| 23/10 | Sex | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:00** | 09:08 | 00:00 | 00:00 | Extra acima de 10 min |
| 24/10 | Sáb | **06:52** ➔ **16:02** | 09:10 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 25/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 26/10 | Seg | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:47** | 09:56 | 00:00 | 00:00 | Extra acima de 10 min |
| 27/10 | Ter | **06:49** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🟡 Em andamento (Jornada de hoje) |

### 👤 JOSEILTON NOGUEIRA DE SOUZA — MOTORISTA OPERADOR DE GUINDAUTO
- **ID RHiD:** 708 | **PIS:** 2053285580

| Data | Dia | Batidas Registradas | Carga Real | Extra/Banco | Atraso/Falta | Ocorrência / Alerta |
| :---: | :---: | :--- | :---: | :---: | :---: | :--- |
| 01/10 | Qui | **06:53** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:21** | 09:28 | +00:28 | 00:00 | Extra acima de 10 min (banco de horas) |
| 02/10 | Sex | **06:53** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:01** | 08:08 | 00:00 | 00:00 | 🟢 Normal |
| 03/10 | Sáb | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 04/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 05/10 | Seg | **06:47** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:52** | 09:05 | 00:00 | 00:00 | 🟢 Normal |
| 06/10 | Ter | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:40** | 08:48 | 00:00 | -00:12 | Atraso acima de 10 min |
| 07/10 | Qua | **06:53** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:06** | 09:13 | +00:13 | 00:00 | Extra acima de 10 min (banco de horas) |
| 08/10 | Qui | **06:46** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:48** | 09:02 | 00:00 | 00:00 | 🟢 Normal |
| 09/10 | Sex | **06:59** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:00** | 08:01 | 00:00 | 00:00 | 🟢 Normal |
| 10/10 | Sáb | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 11/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 12/10 | Seg | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | 🟢 Normal |
| 13/10 | Ter | **06:54** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:57** | 09:03 | 00:00 | 00:00 | 🟢 Normal |
| 14/10 | Qua | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:01** | 09:11 | +00:11 | 00:00 | Extra acima de 10 min (banco de horas) |
| 15/10 | Qui | **06:53** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:58** | 09:05 | 00:00 | 00:00 | 🟢 Normal |
| 16/10 | Sex | **07:08** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:00** | 07:52 | 00:00 | 00:00 | 🟢 Normal |
| 17/10 | Sáb | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 18/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 19/10 | Seg | **06:59** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:58** | 08:59 | 00:00 | 00:00 | 🟢 Normal |
| 20/10 | Ter | **06:59** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:53** | 08:54 | 00:00 | 00:00 | 🟢 Normal |
| 21/10 | Qua | **07:00** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:06** | 09:06 | 00:00 | 00:00 | 🟢 Normal |
| 22/10 | Qui | **06:57** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:37** | 09:40 | +00:40 | 00:00 | Extra acima de 10 min (banco de horas) |
| 23/10 | Sex | **06:57** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:13** | 08:16 | +00:16 | 00:00 | Extra acima de 10 min (banco de horas) |
| 24/10 | Sáb | **07:07** ➔ **15:57** | 08:50 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 25/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 26/10 | Seg | **07:02** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:31** | 09:29 | +00:29 | 00:00 | Extra acima de 10 min (banco de horas) |
| 27/10 | Ter | **06:58** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🟡 Em andamento (Jornada de hoje) |

### 👤 JANDERSON DA SILVA E SILVA — AJUDANTE
- **ID RHiD:** 735 | **PIS:** 6228858556

| Data | Dia | Batidas Registradas | Carga Real | Extra/Banco | Atraso/Falta | Ocorrência / Alerta |
| :---: | :---: | :--- | :---: | :---: | :---: | :--- |
| 01/10 | Qui | **06:55** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:24** | 09:29 | 00:00 | 00:00 | Extra acima de 10 min |
| 02/10 | Sex | **06:48** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:01** | 08:13 | 00:00 | 00:00 | Extra acima de 10 min |
| 03/10 | Sáb | **06:51** ➔ **12:00** ➔ **13:00** ➔ **15:44** | 07:53 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 04/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 05/10 | Seg | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:00** | 09:09 | 00:00 | 00:00 | 🟢 Normal |
| 06/10 | Ter | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:00** | 09:10 | 00:00 | 00:00 | 🟢 Normal |
| 07/10 | Qua | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:10** | 09:20 | 00:00 | 00:00 | Extra acima de 10 min |
| 08/10 | Qui | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:56** | 09:05 | 00:00 | 00:00 | 🟢 Normal |
| 09/10 | Sex | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:02** | 08:10 | 00:00 | 00:00 | 🟢 Normal |
| 10/10 | Sáb | **06:55** ➔ **12:00** ➔ **13:00** ➔ **15:51** | 07:56 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 11/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 12/10 | Seg | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | 🟢 Normal |
| 13/10 | Ter | **07:00** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:05** | 09:05 | 00:00 | 00:00 | 🟢 Normal |
| 14/10 | Qua | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:57** | 09:06 | 00:00 | 00:00 | 🟢 Normal |
| 15/10 | Qui | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:57** | 09:07 | 00:00 | 00:00 | 🟢 Normal |
| 16/10 | Sex | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:00** | 08:10 | 00:00 | 00:00 | 🟢 Normal |
| 17/10 | Sáb | **06:59** ➔ **16:00** | 09:01 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 18/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 19/10 | Seg | **06:52** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:55** | 09:03 | 00:00 | 00:00 | 🟢 Normal |
| 20/10 | Ter | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:51** | 09:01 | 00:00 | 00:00 | 🟢 Normal |
| 21/10 | Qua | **06:51** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:57** | 09:06 | 00:00 | 00:00 | 🟢 Normal |
| 22/10 | Qui | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **17:04** | 09:14 | 00:00 | 00:00 | Extra acima de 10 min |
| 23/10 | Sex | **06:50** ➔ 12:00*(Auto)* ➔ 13:00*(Auto)* ➔ **16:03** | 08:13 | 00:00 | 00:00 | Extra acima de 10 min |
| 24/10 | Sáb | **06:52** ➔ **15:50** | 08:58 | 00:00 | 00:00 | 🔵 Trabalho em Fim de Semana/DSR |
| 25/10 | Dom | *(Sem marcação)* | 00:00 | 00:00 | 00:00 | ⚪ DSR / Folga |
| 26/10 | Seg | **06:49** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🔴 Falta / Inconsistência |
| 27/10 | Ter | **06:49** ➔ **12:00** ➔ **13:00** ➔ **17:30** | 00:00 | 00:00 | -09:00 | 🟡 Em andamento (Jornada de hoje) |


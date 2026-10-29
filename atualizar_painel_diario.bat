@echo off
chcp 65001 >nul
echo ============================================================================
echo   OMNITRADE BRASIL - SINCRONIZADOR DIARIO CONTROL iD (RHiD) + SIENGE ERP
echo   Obra Piloto: 24.152 - GUARNIERI_CORDEBRAS - CAMACARI, BA
echo ============================================================================
echo.
cd /d "%~dp0"
node sync_diario_sienge.js
echo.
echo Abrindo Painel Executivo de Simulacao Sienge...
start "" "simulador_apropriacao_sienge.html"


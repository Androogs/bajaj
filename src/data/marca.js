// =====================================================================
// INFORMACIÓN OFICIAL BAJAJ COLOMBIA (Grupo UMA, distribuidor oficial)
// Consultada en grupouma.com/colombia el 7 de octubre de 2026.
// ⚠️ Revisa estas condiciones periódicamente: cambian por campaña.
// =====================================================================
export const GARANTIA = {
  resumen: '2 años o 30.000 km',
  detalle: 'Lo primero que se cumpla. Aplica a motos vendidas desde el 1 de abril de 2025, con mantenimientos en talleres autorizados y repuestos y aceites originales Bajaj.',
  revisiones: [
    { n: 1, mes: 1, manoObra: 'Gratis' },
    { n: 2, mes: 4, manoObra: 'Gratis' },
    { n: 3, mes: 8, manoObra: 'Gratis' },
    { n: 4, mes: 12, manoObra: 'A cargo del cliente' },
    { n: 5, mes: 16, manoObra: 'A cargo del cliente' },
    { n: 6, mes: 20, manoObra: 'A cargo del cliente' },
    { n: 7, mes: 24, manoObra: 'A cargo del cliente' },
  ],
  nota: 'Los insumos y repuestos de cada revisión son a cargo del cliente.',
  fuente: 'https://grupouma.com/colombia/servicios/',
}

export const CREDITO = {
  // Tasa de referencia publicada para créditos radicados y desembolsados entre el
  // 1 y el 31 de octubre de 2026. Actualízala cada mes.
  tasaMensual: 0.0212,
  tasaTexto: '28,59 % E.A. (2,12 % N.M.)',
  vigencia: 'octubre de 2026',
  plazos: [12, 24, 36, 48, 60, 72],
  aliados: ['ProgreSER', 'Brilla', 'SUFI', 'Banco de Bogotá', 'Interactuar', 'Galgo / Crediorbe', 'Dilo', 'Mi Banco', 'Unidos', 'Vanti', 'Addi'],
  fuente: 'https://grupouma.com/colombia/credito-para-moto/',
}

import { LINEAS, MOTOS } from '../data/motos.js'

const BASE = import.meta.env.BASE_URL

/** Fotos del modelo: public/motos/<slug>/1.webp… + galeriaExtra. */
export const fotosDe = (m) => [
  ...Array.from({ length: m.fotos || 0 }, (_, i) => `${BASE}motos/${m.slug}/${i + 1}.webp`),
  ...(m.galeriaExtra || []).map((p) => `${BASE}motos/${p}`),
]
export const precioDesde = (m) => {
  const p = m.versiones.map((v) => v.precio).filter(Boolean)
  return p.length ? Math.min(...p) : null
}
export const resumenDe = (m) => m.versiones[0].resumen
export const pesos = (n) => (n == null ? 'Consulta el precio' : '$ ' + n.toLocaleString('es-CO'))
export const getMoto = (slug) => MOTOS.find((m) => m.slug === slug)
export const getLinea = (id) => LINEAS.find((l) => l.id === id)
export const porLinea = (id) => MOTOS.filter((m) => m.linea === id)
export const ccNum = (m) => parseFloat(String(resumenDe(m).cc || 0).replace(',', '.'))
export const disponibles = MOTOS.filter((m) => m.disponible !== false)
export const desdeLinea = (id) => {
  const p = porLinea(id).map(precioDesde).filter(Boolean)
  return p.length ? Math.min(...p) : null
}

/** Modelos destacados (cámbialos a tu gusto). */
export const DESTACADOS = ['pulsar-ns400z', 'dominar-400', 'pulsar-ns200', 'pulsar-n160', 'boxer-ct100-ks', 'discover-125']
/** Slider del inicio: un modelo por línea. */
export const SLIDER = [
  { slug: 'pulsar-ns400z', claim: 'La Pulsar más poderosa' },
  { slug: 'dominar-400', claim: 'Hecha para la carretera' },
  { slug: 'pulsar-n160', claim: 'Tecnología hecha potencia' },
  { slug: 'boxer-ct100-ks', claim: 'La propia pa’ ahorrar' },
]

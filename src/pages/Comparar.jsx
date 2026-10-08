import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { LINEAS, MOTOS } from '../data/motos.js'
import { getMoto, getLinea, pesos, precioDesde } from '../utils/catalogo.js'
import PageHead from '../components/PageHead.jsx'
import MotoFoto from '../components/MotoFoto.jsx'
import WaBoton from '../components/WaBoton.jsx'
import { IconClose } from '../components/Icons.jsx'

const s = (m, k) => { for (const g of Object.values(m.versiones[0].specs)) if (g[k]) return g[k]; return '—' }
const FILAS = [
  ['Línea', (m) => getLinea(m.linea).nombre], ['Precio desde*', (m) => pesos(precioDesde(m))],
  ['Versiones', (m) => m.versiones.map((v) => v.nombre).join(' · ')], ['Cilindraje', (m) => s(m, 'Cilindraje')],
  ['Potencia', (m) => s(m, 'Potencia máxima') !== '—' ? s(m, 'Potencia máxima') : s(m, 'Potencia')], ['Torque', (m) => s(m, 'Torque máximo') !== '—' ? s(m, 'Torque máximo') : s(m, 'Torque')],
  ['Alimentación', (m) => s(m, 'Alimentación')], ['Transmisión', (m) => s(m, 'Transmisión')],
  ['Freno delantero', (m) => s(m, 'Freno delantero')], ['Freno trasero', (m) => s(m, 'Freno trasero')],
  ['Suspensión delantera', (m) => s(m, 'Suspensión delantera')], ['Suspensión trasera', (m) => s(m, 'Suspensión trasera')],
  ['Tablero', (m) => s(m, 'Tablero')], ['Peso', (m) => s(m, 'Peso')], ['Tanque', (m) => s(m, 'Tanque')],
]

export default function Comparar() {
  const [sp, setSp] = useSearchParams()
  const sel = useMemo(() => (sp.get('m') || '').split(',').filter(getMoto).slice(0, 3), [sp])
  const motos = sel.map(getMoto)
  const setSlot = (k, v) => { const n = [...sel]; if (v) n[k] = v; else n.splice(k, 1); setSp({ m: n.filter(Boolean).join(',') }) }
  return (
    <>
      <PageHead kicker="Herramienta" titulo="Comparador" crumbs={[{ label: 'Comparar' }]}><p>Pon hasta tres Bajaj lado a lado y decide con datos.</p></PageHead>
      <section className="sec sec--light sec--tight">
        <div className="wrap">
          <div className="cmp">
            <div className="cmp__row cmp__row--head">
              <div className="cmp__lbl" />
              {[0, 1, 2].map((k) => { const m = motos[k]; return (
                <div key={k} className={`cmp__slot ${m ? '' : 'is-empty'}`}>
                  {m ? <>
                    <button className="cmp__x" onClick={() => setSlot(k, null)} aria-label="Quitar"><IconClose width="16" /></button>
                    <MotoFoto moto={m} />
                    <Link to={`/motos/${m.slug}`} className="cmp__name">{m.nombre}</Link>
                  </> : <span className="cmp__plus">+</span>}
                  <select className="select" value={m?.slug || ''} disabled={!m && k > sel.length} onChange={(e) => setSlot(k, e.target.value)} aria-label={`Moto ${k + 1}`}>
                    <option value="">{m ? 'Cambiar moto' : 'Agregar moto'}</option>
                    {LINEAS.map((l) => <optgroup key={l.id} label={l.nombre}>{MOTOS.filter((x) => x.linea === l.id && (!sel.includes(x.slug) || x.slug === m?.slug)).map((x) => <option key={x.slug} value={x.slug}>{x.nombre}</option>)}</optgroup>)}
                  </select>
                </div>) })}
            </div>
            {motos.length > 0 && FILAS.map(([l, fn]) => <div key={l} className="cmp__row"><div className="cmp__lbl">{l}</div>{[0, 1, 2].map((k) => <div key={k} className="cmp__cell">{motos[k] ? fn(motos[k]) : ''}</div>)}</div>)}
            {motos.length > 0 && <div className="cmp__row"><div className="cmp__lbl" />{[0, 1, 2].map((k) => <div key={k} className="cmp__cell">{motos[k] && <WaBoton className="btn btn--red btn--sm" mensaje={`Hola SUMOTO, quiero cotizar la Bajaj ${motos[k].nombre}.`}>Cotizar</WaBoton>}</div>)}</div>}
          </div>
          {motos.length === 0 && <p className="empty">Agrega una moto para comenzar a comparar.</p>}
          <p className="fine">* Precios de referencia. La ficha que se compara es la de la primera versión de cada modelo. "—" = dato no publicado.</p>
        </div>
      </section>
    </>
  )
}

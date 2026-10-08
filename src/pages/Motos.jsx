import { useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { LINEAS, MOTOS } from '../data/motos.js'
import { getLinea, getMoto, porLinea, precioDesde, ccNum, fotosDe } from '../utils/catalogo.js'
import PageHead from '../components/PageHead.jsx'
import TarjetaMoto from '../components/TarjetaMoto.jsx'
import MotoFoto from '../components/MotoFoto.jsx'
import { IconArrow, IconCompare, IconClose, IconSearch } from '../components/Icons.jsx'

const RANGOS = [['', 'Todos'], ['125', 'Hasta 125 cc'], ['200', '126 – 200 cc'], ['400', 'Más de 200 cc']]
const ORDEN = {
  rel: ['Recomendados', () => 0],
  menor: ['Menor precio', (a, b) => (precioDesde(a) ?? 9e12) - (precioDesde(b) ?? 9e12)],
  mayor: ['Mayor precio', (a, b) => (precioDesde(b) ?? 0) - (precioDesde(a) ?? 0)],
  cc: ['Mayor cilindraje', (a, b) => ccNum(b) - ccNum(a)],
}
const enRango = (m, r) => { const c = ccNum(m); return !r || (r === '125' ? c <= 125 : r === '200' ? c > 125 && c <= 200 : c > 200) }

export default function Motos() {
  const [sp, setSp] = useSearchParams()
  const navigate = useNavigate()
  const linea = getLinea(sp.get('linea')) ? sp.get('linea') : ''
  const rango = sp.get('cc') || ''
  const orden = sp.get('orden') || 'rel'
  const q = sp.get('q') || ''
  const [comp, setComp] = useState([])
  const upd = (k, v) => { const n = new URLSearchParams(sp); if (v) n.set(k, v); else n.delete(k); setSp(n, { replace: true }) }
  const toggle = (s) => setComp((c) => (c.includes(s) ? c.filter((x) => x !== s) : c.length < 3 ? [...c, s] : c))

  const lista = useMemo(() => {
    let l = linea ? porLinea(linea) : MOTOS
    l = l.filter((m) => enRango(m, rango))
    if (q) l = l.filter((m) => m.nombre.toLowerCase().includes(q.toLowerCase()))
    return [...l].sort((a, b) => (a.disponible === false) - (b.disponible === false) || ORDEN[orden][1](a, b))
  }, [linea, rango, orden, q])

  const L = linea ? getLinea(linea) : null
  const foto = L ? (porLinea(linea).find((m) => m.fotos) || null) : getMoto('pulsar-ns400z')

  return (
    <>
      <PageHead kicker={L ? 'Línea Bajaj' : 'Catálogo'} titulo={L ? L.nombre : 'Motos Bajaj'}
        crumbs={L ? [{ label: 'Motos', to: '/motos' }, { label: L.nombre }] : [{ label: 'Motos' }]}
        foto={foto ? fotosDe(foto)[0] : null}>
        <p>{L ? L.desc : 'Todo el portafolio Bajaj disponible en nuestra vitrina del Valle del Cauca: Pulsar, Dominar, Boxer, Discover y motocarros.'}</p>
        <Link to="/comparar" className="btn btn--red motos__compare-link">¿No te decides?, Compáralas <IconArrow width="20" height="20" /></Link>
      </PageHead>

      <section className="sec sec--light sec--tight">
        <div className="wrap">
          <div className="seg" role="tablist" aria-label="Líneas">
            <button className={!linea ? 'is-on' : ''} onClick={() => upd('linea', '')}>Todas <small>{MOTOS.length}</small></button>
            {LINEAS.map((l) => <button key={l.id} className={linea === l.id ? 'is-on' : ''} onClick={() => upd('linea', l.id)}>{l.nombre} <small>{porLinea(l.id).length}</small></button>)}
          </div>
          <div className="toolbar">
            <label className="sbox"><IconSearch width="18" /><input value={q} onChange={(e) => upd('q', e.target.value)} placeholder="Buscar modelo" aria-label="Buscar modelo" /></label>
            <div className="chips">{RANGOS.map(([v, t]) => <button key={t} className={rango === v ? 'is-on' : ''} onClick={() => upd('cc', v)}>{t}</button>)}</div>
            <select className="select" value={orden} onChange={(e) => upd('orden', e.target.value === 'rel' ? '' : e.target.value)} aria-label="Ordenar">
              {Object.entries(ORDEN).map(([k, [t]]) => <option key={k} value={k}>{t}</option>)}
            </select>
          </div>
          <p className="count">{lista.length} {lista.length === 1 ? 'modelo' : 'modelos'}</p>
          <div className="grid">
            {lista.map((m) => <TarjetaMoto key={m.slug} moto={m} onComparar={toggle} comparando={comp.includes(m.slug)} />)}
            {lista.length === 0 && <div className="empty"><p>No hay modelos con esos filtros.</p><button className="btn btn--blue btn--sm" onClick={() => setSp({})}>Limpiar filtros</button></div>}
          </div>
          <p className="fine">* Precios de referencia del distribuidor oficial Bajaj en Colombia (Grupo UMA), consultados en octubre de 2026. No incluyen matrícula, SOAT ni seguros. Sujetos a cambio sin previo aviso.</p>
        </div>
      </section>

      {comp.length > 0 && (
        <div className="cbar">
          <div className="wrap cbar__in">
            <div className="cbar__items">
              {comp.map((s) => { const m = getMoto(s); return (
                <span key={s} className="cbar__it"><MotoFoto moto={m} /> {m.nombre}<button onClick={() => toggle(s)} aria-label="Quitar"><IconClose width="14" height="14" /></button></span>
              ) })}
              <small>{comp.length}/3</small>
            </div>
            <button className="btn btn--red btn--sm" disabled={comp.length < 2} onClick={() => navigate(`/comparar?m=${comp.join(',')}`)}><IconCompare width="18" /> Comparar</button>
          </div>
        </div>
      )}
    </>
  )
}

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GARANTIA } from '../data/marca.js'
import { getMoto, getLinea, porLinea, pesos, fotosDe } from '../utils/catalogo.js'
import MotoFoto from '../components/MotoFoto.jsx'
import TarjetaMoto from '../components/TarjetaMoto.jsx'
import WaBoton from '../components/WaBoton.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { IconCard, IconCompare, IconCheck, IconEngine, IconBolt, IconGauge, IconDrop, IconWeight, IconShield } from '../components/Icons.jsx'
import NoEncontrada from './NoEncontrada.jsx'
import { useSede } from '../components/SedeSelector.jsx'

export default function Ficha() {
  const { sedeActiva } = useSede()
  const { slug } = useParams()
  const moto = getMoto(slug)
  const [vi, setVi] = useState(0)
  const [foto, setFoto] = useState(0)
  const [tab, setTab] = useState(0)
  if (!moto) return <NoEncontrada />

  const v = moto.versiones[vi]
  const r = v.resumen
  const linea = getLinea(moto.linea)
  const fotos = fotosDe(moto)
  const grupos = Object.entries(v.specs)
  const g = grupos[Math.min(tab, grupos.length - 1)]
  const otras = porLinea(moto.linea).filter((m) => m.slug !== moto.slug && m.disponible !== false).slice(0, 3)
  const nombre = `Bajaj ${moto.nombre}${moto.versiones.length > 1 ? ` ${v.nombre}` : ''}`
  const kpis = [[IconEngine, r.cc, 'cc'], [IconBolt, r.hp, 'hp'], [IconGauge, r.nm, 'Nm'], [IconDrop, r.tanque, 'L tanque'], [IconWeight, r.peso, 'kg']].filter(([, x]) => x)

  return (
    <>
      <section className="fx">
        <div className="fx__glow" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumbs" aria-label="Ruta">
            <Link to="/">Inicio</Link><Link to={`/motos?linea=${linea.id}`}>{linea.nombre}</Link><span>{moto.nombre}</span>
          </nav>
          <div className="fx__g">
            <div className="fx__gal">
              <div className="fx__stage">
                <span className="fx__word" aria-hidden="true">{linea.nombre}</span>
                <MotoFoto key={foto} moto={moto} i={foto} eager />
              </div>
              {fotos.length > 1 && (
                <div className="fx__thumbs">
                  {fotos.map((src, k) => <button key={src} className={k === foto ? 'is-on' : ''} onClick={() => setFoto(k)} aria-label={`Foto ${k + 1}`}><img src={src} alt="" /></button>)}
                </div>
              )}
            </div>
            <aside className="fx__info">
              <span className="kicker">Línea {linea.nombre}</span>
              <h1 className="h1">{moto.nombre}</h1>
              {moto.lema && <p className="fx__lema">“{moto.lema}”</p>}
              {moto.disponible === false && <p className="alerta">Este modelo no aparece en el catálogo vigente. Consulta disponibilidad con un asesor.</p>}

              {moto.versiones.length > 1 && (
                <div className="fx__vers" role="radiogroup" aria-label="Versión">
                  {moto.versiones.map((x, k) => (
                    <button key={x.nombre} role="radio" aria-checked={k === vi} className={k === vi ? 'is-on' : ''} onClick={() => { setVi(k); setTab(0) }}>
                      <b>{x.nombre}</b><small>{pesos(x.precio)}</small>
                    </button>
                  ))}
                </div>
              )}

              <div className="fx__kpis">{kpis.map(([I, val, u]) => <div key={u}><I /><b>{val}</b><small>{u}</small></div>)}</div>

              <div className="pbox">
                <small>{v.precio ? 'Precio de referencia' : 'Precio'}</small>
                <strong>{pesos(v.precio)}{v.precio ? '*' : ''}</strong>
                <p>* Precio publicado por el distribuidor oficial Bajaj en Colombia. No incluye matrícula, SOAT ni seguros. Sujeto a cambio sin previo aviso.</p>
              </div>
              {v.colores?.length > 0 && <p className="fx__colors"><span>Colores:</span> {v.colores.map((c) => <em key={c}>{c}</em>)}</p>}

              <div className="fx__ctas">
                <WaBoton className="btn btn--red btn--block" mensaje={`Hola SUMOTO, quiero cotizar la ${nombre}.`}>Cotizar por WhatsApp</WaBoton>
                <div className="fx__ctas2">
                  <Link className="btn btn--ghost" to={`/financiacion?moto=${moto.slug}&v=${vi}`}><IconCard /> Simular crédito</Link>
                  <Link className="btn btn--ghost" to={`/comparar?m=${moto.slug}`}><IconCompare /> Comparar</Link>
                </div>
              </div>
              <p className="fx__war"><IconShield width="18" /> Garantía Bajaj {GARANTIA.resumen}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec sec--light">
        <div className="wrap fx__detail">
          <div>
            <span className="kicker kicker--blue">Por qué elegirla</span>
            <h2 className="h2 h2--ink">{moto.nombre}</h2>
            {moto.descripcion && <p className="fx__desc">{moto.descripcion}</p>}
            {moto.destacados.length > 0 && <ul className="feats">{moto.destacados.map((d) => <li key={d}><IconCheck /> {d}</li>)}</ul>}
          </div>
          <div>
            <span className="kicker kicker--blue">Ficha técnica{moto.versiones.length > 1 ? ` · ${v.nombre}` : ''}</span>
            <h2 className="h2 h2--ink">Especificaciones</h2>
            <div className="tabs" role="tablist">
              {grupos.map(([n], k) => <button key={n} role="tab" aria-selected={k === tab} className={k === tab ? 'is-on' : ''} onClick={() => setTab(k)}>{n}</button>)}
            </div>
            <dl className="specs" key={`${vi}-${tab}`}>
              {Object.entries(g[1]).map(([k, val]) => <div key={k}><dt>{k}</dt><dd>{val}</dd></div>)}
            </dl>
            <p className="fine">{v.fuente ? <>Fuente: <a href={v.fuente} target="_blank" rel="noopener noreferrer">ficha oficial Bajaj Colombia (Grupo UMA)</a>.</> : 'Ficha de referencia; contrástala con la ficha oficial antes de publicar.'} Especificaciones sujetas a cambio por el fabricante.</p>
          </div>
        </div>
      </section>

      <section className="sec sec--dark">
        <div className="wrap fx__bottom">
          <div>
            <span className="kicker">Pruébala en {sedeActiva.ciudad.split(',')[0]}</span>
            <h2 className="h2">Agenda tu prueba de manejo</h2>
            <p className="muted">Ven a la vitrina y siente la {moto.nombre} antes de decidir.</p>
            <LeadForm asunto={`Prueba de manejo – ${nombre}`} boton="Agendar prueba" initial={{ moto: nombre }}
              fields={[{ name: 'nombre', label: 'Nombre completo', required: true, full: true }, { name: 'celular', label: 'Celular', type: 'tel', required: true }, { name: 'fecha', label: 'Fecha preferida', type: 'date' }, { name: 'moto', label: 'Moto', full: true }]} />
          </div>
          {otras.length > 0 && <div><h3 className="h3">Más de la línea {linea.nombre}</h3><div className="grid grid--3">{otras.map((m) => <TarjetaMoto key={m.slug} moto={m} />)}</div></div>}
        </div>
      </section>
    </>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LINEAS } from '../data/motos.js'
import { GARANTIA, CREDITO } from '../data/marca.js'
import { getMoto, getLinea, porLinea, pesos, precioDesde, resumenDe, desdeLinea, disponibles, DESTACADOS, SLIDER } from '../utils/catalogo.js'
import MotoFoto from '../components/MotoFoto.jsx'
import TarjetaMoto from '../components/TarjetaMoto.jsx'
import WaBoton from '../components/WaBoton.jsx'
import useReveal from '../components/useReveal.js'
import { IconArrow, IconShield, IconCard, IconWrench, IconBox, LineaIcon } from '../components/Icons.jsx'
import { useSede } from '../components/SedeSelector.jsx'

const MS = 6500

export default function Inicio() {
  const { sedeActiva } = useSede()
  const [i, setI] = useState(0)
  const [pausa, setPausa] = useState(false)
  useReveal()
  useEffect(() => {
    if (pausa) return
    const t = setTimeout(() => setI((i + 1) % SLIDER.length), MS)
    return () => clearTimeout(t)
  }, [i, pausa])
  const s = SLIDER[i]
  const m = getMoto(s.slug)
  const r = resumenDe(m)
  const destacados = DESTACADOS.map(getMoto).filter(Boolean)

  return (
    <>
      <section className="hero" onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}>
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__word" aria-hidden="true" key={`w${i}`}>{getLinea(m.linea).nombre}</div>
        <div className="wrap hero__in">
          <div className="hero__copy" key={`c${i}`}>
            <span className="kicker">Concesionario autorizado Bajaj · {sedeActiva.ciudad.split(',')[0]}</span>
            <p className="hero__claim">{s.claim}</p>
            <h1 className="h-hero">{m.nombre}</h1>
            <div className="hud">
              <div><small>Cilindraje</small><b>{r.cc}<i>cc</i></b></div>
              <div><small>Potencia</small><b>{r.hp}<i>hp</i></b></div>
              <div><small>Torque</small><b>{r.nm}<i>Nm</i></b></div>
            </div>
            <div className="hero__price"><small>{m.versiones.length > 1 ? 'Desde' : 'Precio'}</small><b>{pesos(precioDesde(m))}*</b></div>
            <div className="hero__ctas">
              <Link to={`/motos/${m.slug}`} className="btn btn--red">Ver ficha <IconArrow /></Link>
              <WaBoton className="btn btn--ghost" mensaje={`Hola SUMOTO, quiero cotizar la Bajaj ${m.nombre}.`}>Cotizar</WaBoton>
            </div>
          </div>
          <div className="hero__media" key={`m${i}`}>
            <div className="hero__ring" aria-hidden="true" />
            <MotoFoto moto={m} eager />
          </div>
        </div>
        <div className="wrap hero__tabs" role="tablist" aria-label="Modelos destacados">
          {SLIDER.map((x, k) => {
            const mm = getMoto(x.slug)
            return (
              <button key={x.slug} role="tab" aria-selected={k === i} className={`hero__tab ${k === i ? 'is-on' : ''}`} onClick={() => setI(k)}>
                <span>{getLinea(mm.linea).nombre}</span><b>{mm.nombre}</b>
                <i className="hero__bar"><em style={{ animationDuration: `${MS}ms`, animationPlayState: pausa ? 'paused' : 'running' }} /></i>
              </button>
            )
          })}
        </div>
      </section>

      <section className="sec sec--dark">
        <div className="wrap">
          <div className="sec__head reveal">
            <div><span className="kicker">Familias Bajaj</span><h2 className="h2">Elige tu línea</h2></div>
            <Link to="/motos" className="link">Ver los {disponibles.length} modelos <IconArrow width="18" /></Link>
          </div>
          <div className="lineas">
            {LINEAS.map((l, k) => {
              const lista = porLinea(l.id)
              const top = [...lista].filter((x) => x.fotos).sort((a, b) => (precioDesde(b) || 0) - (precioDesde(a) || 0))[0] || lista[0]
              const Ic = LineaIcon[l.id]
              return (
                <Link key={l.id} to={`/motos?linea=${l.id}`} className={`linea reveal ${k === 0 ? 'linea--big' : ''}`} style={{ '--d': `${k * 70}ms` }}>
                  <div className="linea__txt">
                    <Ic width="28" height="28" />
                    <h3>{l.nombre}</h3>
                    <p>{l.desc}</p>
                    <small>{lista.length} {lista.length === 1 ? 'modelo' : 'modelos'} · desde {pesos(desdeLinea(l.id))}*</small>
                  </div>
                  <MotoFoto moto={top} />
                  <span className="linea__go"><IconArrow /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="sec sec--light">
        <div className="wrap">
          <div className="sec__head reveal">
            <div><span className="kicker kicker--blue">Vitrina {sedeActiva.ciudad.split(',')[0]}</span><h2 className="h2">Las más buscadas</h2></div>
            <Link to="/comparar" className="link link--blue">Comparar modelos <IconArrow width="18" /></Link>
          </div>
          <div className="grid">{destacados.map((x) => <TarjetaMoto key={x.slug} moto={x} />)}</div>
          <p className="fine">* Precio de referencia publicado por el distribuidor oficial Bajaj en Colombia. No incluye matrícula, SOAT ni seguros.</p>
        </div>
      </section>

      <section className="sec sec--blue">
        <div className="wrap why">
          <div className="why__intro reveal">
            <span className="kicker">Por qué SUMOTO</span>
            <h2 className="h2">Compras aquí, la mantienes aquí</h2>
            <p>Vitrina, almacén de repuestos originales y taller autorizado en {sedeActiva.ciudad}.</p>
            <WaBoton className="btn btn--red" mensaje="Hola SUMOTO, quiero agendar una visita a la vitrina.">Agenda tu visita</WaBoton>
          </div>
          {[
            [IconShield, `Garantía ${GARANTIA.resumen}`, 'Garantía de fábrica Bajaj, con revisiones en nuestro taller autorizado.', '/taller'],
            [IconCard, 'Crédito a tu medida', `Plazos hasta ${Math.max(...CREDITO.plazos)} meses con ${CREDITO.aliados.length} entidades aliadas.`, '/financiacion'],
            [IconWrench, 'Taller autorizado', 'Técnicos certificados, herramienta especializada y diagnóstico de inyección.', '/taller'],
            [IconBox, 'Repuestos originales', 'Inventario para Pulsar, Boxer, Discover y Dominar, con envíos a todo el país.', '/repuestos'],
          ].map(([Ic, t, d, to], k) => (
            <Link key={t} to={to} className="why__card reveal" style={{ '--d': `${k * 70}ms` }}>
              <span className="why__ic"><Ic /></span><h3>{t}</h3><p>{d}</p>
              <span className="link">Ver más <IconArrow width="14" height="14" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

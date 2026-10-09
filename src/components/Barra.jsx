import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import MotoFoto from './MotoFoto.jsx'
import WaBoton from './WaBoton.jsx'
import { LINEAS } from '../data/motos.js'
import { SUMOTO } from '../data/sumoto.js'
import { porLinea, pesos, precioDesde, desdeLinea } from '../utils/catalogo.js'
import { IconDown, IconMenu, IconClose, IconPin, IconMail, IconArrow } from './Icons.jsx'
import { useSede } from './SedeSelector.jsx'

const PAGINAS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/motos', label: 'Motos', mega: true },
  { to: '/repuestos', label: 'Repuestos' },
  { to: '/taller', label: 'Taller' },
  { to: '/financiacion', label: 'Financiación' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Barra() {
  const [abierto, setAbierto] = useState(false)
  const [mega, setMega] = useState(false)
  const [scroll, setScroll] = useState(false)
  const { pathname } = useLocation()
  const { sedeActiva, abrirSelector, selectorAbierto } = useSede()
  useEffect(() => { setAbierto(false); setMega(false) }, [pathname])
  useEffect(() => {
    const f = () => setScroll(window.scrollY > 8)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => { document.body.style.overflow = abierto || selectorAbierto ? 'hidden' : '' }, [abierto, selectorAbierto])

  return (
    <header className={`nav ${scroll ? 'is-scroll' : ''}`}>
      <div className="nav__cinta">
        <div className="wrap nav__cintaIn">
          <div className="nav__location">
            <span><IconPin width="14" height="14" /> {sedeActiva.direccion}, {sedeActiva.ciudad}</span>
            <button type="button" className="nav__changeSede" onClick={abrirSelector}>Cambiar sede</button>
          </div>
          <span className="nav__hideSm"><IconMail width="14" height="14" /> {SUMOTO.correo}</span>
        </div>
      </div>
      <div className="wrap nav__bar">
        <Logo />
        <nav className="nav__links" aria-label="Principal">
          {PAGINAS.map((p) => p.mega ? (
            <div key={p.to} className="nav__item" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
              <NavLink to={p.to} aria-expanded={mega} onFocus={() => setMega(true)} className={({ isActive }) => `nav__link ${isActive ? 'is-on' : ''}`}>
                {p.label} <IconDown width="14" height="14" />
              </NavLink>
              <Mega visible={mega} />
            </div>
          ) : (
            <NavLink key={p.to} to={p.to} end={p.end} className={({ isActive }) => `nav__link ${isActive ? 'is-on' : ''}`}>{p.label}</NavLink>
          ))}
        </nav>
        <WaBoton className="btn btn--red btn--sm nav__cta" mensaje="Hola SUMOTO, quiero cotizar una moto Bajaj.">Cotizar</WaBoton>
        <button className="nav__burger" aria-expanded={abierto} aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setAbierto(!abierto)}>
          {abierto ? <IconClose width="26" height="26" /> : <IconMenu width="26" height="26" />}
        </button>
      </div>

      <div className={`drawer ${abierto ? 'is-open' : ''}`}>
        <nav className="drawer__in" aria-label="Móvil">
          {PAGINAS.map((p, i) => (
            <NavLink key={p.to} to={p.to} end={p.end} style={{ '--i': i }} className={({ isActive }) => `drawer__link ${isActive ? 'is-on' : ''}`}>{p.label}</NavLink>
          ))}
          <div className="drawer__chips">
            {LINEAS.map((l) => <Link key={l.id} to={`/motos?linea=${l.id}`}>{l.nombre}</Link>)}
          </div>
          <WaBoton className="btn btn--red btn--block" mensaje="Hola SUMOTO, quiero cotizar una moto Bajaj.">Cotizar por WhatsApp</WaBoton>
        </nav>
      </div>
    </header>
  )
}

function Mega({ visible }) {
  const [linea, setLinea] = useState(LINEAS[0].id)
  const lista = porLinea(linea)
  return (
    <div className={`mega ${visible ? 'is-visible' : ''}`}>
      <div className="wrap mega__in">
        <ul className="mega__lineas">
          {LINEAS.map((l) => {
            return (
              <li key={l.id}>
                <Link to={`/motos?linea=${l.id}`} onMouseEnter={() => setLinea(l.id)} className={linea === l.id ? 'is-on' : ''}>
                  <span><b>{l.nombre}</b><small>{porLinea(l.id).length} {porLinea(l.id).length === 1 ? 'modelo' : 'modelos'} · desde {pesos(desdeLinea(l.id))}</small></span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="mega__grid">
          {lista.slice(0, 8).map((m) => (
            <Link key={m.slug} to={`/motos/${m.slug}`} className="mega__moto">
              <MotoFoto moto={m} />
              <b>{m.nombre}</b>
              <small>{pesos(precioDesde(m))}</small>
            </Link>
          ))}
          <Link to={`/motos?linea=${linea}`} className="mega__all">Ver línea completa <IconArrow width="16" height="16" /></Link>
        </div>
      </div>
    </div>
  )
}

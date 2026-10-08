import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { LINEAS } from '../data/motos.js'
import { SUMOTO } from '../data/sumoto.js'
import { GARANTIA, CREDITO } from '../data/marca.js'
import { IconPin, IconMail, IconPhone, IconClock, IconShield } from './Icons.jsx'
import { useSede } from './SedeSelector.jsx'

export default function Footer() {
  const { sedeActiva } = useSede()
  return (
    <footer className="pie">
      <div className="pie__band">
        <div className="wrap pie__bandIn">
          <span><IconShield width="22" height="22" /> Garantía Bajaj {GARANTIA.resumen}</span>
          <span>Repuestos originales</span>
          <span>Taller autorizado</span>
          <span>Crédito con {CREDITO.aliados.length} entidades aliadas</span>
        </div>
      </div>
      <div className="wrap pie__g">
        <div className="pie__brand">
          <Logo />
          <p>{SUMOTO.nombre} · {SUMOTO.eslogan} en {sedeActiva.ciudad}. Venta de motos nuevas, repuestos originales, taller y financiación.</p>
          <small>{SUMOTO.nit}</small>
        </div>
        <div>
          <h6>Motos</h6>
          <ul>{LINEAS.map((l) => <li key={l.id}><Link to={`/motos?linea=${l.id}`}>{l.nombre}</Link></li>)}<li><Link to="/comparar">Comparador</Link></li></ul>
        </div>
        <div>
          <h6>Servicios</h6>
          <ul>
            <li><Link to="/repuestos">Repuestos</Link></li>
            <li><Link to="/taller">Taller</Link></li>
            <li><Link to="/financiacion">Financiación</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
          </ul>
        </div>
        <div>
          <h6>Visítanos</h6>
          <ul className="pie__c">
            {SUMOTO.sedes.map((sede) => (
              <li key={sede.ciudad}><IconPin width="16" height="16" /><a href={sede.mapaLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${sede.direccion}, ${sede.ciudad}`)}`} target="_blank" rel="noopener noreferrer">{sede.ciudad}: {sede.direccion}</a></li>
            ))}
            <li><IconMail width="16" height="16" /><a href={`mailto:${SUMOTO.correo}`}>{SUMOTO.correo}</a></li>
            <li><IconClock width="16" height="16" />{SUMOTO.horario}</li>
          </ul>
        </div>
      </div>
      <div className="wrap pie__legal">
        <p>© {new Date().getFullYear()} {SUMOTO.nombre} Concesionario autorizado Bajaj. Todos los derechos reservados.</p>
        <p>Precios de referencia publicados por el distribuidor oficial Bajaj en Colombia, sujetos a cambio sin previo aviso. No incluyen matrícula, SOAT ni seguros. Imágenes de referencia.</p>
        <p><Link to="/contacto#datos">Política de tratamiento de datos personales (Ley 1581 de 2012)</Link></p>
      </div>
    </footer>
  )
}

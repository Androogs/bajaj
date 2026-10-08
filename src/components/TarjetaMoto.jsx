import { Link } from 'react-router-dom'
import MotoFoto from './MotoFoto.jsx'
import { pesos, precioDesde, resumenDe, getLinea } from '../utils/catalogo.js'
import { IconArrow } from './Icons.jsx'

export default function TarjetaMoto({ moto, onComparar, comparando }) {
  const r = resumenDe(moto)
  const p = precioDesde(moto)
  return (
    <article className={`tm ${moto.disponible === false ? 'tm--off' : ''}`}>
      <Link to={`/motos/${moto.slug}`} className="tm__media" aria-label={`Ver Bajaj ${moto.nombre}`}>
        <span className="tm__linea">{getLinea(moto.linea).nombre}</span>
        {moto.versiones.length > 1 && <span className="tm__ver">{moto.versiones.length} versiones</span>}
        {moto.disponible === false && <span className="tm__ver tm__ver--warn">Consulta disponibilidad</span>}
        <span className="tm__cc" aria-hidden="true">{String(r.cc || '').split(',')[0]}</span>
        <MotoFoto moto={moto} />
      </Link>
      <div className="tm__body">
        <h3>{moto.nombre}</h3>
        <ul className="tm__hud">
          <li><b>{r.cc}</b><small>cc</small></li>
          <li><b>{r.hp}</b><small>hp</small></li>
          <li><b>{r.nm}</b><small>Nm</small></li>
        </ul>
      </div>
      <div className="tm__foot">
        <div><small>{p ? (moto.versiones.length > 1 ? 'Desde' : 'Precio') : ' '}</small><strong>{pesos(p)}{p ? '*' : ''}</strong></div>
        <Link to={`/motos/${moto.slug}`} className="tm__go" aria-label="Ver ficha"><IconArrow /></Link>
      </div>
      {onComparar && (
        <label className={`tm__cmp ${comparando ? 'is-on' : ''}`}>
          <input type="checkbox" checked={comparando} onChange={() => onComparar(moto.slug)} /> Comparar
        </label>
      )}
    </article>
  )
}

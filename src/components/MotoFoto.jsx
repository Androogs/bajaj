import { fotosDe } from '../utils/catalogo.js'
import { LineaIcon } from './Icons.jsx'

/** Foto del modelo o ilustración si todavía no hay fotos cargadas. */
export default function MotoFoto({ moto, i = 0, className = '', eager = false }) {
  const f = fotosDe(moto)
  if (f.length) return <img className={`mfoto ${className}`} src={f[i] || f[0]} alt={`Bajaj ${moto.nombre}`} loading={eager ? 'eager' : 'lazy'} />
  const Ic = LineaIcon[moto.linea]
  return (
    <div className={`mfoto mfoto--ph ${className}`} role="img" aria-label={`Bajaj ${moto.nombre} (foto pendiente)`}>
      <Ic className="mfoto__ic" />
      <span>Foto próximamente</span>
    </div>
  )
}

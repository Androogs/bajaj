import { Link } from 'react-router-dom'

export default function Logo({ variante = 'blanco' }) {
  return (
    <Link to="/" className="logo" aria-label="SUMOTO S.A. – Bajaj - Valle, ir al inicio">
      <img src={`/motos/logos/logo_${variante}.png`} alt="Bajaj" />
      <span className="logo__div" aria-hidden="true" />
      <span className="logo__txt"><b>SUMOTO S.A.</b><small>Concesionario autorizado · Valle</small></span>
    </Link>
  )
}

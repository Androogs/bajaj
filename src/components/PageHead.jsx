import { Link } from 'react-router-dom'

export default function PageHead({ kicker, titulo, children, crumbs = [], foto, acciones }) {
  return (
    <section className="ph">
      <div className="ph__glow" aria-hidden="true" />
      <div className="wrap ph__in">
        <div className="ph__txt">
          <nav className="crumbs" aria-label="Ruta">
            <Link to="/">Inicio</Link>
            {crumbs.map((c) => (c.to ? <Link key={c.label} to={c.to}>{c.label}</Link> : <span key={c.label}>{c.label}</span>))}
          </nav>
          {kicker && <span className="kicker">{kicker}</span>}
          <h1 className="h1">{titulo}</h1>
          {children && <div className="ph__lead">{children}</div>}
          {acciones && <div className="ph__act">{acciones}</div>}
        </div>
      </div>
    </section>
  )
}

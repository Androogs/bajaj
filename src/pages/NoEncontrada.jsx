import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <section className="nf"><div className="wrap">
      <span className="nf__c">404</span>
      <h1 className="h2">Te saliste de la ruta</h1>
      <p className="muted">La página que buscas no existe o cambió de dirección.</p>
      <Link to="/" className="btn btn--red">Volver al inicio</Link>
    </div></section>
  )
}

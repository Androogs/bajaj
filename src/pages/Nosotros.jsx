import PageHead from '../components/PageHead.jsx'
import WaBoton from '../components/WaBoton.jsx'
import { SUMOTO } from '../data/sumoto.js'
import { GARANTIA, CREDITO } from '../data/marca.js'
import { MOTOS } from '../data/motos.js'
import { getMoto, fotosDe } from '../utils/catalogo.js'

const COMO = [
  'Asesoría según tu recorrido diario, no según la moto que más nos convenga vender.',
  'Prueba de manejo disponible para los modelos en vitrina.',
  'Trámite de matrícula y SOAT gestionado por nosotros.',
  'Historial de mantenimientos registrado para respaldar tu garantía.',
]

export default function Nosotros() {
  return (
    <>
      <PageHead kicker={SUMOTO.eslogan} titulo="Sobre SUMOTO S.A." crumbs={[{ label: 'Nosotros' }]} foto={fotosDe(getMoto('dominar-400'))[0]}>
        <p>Concesionario autorizado Bajaj en el Valle del Cauca. Vendemos, financiamos y mantenemos motos Bajaj bajo el estándar de la marca.</p>
      </PageHead>
      <section className="sec sec--light">
        <div className="wrap duo">
          <div className="prose">
            <span className="kicker kicker--blue">Quiénes somos</span>
            <h2 className="h2 h2--ink">Bajaj en el centro del Valle</h2>
            <p>SUMOTO S.A. atiende a los motociclistas del centro del Valle del Cauca con el respaldo de Bajaj, una de las marcas de mayor rotación en Colombia por su costo de mantenimiento y disponibilidad de repuestos.</p>
            <p>En un mismo lugar encuentras vitrina de motos nuevas, almacén de repuestos originales y taller con técnicos certificados. Eso significa que la moto que compras aquí se mantiene aquí, sin perder la garantía de fábrica.</p>
            <h3 className="h3 h3--ink">Cómo trabajamos</h3>
            <ul className="checks checks--ink">{COMO.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div>
            <div className="stats">
              <div><b>{MOTOS.filter((m) => m.disponible !== false).length}</b><span>modelos en catálogo</span></div>
              <div><b>{GARANTIA.resumen.split(' o ')[0]}</b><span>o {GARANTIA.resumen.split(' o ')[1]} de garantía</span></div>
              <div><b>3</b><span>servicios: venta, taller y repuestos</span></div>
              <div><b>{CREDITO.aliados.length}</b><span>entidades de crédito aliadas</span></div>
            </div>
            <div className="dcard">
              <h3>Datos de la empresa</h3>
              <dl>
                <div><dt>Razón social</dt><dd>{SUMOTO.nombre}</dd></div>
                <div><dt>NIT</dt><dd>{SUMOTO.nit.replace('NIT ', '')}</dd></div>
                <div><dt>Ciudad</dt><dd>{SUMOTO.ciudad}</dd></div>
                <div><dt>Sedes</dt><dd>{SUMOTO.sedes.map((sede) => `${sede.ciudad}: ${sede.direccion}`).join(' · ')}</dd></div>
                <div><dt>Horario</dt><dd>{SUMOTO.horario}</dd></div>
                <div><dt>Garantía</dt><dd>{GARANTIA.resumen}</dd></div>
              </dl>
              <WaBoton className="btn btn--red btn--block" mensaje="Hola SUMOTO, quiero más información del concesionario.">Hablar con un asesor</WaBoton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

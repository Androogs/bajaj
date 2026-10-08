import PageHead from '../components/PageHead.jsx'
import WaBoton from '../components/WaBoton.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { MOTOS } from '../data/motos.js'
import { GARANTIA } from '../data/marca.js'
import { IconWrench, IconShield, IconEngine, IconGauge, IconDrop, IconCalendar } from '../components/Icons.jsx'

const SERVICIOS = [
  [IconWrench, 'Mantenimiento preventivo', 'Cambio de aceite, filtros, ajuste de válvulas, sincronización y revisión de frenos según el kilometraje.'],
  [IconShield, 'Revisiones de garantía', 'Las revisiones incluidas en tu garantía de fábrica, registradas en el sistema de Bajaj.'],
  [IconEngine, 'Mecánica correctiva', 'Diagnóstico y reparación de motor, transmisión, sistema eléctrico e inyección electrónica.'],
  [IconGauge, 'Llantas y frenos', 'Montaje, balanceo, cambio de pastillas, rectificado de discos y purga del sistema hidráulico.'],
  [IconDrop, 'Lavado y alistamiento', 'Lavado técnico, engrase de cadena y alistamiento antes de viaje.'],
]

export default function Taller() {
  return (
    <>
      <PageHead kicker="Servicio" titulo="Taller autorizado" crumbs={[{ label: 'Taller' }]}
        acciones={<WaBoton tipo="taller" className="btn btn--red" mensaje="Hola SUMOTO, quiero agendar una cita en el taller.">Agendar cita</WaBoton>}>
        <p>Técnicos certificados por Bajaj, herramienta especializada y repuestos originales. Tu garantía se mantiene intacta.</p>
      </PageHead>
      <section className="sec sec--light">
        <div className="wrap">
          <div className="sec__head"><div><span className="kicker kicker--blue">Lo que hacemos</span><h2 className="h2 h2--ink">Servicios</h2></div></div>
          <div className="cards3">{SERVICIOS.map(([I, t, d]) => <div key={t} className="icard"><span className="icard__ic"><I /></span><h3>{t}</h3><p>{d}</p></div>)}</div>
        </div>
      </section>
      <section className="sec sec--blue">
        <div className="wrap duo">
          <div>
            <span className="kicker">Garantía Bajaj</span>
            <h2 className="h2">{GARANTIA.resumen}</h2>
            <p className="muted">{GARANTIA.detalle}</p>
            <div className="timeline">
              {GARANTIA.revisiones.map((r) => (
                <div key={r.n} className={`timeline__it ${r.manoObra === 'Gratis' ? 'is-free' : ''}`}>
                  <b>Mes {r.mes}</b><span>Revisión {r.n}</span><small>Mano de obra: {r.manoObra}</small>
                </div>
              ))}
            </div>
            <p className="fine">{GARANTIA.nota} Tu manual del propietario indica el kilometraje de cada revisión. <a href={GARANTIA.fuente} target="_blank" rel="noopener noreferrer">Condiciones oficiales</a>.</p>
          </div>
          <LeadForm tipo="taller" titulo={<><IconCalendar /> Agenda tu cita</>} asunto="Cita de taller" boton="Agendar por WhatsApp"
            fields={[{ name: 'nombre', label: 'Nombre', required: true, full: true }, { name: 'celular', label: 'Celular', type: 'tel', required: true }, { name: 'placa', label: 'Placa' },
              { name: 'moto', label: 'Modelo', type: 'select', options: MOTOS.map((m) => m.nombre).concat('Otro') }, { name: 'km', label: 'Kilometraje' },
              { name: 'servicio', label: 'Servicio', type: 'select', options: ['Revisión de garantía', 'Mantenimiento preventivo', 'Mecánica correctiva', 'Llantas y frenos', 'Lavado y alistamiento'], full: true },
              { name: 'fecha', label: 'Fecha preferida', type: 'date', full: true }]} />
        </div>
      </section>
    </>
  )
}

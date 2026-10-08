import PageHead from '../components/PageHead.jsx'
import WaBoton from '../components/WaBoton.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { MOTOS } from '../data/motos.js'
import { IconEngine, IconShield, IconBolt, IconBox, IconGauge, IconCheck, IconArrow } from '../components/Icons.jsx'

const CATEGORIAS = [
  [IconEngine, 'Motor y transmisión', 'Kits de arrastre, pistones, empaques, embragues y filtros de aceite originales Bajaj.'],
  [IconShield, 'Frenos y suspensión', 'Pastillas, bandas, discos, bombas, amortiguadores y retenedores para toda la línea.'],
  [IconBolt, 'Eléctricos', 'Baterías, CDI, bobinas, reguladores, arranques y luces LED homologadas.'],
  [IconBox, 'Carrocería y plásticos', 'Carenajes, guardabarros, tanques y calcomanías originales por modelo y color.'],
  [IconGauge, 'Llantas y rines', 'Llantas para uso urbano, carretera y mixto, con montaje y balanceo en el taller.'],
  [IconCheck, 'Accesorios', 'Cascos certificados, baúles, defensas, protectores de motor, guantes e impermeables.'],
]
const PASOS = [
  'Escríbenos por WhatsApp con el modelo y el año de tu moto.',
  'Si lo tienes, envía el número de chasis para confirmar la referencia exacta.',
  'Te confirmamos precio, existencia y tiempo de entrega el mismo día.',
  'Recoges en el almacén o lo instalamos directamente en el taller.',
]

export default function Repuestos() {
  return (
    <>
      <PageHead kicker="Almacén" titulo="Repuestos originales" crumbs={[{ label: 'Repuestos' }]}
        acciones={<WaBoton tipo="taller" className="btn btn--red" mensaje="Hola SUMOTO, necesito cotizar un repuesto. Mi moto es:">Cotizar un repuesto</WaBoton>}>
        <p>Trabajamos únicamente con partes originales Bajaj. Cada repuesto conserva la garantía de tu moto y se instala bajo la especificación del fabricante.</p>
      </PageHead>
      <section className="sec sec--light">
        <div className="wrap">
          <div className="sec__head"><div><span className="kicker kicker--blue">Mostrador</span><h2 className="h2 h2--ink">Qué encuentras</h2></div><p className="muted-ink">Inventario permanente para Pulsar, Boxer, Discover y Dominar.</p></div>
          <div className="cards3">
            {CATEGORIAS.map(([I, t, d]) => <div key={t} className="icard"><span className="icard__ic"><I /></span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>
      <section className="sec sec--dark">
        <div className="wrap duo">
          <div>
            <span className="kicker">Así de fácil</span>
            <h2 className="h2">Cómo pedir un repuesto</h2>
            <ol className="steps">{PASOS.map((p, k) => <li key={p}><span>{String(k + 1).padStart(2, '0')}</span>{p}</li>)}</ol>
            <div className="envio">
              <h3 className="h3">Envíos a todo el país</h3>
              <p className="muted">Despachamos a todo el Valle del Cauca y al resto del país por transportadora. El costo del envío se confirma antes de despachar y el pedido sale el mismo día si se confirma antes de las 3:00 p.m.</p>
              <WaBoton tipo="taller" className="btn btn--ghost btn--sm" mensaje="Hola SUMOTO, quiero un repuesto con envío.">Pedir con envío <IconArrow width="16" /></WaBoton>
            </div>
          </div>
          <LeadForm tipo="taller" titulo="Cotiza tu repuesto" asunto="Cotización de repuesto" boton="Cotizar por WhatsApp"
            fields={[{ name: 'nombre', label: 'Nombre', required: true, full: true }, { name: 'celular', label: 'Celular', type: 'tel', required: true },
              { name: 'moto', label: 'Modelo', type: 'select', options: MOTOS.map((m) => m.nombre).concat('Otro') }, { name: 'anio', label: 'Año del modelo' }, { name: 'chasis', label: 'N.º de chasis (opcional)' },
              { name: 'repuesto', label: 'Repuesto que necesitas', type: 'textarea', required: true, full: true }]} />
        </div>
      </section>
    </>
  )
}

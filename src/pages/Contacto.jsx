import { SUMOTO, waNumeroLink } from '../data/sumoto.js'
import { MOTOS } from '../data/motos.js'
import PageHead from '../components/PageHead.jsx'
import LeadForm from '../components/LeadForm.jsx'
import WaBoton from '../components/WaBoton.jsx'
import { IconPin, IconClock, IconMail, IconPhone, IconWrench } from '../components/Icons.jsx'
import { useSede } from '../components/SedeSelector.jsx'

export default function Contacto() {
  const { sedeActiva, abrirSelector } = useSede()
  const mapa = `https://www.google.com/maps?q=${encodeURIComponent(`${sedeActiva.direccion}, ${sedeActiva.ciudad}`)}&z=17&output=embed`
  const ventas = Array.isArray(sedeActiva.whatsappVentas) ? sedeActiva.whatsappVentas : [sedeActiva.whatsappVentas]
  const mostrarTelefono = (numero) => `+${numero.slice(0, 2)} ${numero.slice(2, 5)} ${numero.slice(5, 8)} ${numero.slice(8)}`
  return (
    <>
      <PageHead kicker="Contacto" titulo={`Estamos en ${sedeActiva.ciudad.split(',')[0]}`} crumbs={[{ label: 'Contacto' }]}>
        <p>Visítanos sin cita previa. Respondemos por WhatsApp en menos de 10 minutos en horario de atención.</p>
      </PageHead>
      <section className="mapa">
        <iframe title={`Mapa SUMOTO ${sedeActiva.ciudad}`} src={mapa} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        <div className="mapa__card">
          <span className="mapa__ic"><IconPin /></span>
          <div><b>{sedeActiva.direccion}</b><small>{sedeActiva.ciudad}</small></div>
          <a className="btn btn--blue btn--sm" href={sedeActiva.mapaLink} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
        </div>
      </section>
      <section className="sec sec--light">
        <div className="wrap duo">
          <div>
            <span className="kicker kicker--blue">Escríbenos</span>
            <h2 className="h2 h2--ink">Te respondemos por WhatsApp</h2>
            <p className="muted-ink">Tu mensaje llega directamente a una de nuestras asesoras de ventas.</p>
            <LeadForm asunto="Contacto desde la web"
              fields={[{ name: 'nombre', label: 'Nombre', required: true, full: true }, { name: 'celular', label: 'Teléfono', type: 'tel', required: true },
                { name: 'moto', label: 'Modelo de interés', type: 'select', options: ['Sin definir todavía', ...MOTOS.map((m) => m.nombre)] },
                { name: 'mensaje', label: 'Mensaje', type: 'textarea', full: true }]} />
          </div>
          <div className="cinfo">
            <span className="kicker kicker--blue">Vitrina</span>
            <h2 className="h2 h2--ink">{sedeActiva.ciudad.split(',')[0]}</h2>
            <div className="cinfo__it">
              <span><IconPin /></span>
              <div>
                <b>{sedeActiva.direccion}</b>
                <p>{sedeActiva.ciudad}</p>
                <button type="button" className="sede-change-link" onClick={abrirSelector}>Cambiar sede</button>
              </div>
            </div>
            <div className="cinfo__it">
              <span><IconPhone /></span>
              <div>
                <b>Asesores</b>
                {ventas.map((numero) => <p key={numero}><a href={waNumeroLink(numero, `Hola, quiero información de la sede SUMOTO ${sedeActiva.ciudad}.`)} target="_blank" rel="noopener noreferrer">{mostrarTelefono(numero)}</a></p>)}
              </div>
            </div>
            <div className="cinfo__it">
              <span><IconWrench /></span>
              <div>
                <b>Taller y repuestos</b>
                <p><a href={waNumeroLink(sedeActiva.whatsappTaller, `Hola, necesito información de taller en la sede SUMOTO ${sedeActiva.ciudad}.`)} target="_blank" rel="noopener noreferrer">Taller: {mostrarTelefono(sedeActiva.whatsappTaller)}</a></p>
                <p><a href={waNumeroLink(sedeActiva.whatsappTaller, `Hola, necesito información de repuestos en la sede SUMOTO ${sedeActiva.ciudad}.`)} target="_blank" rel="noopener noreferrer">Repuestos: {mostrarTelefono(sedeActiva.whatsappTaller)}</a></p>
              </div>
            </div>
            {[[IconClock, 'Horario', SUMOTO.horario], [IconMail, 'Correo', SUMOTO.correo]].map(([I, t, d]) => (
              <div key={t} className="cinfo__it"><span><I /></span><div><b>{t}</b><p>{d}</p></div></div>
            ))}
            <div className="cinfo__btns">
              <WaBoton className="btn btn--red" mensaje={`Hola SUMOTO, quiero información de la sede ${sedeActiva.ciudad}.`}>Asesores</WaBoton>
              <WaBoton tipo="taller" className="btn btn--blue" icon={false} mensaje={`Hola, necesito ayuda con taller en la sede SUMOTO ${sedeActiva.ciudad}.`}><IconWrench width="18" /> Taller</WaBoton>
              <WaBoton tipo="taller" className="btn btn--blue" mensaje={`Hola, necesito ayuda con repuestos en la sede SUMOTO ${sedeActiva.ciudad}.`}>Repuestos</WaBoton>
            </div>
          </div>
        </div>
        <div className="wrap" id="datos">
          <details className="legal">
            <summary>Política de tratamiento de datos personales</summary>
            <p>{SUMOTO.nombre} trata los datos personales suministrados en este sitio para atender solicitudes de cotización, financiación, servicio posventa y contacto comercial, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013. El titular puede conocer, actualizar, rectificar y suprimir sus datos, o revocar la autorización, escribiendo a {SUMOTO.correo}.</p>
            <p><b>Texto de referencia: reemplazar por la política oficial vigente de SUMOTO S.A.</b></p>
          </details>
        </div>
      </section>
    </>
  )
}

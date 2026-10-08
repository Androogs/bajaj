import { openWaVentas } from '../data/sumoto.js'
import { IconWhatsApp } from './Icons.jsx'

export default function BotonWhatsApp() {
  return (
    <button className="fab" onClick={() => openWaVentas('Hola SUMOTO, vengo de la página web y quiero información.')} aria-label="Escríbenos por WhatsApp">
      <IconWhatsApp width="28" height="28" />
    </button>
  )
}

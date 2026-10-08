import { openWaVentas, waTaller } from '../data/sumoto.js'
import { IconWhatsApp } from './Icons.jsx'
import { useSede } from './SedeSelector.jsx'

/**
 * Botón de WhatsApp.
 *  - tipo="ventas": reparte el chat entre las asesoras (rotación de sumoto.js).
 *  - tipo="taller": va directo al WhatsApp de taller/repuestos.
 */
export default function WaBoton({ mensaje, tipo = 'ventas', className = 'btn btn--wa', children, icon = true }) {
  const { sedeActiva } = useSede()
  const contenido = <>{icon && <IconWhatsApp width="18" height="18" />} {children}</>
  if (tipo === 'taller') return <a className={className} data-sede={sedeActiva.id} href={waTaller(mensaje)} target="_blank" rel="noopener noreferrer">{contenido}</a>
  return <button type="button" className={className} data-sede={sedeActiva.id} onClick={() => openWaVentas(mensaje)}>{contenido}</button>
}

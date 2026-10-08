import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { openWaVentas, waTaller } from '../data/sumoto.js'
import { IconWhatsApp, IconCheck } from './Icons.jsx'

/**
 * Formulario que arma el mensaje y lo abre en WhatsApp.
 * tipo="ventas" usa la rotación de asesoras; tipo="taller" va al WhatsApp del taller.
 */
export default function LeadForm({ titulo, sub, fields, asunto, boton = 'Enviar por WhatsApp', initial = {}, tipo = 'ventas' }) {
  const [data, setData] = useState(initial)
  const [acepta, setAcepta] = useState(false)
  const [ok, setOk] = useState(false)
  const k = JSON.stringify(initial)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setData((d) => ({ ...d, ...initial })) }, [k])
  const set = (n, v) => setData((d) => ({ ...d, [n]: v }))
  const enviar = (e) => {
    e.preventDefault()
    const txt = `Hola SUMOTO. *${asunto}*\n` + fields.map((f) => `• ${f.label}: ${data[f.name] || '—'}`).join('\n')
    if (tipo === 'taller') window.open(waTaller(txt), '_blank', 'noopener')
    else openWaVentas(txt)
    setOk(true)
  }
  return (
    <form className="form" onSubmit={enviar}>
      {titulo && <h3 className="form__t">{titulo}</h3>}
      {sub && <p className="form__s">{sub}</p>}
      <div className="form__g">
        {fields.map((f) => (
          <label key={f.name} className={`fld ${f.full ? 'fld--full' : ''}`}>
            <span>{f.label}{f.required && ' *'}</span>
            {f.type === 'select' ? (
              <select required={f.required} value={data[f.name] || ''} onChange={(e) => set(f.name, e.target.value)}>
                <option value="" disabled>Selecciona…</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : f.type === 'textarea' ? (
              <textarea rows={3} required={f.required} value={data[f.name] || ''} onChange={(e) => set(f.name, e.target.value)} />
            ) : (
              <input type={f.type || 'text'} required={f.required} value={data[f.name] || ''} onChange={(e) => set(f.name, e.target.value)} />
            )}
          </label>
        ))}
      </div>
      <label className="consent">
        <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} required />
        <span>Autorizo el tratamiento de mis datos personales según la <Link to="/contacto#datos">política de datos</Link> de SUMOTO S.A.</span>
      </label>
      <button type="submit" className="btn btn--red btn--block">{ok ? <><IconCheck /> Listo · reenviar</> : <><IconWhatsApp width="18" height="18" /> {boton}</>}</button>
      {ok && <p className="form__ok">Abrimos WhatsApp con tu mensaje. Si no se abrió, revisa el bloqueador de ventanas emergentes.</p>}
    </form>
  )
}

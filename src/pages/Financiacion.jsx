import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LINEAS, MOTOS } from '../data/motos.js'
import { CREDITO } from '../data/marca.js'
import { getMoto, pesos } from '../utils/catalogo.js'
import PageHead from '../components/PageHead.jsx'
import MotoFoto from '../components/MotoFoto.jsx'
import WaBoton from '../components/WaBoton.jsx'

// Opciones del simulador: una por versión con precio.
const OPCIONES = MOTOS.flatMap((m) => m.versiones.map((v, i) => ({ id: `${m.slug}|${i}`, m, v, label: `${m.nombre}${m.versiones.length > 1 ? ` · ${v.nombre}` : ''}` }))).filter((o) => o.v.precio)
const REQUISITOS = ['Cédula de ciudadanía original.', 'Ser mayor de 18 años.', 'Ingresos demostrables o certificación laboral, según la entidad.', 'Algunas entidades aceptan codeudor.']
const PASOS = ['Escoges tu moto en el catálogo o en la vitrina.', 'Radicamos tu solicitud con las entidades aliadas.', 'Recibes la respuesta el mismo día en la mayoría de los casos.', 'Firmas y te llevas la moto con la matrícula en trámite.']

export default function Financiacion() {
  const [sp] = useSearchParams()
  const ini = getMoto(sp.get('moto')) ? `${sp.get('moto')}|${sp.get('v') || 0}` : 'pulsar-n160|0'
  const [sel, setSel] = useState(OPCIONES.find((o) => o.id === ini) ? ini : OPCIONES[0].id)
  const [pct, setPct] = useState(10)
  const [meses, setMeses] = useState(36)
  const o = OPCIONES.find((x) => x.id === sel)
  const valor = o.v.precio
  const { inicial, monto, cuota } = useMemo(() => {
    const inicial = Math.round((valor * pct) / 100); const monto = valor - inicial; const i = CREDITO.tasaMensual
    return { inicial, monto, cuota: monto ? Math.round((monto * i) / (1 - Math.pow(1 + i, -meses))) : 0 }
  }, [valor, pct, meses])

  return (
    <>
      <PageHead kicker="Crédito" titulo="Financiación" crumbs={[{ label: 'Financiación' }]}>
        <p>Algunas de nuestras entidades aliadas financian hasta el 100 % del valor de tu moto, con plazos de hasta {Math.max(...CREDITO.plazos)} meses. Solo necesitas tu cédula para empezar.</p>
      </PageHead>
      <section className="sec sec--light">
        <div className="wrap sim">
          <div className="sim__l">
            <div className="sim__moto"><MotoFoto moto={o.m} /><div><small>Bajaj</small><h3>{o.label}</h3><b>{pesos(valor)}*</b></div></div>
            <label className="fld"><span>Moto</span>
              <select value={sel} onChange={(e) => setSel(e.target.value)}>
                {LINEAS.map((l) => <optgroup key={l.id} label={l.nombre}>{OPCIONES.filter((x) => x.m.linea === l.id).map((x) => <option key={x.id} value={x.id}>{x.label} · {pesos(x.v.precio)}</option>)}</optgroup>)}
              </select>
            </label>
            <label className="fld"><span>Cuota inicial: <b>{pct}%</b> · {pesos(inicial)}</span>
              <input type="range" min="0" max="70" step="5" value={pct} onChange={(e) => setPct(+e.target.value)} />
            </label>
            <div className="fld"><span>Plazo</span>
              <div className="chips chips--dark">{CREDITO.plazos.map((p) => <button key={p} type="button" className={p === meses ? 'is-on' : ''} onClick={() => setMeses(p)}>{p} meses</button>)}</div>
            </div>
          </div>
          <div className="sim__r">
            <small>Cuota mensual estimada</small>
            <strong>{pesos(cuota)}</strong>
            <ul>
              <li><span>Valor de la moto</span><b>{pesos(valor)}</b></li>
              <li><span>Cuota inicial</span><b>{pesos(inicial)}</b></li>
              <li><span>Monto a financiar</span><b>{pesos(monto)}</b></li>
              <li><span>Plazo</span><b>{meses} meses</b></li>
            </ul>
            <WaBoton className="btn btn--red btn--block" mensaje={`Hola SUMOTO, simulé un crédito para la Bajaj ${o.label}: cuota inicial ${pesos(inicial)}, ${meses} meses, cuota estimada ${pesos(cuota)}. Quiero aplicar.`}>Aplicar al crédito</WaBoton>
            <p>Simulación con la tasa de referencia publicada para {CREDITO.vigencia}: {CREDITO.tasaTexto}. Valor estimado que no constituye una oferta de crédito; la tasa final depende de la entidad y de tu perfil.</p>
          </div>
        </div>
      </section>
      <section className="sec sec--dark">
        <div className="wrap duo">
          <div><span className="kicker">Requisitos</span><h2 className="h2">Lo que necesitas</h2><ul className="checks">{REQUISITOS.map((r) => <li key={r}>{r}</li>)}</ul></div>
          <div><span className="kicker">Proceso</span><h2 className="h2">Cómo funciona</h2><ol className="steps">{PASOS.map((p, k) => <li key={p}><span>{String(k + 1).padStart(2, '0')}</span>{p}</li>)}</ol></div>
        </div>
        <div className="wrap aliados">
          <h3 className="h3">Entidades aliadas Bajaj</h3>
          <div className="aliados__list">{CREDITO.aliados.map((a) => <span key={a}>{a}</span>)}</div>
          <p className="fine">Fuente: <a href={CREDITO.fuente} target="_blank" rel="noopener noreferrer">Crédito para moto – Grupo UMA</a>. Confirma con tu asesor qué entidades operan en el Valle.</p>
        </div>
      </section>
    </>
  )
}

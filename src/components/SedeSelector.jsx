import { createContext, useContext, useEffect, useState } from 'react'
import { SEDE_STORAGE_KEY, SUMOTO, sedePorId } from '../data/sumoto.js'

const SedeContext = createContext(null)

function leerSedeGuardada() {
  if (typeof window === 'undefined') return null
  const id = localStorage.getItem(SEDE_STORAGE_KEY)
  return SUMOTO.sedes.some((sede) => sede.id === id) ? id : null
}

export function SedeProvider({ children }) {
  const [sedeId, setSedeId] = useState(leerSedeGuardada)
  const [selectorAbierto, setSelectorAbierto] = useState(!sedeId)

  const seleccionarSede = (id) => {
    localStorage.setItem(SEDE_STORAGE_KEY, id)
    setSedeId(id)
    setSelectorAbierto(false)
  }

  const abrirSelector = () => setSelectorAbierto(true)

  return (
    <SedeContext.Provider value={{
      sedeActiva: sedePorId(sedeId),
      seleccionarSede,
      selectorAbierto,
      abrirSelector,
      cerrarSelector: () => setSelectorAbierto(false),
    }}>
      {children}
    </SedeContext.Provider>
  )
}

export function useSede() {
  const context = useContext(SedeContext)
  if (!context) throw new Error('useSede debe usarse dentro de SedeProvider')
  return context
}

export function SelectorSedeModal() {
  const { sedeActiva, seleccionarSede, selectorAbierto, cerrarSelector } = useSede()
  const [seleccion, setSeleccion] = useState(sedeActiva.id)
  const esPrimeraSeleccion = !leerSedeGuardada()

  useEffect(() => {
    if (selectorAbierto) setSeleccion(sedeActiva.id)
  }, [selectorAbierto, sedeActiva.id])

  if (!selectorAbierto) return null

  const confirmar = (event) => {
    event.preventDefault()
    seleccionarSede(seleccion)
  }

  return (
    <div className="sede-modal" role="presentation">
      <section className="sede-modal__panel" role="dialog" aria-modal="true" aria-labelledby="sede-modal-titulo">
        {!esPrimeraSeleccion && (
          <button type="button" className="sede-modal__close" onClick={cerrarSelector} aria-label="Cerrar selector">×</button>
        )}
        <span className="kicker">Atención cercana</span>
        <h2 id="sede-modal-titulo" className="h2">¿Qué sede queda más cerca de ti?</h2>
        <p>Selecciona tu sede para mostrar su ubicación, mapa y contactos de WhatsApp.</p>
        <form onSubmit={confirmar}>
          <label className="sede-modal__label" htmlFor="sede-select">Sede</label>
          <select id="sede-select" autoFocus value={seleccion} onChange={(event) => setSeleccion(event.target.value)}>
            {SUMOTO.sedes.map((sede) => <option key={sede.id} value={sede.id}>{sede.ciudad}</option>)}
          </select>
          <button type="submit" className="btn btn--red btn--block">Confirmar sede</button>
        </form>
        <small>Puedes cambiar esta selección más adelante desde la barra superior.</small>
      </section>
    </div>
  )
}

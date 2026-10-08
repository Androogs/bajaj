import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Barra from './components/Barra.jsx'
import Footer from './components/Footer.jsx'
import BotonWhatsApp from './components/BotonWhatsApp.jsx'
import Inicio from './pages/Inicio.jsx'
import Motos from './pages/Motos.jsx'
import Ficha from './pages/Ficha.jsx'
import Comparar from './pages/Comparar.jsx'
import Repuestos from './pages/Repuestos.jsx'
import Taller from './pages/Taller.jsx'
import Financiacion from './pages/Financiacion.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'
import { SelectorSedeModal, SedeProvider } from './components/SedeSelector.jsx'

export default function App() {
  return (
    <SedeProvider>
      <AppContenido />
    </SedeProvider>
  )
}

function AppContenido() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return (
    <>
      <Barra />
      <main key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/motos" element={<Motos />} />
          <Route path="/motos/:slug" element={<Ficha />} />
          <Route path="/comparar" element={<Comparar />} />
          <Route path="/repuestos" element={<Repuestos />} />
          <Route path="/taller" element={<Taller />} />
          <Route path="/financiacion" element={<Financiacion />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>
      <Footer />
      <BotonWhatsApp />
      <SelectorSedeModal />
    </>
  )
}

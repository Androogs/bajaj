# Bajaj VALLE · SUMOTO S.A. — Sitio web

Sitio del concesionario autorizado Bajaj **SUMOTO S.A.** en el (Valle del Cauca).
Hecho con **React 18 + Vite + React Router**. Cada sección del menú es una pestaña con su propia URL.

## Arrancar el proyecto

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # deja el sitio listo en dist/
npm run preview   # revisa el build
```

Requiere Node.js 18 o superior. Las tipografías (Saira Condensed y Barlow) vienen incluidas en el proyecto.

## Pestañas

| URL | Página |
|---|---|
| `/` | Inicio: slider de modelos, familias Bajaj, vitrina destacada y beneficios |
| `/motos` | Catálogo con pestañas por línea (`?linea=pulsar`), búsqueda, filtro por cilindraje, orden y comparar |
| `/motos/:slug` | Ficha: galería, selector de **versión** (precio y ficha cambian), datos clave, especificaciones por pestañas, test ride |
| `/comparar` | Comparador de hasta 3 modelos |
| `/repuestos` | Repuestos y accesorios + formulario de cotización (WhatsApp de taller) |
| `/taller` | Servicios, garantía oficial y calendario de revisiones + agenda de cita |
| `/financiacion` | Simulador con tasa de referencia oficial, requisitos y entidades aliadas |
| `/nosotros` | Empresa y datos legales |
| `/contacto` | Mapa, formulario y canales |

## WhatsApp
La lógica original se mantiene en `src/data/sumoto.js`:
- **Ventas:** reparte los chats entre las asesoras (`whatsappVentas`) sin repetir la misma dos veces seguidas.
- **Taller y repuestos:** van al número `whatsappTaller`.

## Dónde editar

| Qué | Archivo |
|---|---|
| Dirección, teléfonos, WhatsApp, correo, NIT, horario | `src/data/sumoto.js` |
| Modelos, versiones, precios y fichas | `src/data/motos.js` |
| Garantía, tasa de crédito, plazos y aliados | `src/data/marca.js` |
| Modelos del slider y destacados | `SLIDER` y `DESTACADOS` en `src/utils/catalogo.js` |
| Colores y estilos | `src/styles/global.css` (variables en `:root`) |

### Precios
Cada modelo tiene una o varias `versiones`, cada una con su `precio` (número sin puntos).
`precio: null` muestra "Consulta el precio".

### Fotos
`public/motos/<slug>/1.webp, 2.webp…` y el campo `fotos` con la cantidad.
Todas las fotos quedaron normalizadas a 1200 × 800 px con fondo transparente; conserva ese formato.
Los motocarros (Torito y Máxima Cargo) tienen `fotos: 0` y muestran una ilustración hasta que cargues sus fotos.

## Fuente de los datos
Precios, versiones, fichas técnicas, garantía y crédito: **Grupo UMA, distribuidor oficial Bajaj en Colombia**
(grupouma.com/colombia), consultado el 7 de octubre de 2026. Las descripciones de cada modelo y los textos de
repuestos, taller y nosotros son los del sitio original.

## ⚠️ Pendiente por validar

1. **Precios:** confírmalos con la lista vigente; el distribuidor los cambia por campaña.
2. **Garantía:** el sitio anterior decía "2 años o 24.000 km"; la condición oficial publicada hoy es **2 años o 30.000 km**
   (motos vendidas desde el 1 de abril de 2025). Se actualizó.
3. **Tasa del simulador:** 2,12 % N.M. (28,59 % E.A.), vigente para octubre de 2026. Actualízala cada mes en `marca.js`.
4. **Modelos fuera del catálogo oficial:** Pulsar N250, Dominar 250 y Boxer S no aparecen en Grupo UMA. Quedan marcados
   "Consulta disponibilidad"; retíralos de `motos.js` si ya no se venden.
5. **Fotos por versión:** Pulsar N160 (el modelo vigente es la N160 Pro) y Dominar 400 (Touring/Volcano usan las fotos de
   las carpetas `dominar-400` y `dominar-400-tera`).
6. **Máxima Cargo:** el listado mostró $23.799.000 y la ficha $22.999.000; se usa el de la ficha.
7. **Plan de mantenimiento:** se reemplazó la tabla por kilómetros del sitio anterior por el calendario oficial de revisiones
   de garantía (meses 1, 4, 8, 12, 16, 20 y 24).
8. **Política de datos:** el texto de Contacto es de referencia.

## Publicar
`npm run build` y sube `dist/`. Incluye `vercel.json`, `public/_redirects` (Netlify) y `public/.htaccess` (Apache/cPanel).

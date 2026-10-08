// =====================================================================
// DATOS DEL CONCESIONARIO
// =====================================================================
export const SUMOTO = {
  nombre: "SUMOTO S.A.",
  eslogan: "Concesionario autorizado Bajaj",
  ciudad: "Palmira, Valle del Cauca",
  direccion: "Cra. 33a #30 - 23 / Palmira - Valle del Cauca",
  sedes: [
    {
      id: "palmira",
      ciudad: "Palmira, Valle del Cauca",
      direccion: "Cra. 33a #30 - 23",
      mapaLink: "https://maps.app.goo.gl/UvsRsESDJ5V339e6A",
      whatsappVentas: ["573123093766", "573132485021"],
      whatsappTaller: "573255233347",
    },
    {
      id: "pradera",
      ciudad: "Pradera, Valle del Cauca",
      direccion: "Calle 7 # 8 - 40",
      mapaLink: "https://maps.app.goo.gl/qWmxJ4ni97kBQTJK6",
      whatsappVentas: "573105064339",
      whatsappTaller: "573173632898",
    },
    {
      id: "florida",
      ciudad: "Florida, Valle del Cauca",
      direccion: "Calle 10 # 14a-12",
      mapaLink: "https://maps.app.goo.gl/9WMaw5ToGGszVZwz9",
      whatsappVentas: "573133421586",
      whatsappTaller: "573133421586",
    },
  ],
  telefonos: "+57 314 4352451 +57 313 2485021",
  correo: "asesort2bajajpalmira@sumoto.com.co",
  nit: "NIT 800.235.505-9",
  horario: "Lunes a viernes 8:30 a.m. – 6:00 p.m. · Sábados 8:30 a.m. – 1:00 p.m.",
  mapaLink: "https://maps.app.goo.gl/UvsRsESDJ5V339e6A",
  whatsappVentas: ["573123093766", "573132485021"],
  whatsappTaller: "573255233347",
};

export const SEDE_STORAGE_KEY = "sumoto_sede";

export const sedePorId = (id) =>
  SUMOTO.sedes.find((sede) => sede.id === id) || SUMOTO.sedes[0];

export const sedeActual = () => {
  if (typeof window === "undefined") return SUMOTO.sedes[0];
  return sedePorId(localStorage.getItem(SEDE_STORAGE_KEY));
};

const mensajeConSede = (texto, predeterminado, sede) =>
  texto && texto.includes(sede.ciudad)
    ? texto
    : `${texto || predeterminado}\nSede: ${sede.ciudad}`;

function getVendedora(sede) {
  const ventas = Array.isArray(sede.whatsappVentas)
    ? sede.whatsappVentas
    : [sede.whatsappVentas];
  if (ventas.length === 1 || typeof window === "undefined") return ventas[0];
  // 50/50 aleatorio pero evitando que toque 2 veces seguidas la misma
  const last = sessionStorage.getItem("sumoto_last_asesora");
  let opciones = ventas.filter(n => n !== last);
  if (opciones.length === 0) opciones = ventas;

  const numero = opciones[Math.floor(Math.random() * opciones.length)];
  sessionStorage.setItem("sumoto_last_asesora", numero);
  return numero;
}

// Para usar en href={waLink(...)} -> ahora es random puro sin efecto secundario
export const waLink = (texto) => {
  const sede = sedeActual();
  const ventas = Array.isArray(sede.whatsappVentas) ? sede.whatsappVentas : [sede.whatsappVentas];
  const numero = ventas[Math.floor(Math.random() * ventas.length)];
  return `https://wa.me/${numero}?text=${encodeURIComponent(
    mensajeConSede(texto, "Hola SUMOTO, quiero información sobre una moto Bajaj.", sede)
  )}`;
};

// ESTA es la que debes usar en botones con onClick - esta sí intercala bien
export const openWaVentas = (texto) => {
  const numero = getVendedora(sedeActual());
  const sede = sedeActual();
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(
    mensajeConSede(texto, "Hola SUMOTO, quiero información sobre una moto Bajaj.", sede)
  )}`;
  window.open(url, "_blank", "noopener");
};

export const waTaller = (texto, servicio = "taller o repuestos") => {
  const sede = sedeActual();
  return `https://wa.me/${sede.whatsappTaller}?text=${encodeURIComponent(
    mensajeConSede(texto, `Hola SUMOTO, necesito ayuda con ${servicio}.`, sede)
  )}`;
};

export const waNumeroLink = (numero, texto) =>
  `https://wa.me/${numero.replace(/\D/g, "")}?text=${encodeURIComponent(
    texto || "Hola SUMOTO, quiero más información."
  )}`;
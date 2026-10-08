// =====================================================================
//  CATÁLOGO BAJAJ – SUMOTO S.A. (Valle)
//
//  Fuente de precios y fichas: Grupo UMA, distribuidor oficial Bajaj en
//  Colombia (grupouma.com/colombia), consultado el 7 de octubre de 2026.
//  ⚠️ Valida precios con la lista vigente antes de publicar.
//
//  Cada moto puede tener varias VERSIONES (p. ej. Carburada / FI), cada una
//  con su precio y ficha. Para cambiar un precio edita `precio` de la versión
//  (número sin puntos). `precio: null` muestra "Consulta el precio".
//
//  FOTOS: public/motos/<slug>/1.webp, 2.webp… (campo `fotos` = cantidad).
//  `galeriaExtra` agrega fotos de otra carpeta. Si `fotos: 0`, se muestra
//  una ilustración hasta que cargues las fotos.
//  `disponible: false` marca modelos que no están en el catálogo oficial.
// =====================================================================

export const LINEAS = [
  {
    "id": "pulsar",
    "nombre": "Pulsar",
    "desc": "Deportivas y naked de 125 a 400 cc. Potencia, frenos ABS y tablero digital para quien busca carácter."
  },
  {
    "id": "boxer",
    "nombre": "Boxer",
    "desc": "Las más económicas en consumo y mantenimiento. Hechas para el trabajo diario y los kilómetros duros."
  },
  {
    "id": "discover",
    "nombre": "Discover",
    "desc": "El equilibrio entre confort y rendimiento: asiento largo, suspensión suave y buen consumo."
  },
  {
    "id": "dominar",
    "nombre": "Dominar",
    "desc": "Touring y carretera. Motor refrigerado por líquido, ABS de doble canal y comodidad para viajes largos."
  },
  {
    "id": "motocarros",
    "nombre": "Motocarros",
    "desc": "Torito y Máxima Cargo: soluciones de transporte de pasajeros y carga para tu negocio."
  }
]

export const MOTOS = [
  {
    "slug": "boxer-ct100-ks",
    "nombre": "Boxer CT100 KS",
    "linea": "boxer",
    "fotos": 1,
    "lema": "La propia pa' ahorrar",
    "destacados": [
      "Rendimiento hasta 370 km/galón",
      "Filtro de aceite centrífugo",
      "Cargador USB para celular",
      "Suspensión SNS doble resorte",
      "Farola multifocal"
    ],
    "versiones": [
      {
        "nombre": "Estándar",
        "precio": 5899000,
        "fuente": "https://grupouma.com/colombia/motos/boxer/boxer-ct100-ks/",
        "colores": [],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 tiempos, Monocilíndrico, SOHC",
            "Cilindraje": "102 cc",
            "Potencia máxima": "7.59 Hp @ 7500 rpm",
            "Torque máximo": "8.24 N.m @ 5500 rpm",
            "Diámetro × carrera": "47 mm x 58.8 mm",
            "Alimentación": "Carburador",
            "Embrague": "Multi-Disco Bañado en Aceite",
            "Transmisión": "4 Velocidades",
            "Arranque": "Pedal"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Tubular con Cuna Semi-doble",
            "Suspensión delantera": "Hidráulica, Telescópica Vertical, 125 mm recorrido",
            "Suspensión trasera": "Brazo oscilante, Tecnología SNS de 5 posiciones",
            "Freno delantero": "Tambor 110 mm con CBS",
            "Freno trasero": "Tambor 110 mm con CBS",
            "Llanta delantera": "2.75-17, 41P Tubetype",
            "Llanta trasera": "3.00-17, 50P Tubetype"
          },
          "Dimensiones": {
            "Largo": "1965 mm",
            "Ancho": "752 mm",
            "Alto": "1072 mm",
            "Distancia entre ejes": "1235 mm",
            "Distancia al piso": "169 mm",
            "Peso": "109 Kg",
            "Tanque": "10,5 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Análogo",
            "Batería": "12 V, 3 Ah MF",
            "Farola": "12V 35/35 W",
            "Stop": "12 V 10/5 W",
            "Direccionales delanteras": "12 V, 10W",
            "Direccionales traseras": "12 V, 10W",
            "Indicadores del tablero": "12 V, 3W"
          }
        },
        "resumen": {
          "cc": "102",
          "hp": "7,59",
          "nm": "8,24",
          "peso": "109",
          "tanque": "10,5"
        }
      },
      {
        "nombre": "Boxer Racing",
        "precio": 5999000,
        "fuente": "https://grupouma.com/colombia/motos/boxer/boxer-ct100-ks-boxer-racing/",
        "colores": [
          "Titanium Gris"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 tiempos, Monocilíndrico, SOHC",
            "Cilindraje": "102 cc",
            "Potencia máxima": "7.59 Hp @ 7500 rpm",
            "Torque máximo": "8.24 N.m @ 5500 rpm",
            "Diámetro × carrera": "47 mm x 58.8 mm",
            "Alimentación": "Carburador",
            "Embrague": "Multi-Disco Bañado en Aceite",
            "Transmisión": "4 Velocidades",
            "Arranque": "Pedal"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Tubular con Cuna Semi-doble",
            "Suspensión delantera": "Hidráulica, Telescópica Vertical, 125 mm recorrido",
            "Suspensión trasera": "Brazo oscilante, Tecnología SNS de 5 posiciones",
            "Freno delantero": "Tambor 110 mm con CBS",
            "Freno trasero": "Tambor 110 mm con CBS",
            "Llanta delantera": "2.75-17, 41P Tubetype",
            "Llanta trasera": "3.00-17, 50P Tubetype"
          },
          "Dimensiones": {
            "Largo": "1965 mm",
            "Ancho": "752 mm",
            "Alto": "1072 mm",
            "Distancia entre ejes": "1235 mm",
            "Distancia al piso": "169 mm",
            "Peso": "109 Kg",
            "Tanque": "10,5 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Análogo",
            "Batería": "12 V, 3 Ah MF",
            "Farola": "12V 35/35 W",
            "Stop": "12 V 10/5 W",
            "Direccionales delanteras": "12 V, 10W",
            "Direccionales traseras": "12 V, 10W",
            "Indicadores del tablero": "12 V, 3W"
          }
        },
        "resumen": {
          "cc": "102",
          "hp": "7,59",
          "nm": "8,24",
          "peso": "109",
          "tanque": "10,5"
        }
      }
    ],
    "descripcion": "La moto de trabajo por excelencia: consumo mínimo, suspensión reforzada y el costo de mantenimiento más bajo del catálogo."
  },
  {
    "slug": "boxer-ct100-es",
    "nombre": "Boxer CT100 ES",
    "linea": "boxer",
    "fotos": 2,
    "lema": "La propia pa ahorrar",
    "destacados": [
      "Rinde hasta 370km por galón",
      "Encendido eléctrico",
      "Cargador USB",
      "Suspensión SNS con doble resorte",
      "Farola multifocal"
    ],
    "versiones": [
      {
        "nombre": "Estándar",
        "precio": 6199000,
        "fuente": "https://grupouma.com/colombia/motos/boxer/boxer-ct100-es/",
        "colores": [],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 tiempos, Monocilíndrico, SOHC",
            "Cilindraje": "102 cc",
            "Potencia máxima": "7.59 Hp @ 7500 rpm",
            "Torque máximo": "8.24 N.m @ 5500 rpm",
            "Diámetro × carrera": "47 mm x 58.8 mm",
            "Alimentación": "Carburador",
            "Embrague": "Multi-Disco Bañado en Aceite",
            "Transmisión": "4 Velocidades",
            "Arranque": "Eléctrico y Pedal"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Tubular con Cuna Semi-doble",
            "Suspensión delantera": "Hidráulica, Telescópica Vertical, 125 mm recorrido",
            "Suspensión trasera": "Brazo oscilante, Tecnología SNS de 5 posiciones",
            "Freno delantero": "Tambor 110 mm con CBS",
            "Freno trasero": "Tambor 110 mm con CBS",
            "Llanta delantera": "2.75-17, 41P Tubetype",
            "Llanta trasera": "3.00-17, 50P Tubetype"
          },
          "Dimensiones": {
            "Largo": "1965 mm",
            "Ancho": "752 mm",
            "Alto": "1072 mm",
            "Distancia entre ejes": "1235 mm",
            "Distancia al piso": "169 mm",
            "Peso": "109 Kg",
            "Tanque": "10,5 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Análogo",
            "Batería": "12 V, 3 Ah MF",
            "Farola": "12V 35/35 W",
            "Stop": "12 V 10/5 W",
            "Direccionales delanteras": "12 V, 10W",
            "Direccionales traseras": "12 V, 10W",
            "Indicadores del tablero": "12 V, 3W"
          }
        },
        "resumen": {
          "cc": "102",
          "hp": "7,59",
          "nm": "8,24",
          "peso": "109",
          "tanque": "10,5"
        }
      },
      {
        "nombre": "Boxer Racing",
        "precio": 6399000,
        "fuente": "https://grupouma.com/colombia/motos/boxer/boxer-ct100-es-boxer-racing/",
        "colores": [
          "Titanium Gris"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 tiempos, Monocilíndrico, SOHC",
            "Cilindraje": "102 cc",
            "Potencia máxima": "7.59 Hp @ 7500 rpm",
            "Torque máximo": "8.24 N.m @ 5500 rpm",
            "Diámetro × carrera": "47 mm x 58.8 mm",
            "Alimentación": "Carburador",
            "Embrague": "Multi-Disco Bañado en Aceite",
            "Transmisión": "4 Velocidades",
            "Arranque": "Eléctrico y Pedal"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Tubular con Cuna Semi-doble",
            "Suspensión delantera": "Hidráulica, Telescópica Vertical, 125 mm recorrido",
            "Suspensión trasera": "Brazo oscilante, Tecnología SNS de 5 posiciones",
            "Freno delantero": "Tambor 110 mm con CBS",
            "Freno trasero": "Tambor 110 mm con CBS",
            "Llanta delantera": "2.75-17, 41P Tubetype",
            "Llanta trasera": "3.00-17, 50P Tubetype"
          },
          "Dimensiones": {
            "Largo": "1965 mm",
            "Ancho": "752 mm",
            "Alto": "1072 mm",
            "Distancia entre ejes": "1235 mm",
            "Distancia al piso": "169 mm",
            "Peso": "109 Kg",
            "Tanque": "10,5 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Análogo",
            "Batería": "12 V, 3 Ah MF",
            "Farola": "12V 35/35 W",
            "Stop": "12 V 10/5 W",
            "Direccionales delanteras": "12 V, 10W",
            "Direccionales traseras": "12 V, 10W",
            "Indicadores del tablero": "12 V, 3W"
          }
        },
        "resumen": {
          "cc": "102",
          "hp": "7,59",
          "nm": "8,24",
          "peso": "109",
          "tanque": "10,5"
        }
      }
    ],
    "descripcion": "La misma CT 100 de siempre, ahora con arranque eléctrico. Comodidad para el uso urbano intensivo y de reparto."
  },
  {
    "slug": "boxer-ct125",
    "nombre": "Boxer CT125 Sport",
    "linea": "boxer",
    "fotos": 1,
    "lema": "Un gran arranque",
    "destacados": [
      "Motor más potente con 9.86 HP",
      "Freno disco con CBS",
      "Cargador USB integrado",
      "Sillín fresh control ergonómico",
      "Chasis reforzado y resistente"
    ],
    "versiones": [
      {
        "nombre": "CT125 Sport",
        "precio": 6899000,
        "fuente": "https://grupouma.com/colombia/motos/boxer/boxer-ct-125/",
        "colores": [
          "Plata",
          "Negro"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 tiempos, Monocilíndrico, SOHC",
            "Cilindraje": "124.45 cc",
            "Potencia máxima": "9.86 Hp @ 7500 rpm",
            "Torque máximo": "10.5 N.m @ 5500 rpm",
            "Diámetro × carrera": "50 mm x 58.8 mm",
            "Alimentación": "Carburador",
            "Embrague": "Multi-Disco Bañado en Aceite",
            "Transmisión": "5 Velocidades",
            "Arranque": "Eléctrico y Pedal"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Tubular con Cuna Semi-doble",
            "Suspensión delantera": "Hidráulica, Telescópica Vertical, 125 mm recorrido",
            "Suspensión trasera": "Brazo oscilante, Tecnología SNS y 100 mm de recorrido",
            "Freno delantero": "Disco 200 mm con CBS",
            "Freno trasero": "Tambor 110 mm con CBS",
            "Llanta delantera": "2.75-17, 41P Tubetype",
            "Llanta trasera": "3.00-17, 50P Tubetype"
          },
          "Dimensiones": {
            "Largo": "1945 mm",
            "Ancho": "752 mm",
            "Alto": "1072 mm",
            "Distancia entre ejes": "1235 mm",
            "Distancia al piso": "170 mm",
            "Peso": "117 Kg",
            "Tanque": "10,5 L",
            "Reserva": "2.3 L",
            "Capacidad de carga": "130 Kg"
          },
          "Eléctrico y tablero": {
            "Tablero": "Análogo",
            "Batería": "12 V, 6 Ah MF",
            "Farola": "12V 35/35 W",
            "Stop": "12 V 5/21 W",
            "Direccionales delanteras": "12 V, 10W",
            "Direccionales traseras": "12 V, 10W",
            "Indicadores del tablero": "12 V, 2W"
          }
        },
        "resumen": {
          "cc": "124,45",
          "hp": "9,86",
          "nm": "10,5",
          "peso": "117",
          "tanque": "10,5"
        }
      }
    ],
    "descripcion": "Más torque que la CT 100 manteniendo el consumo bajo. Ideal para domicilios y trayectos con carga."
  },
  {
    "slug": "boxer-150x",
    "nombre": "Boxer 150X",
    "linea": "boxer",
    "fotos": 2,
    "lema": "RINDE SIN RENDIRSE",
    "destacados": [
      "Llantas doble propósito para todo terreno",
      "Guardabarro levantado para terrenos difíciles",
      "Suspensión SNS y doble amortiguador",
      "Parrilla con gran capacidad de carga",
      "Freno de disco delantero de 240mm"
    ],
    "versiones": [
      {
        "nombre": "150X",
        "precio": 7499000,
        "fuente": "https://grupouma.com/colombia/motos/boxer/boxer-150x/",
        "colores": [
          "Azul Petróleo"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 tiempos, Monocilíndrico, SOHC",
            "Cilindraje": "144.8 cc",
            "Potencia máxima": "11.84 Hp @ 7500 rpm",
            "Torque máximo": "12.55 N.m @ 5000 rpm",
            "Diámetro × carrera": "56 mm x 58.8 mm",
            "Alimentación": "Carburador",
            "Embrague": "Multi-Disco Bañado en Aceite",
            "Transmisión": "5 Velocidades",
            "Arranque": "Eléctrico y pedal"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Tubular con Cuna Semi-doble",
            "Suspensión delantera": "Hidráulica, Telescópica Vertical, 125 mm recorrido",
            "Suspensión trasera": "Brazo oscilante, Tecnología SNS y 100 mm de recorrido",
            "Freno delantero": "Disco de 240mm",
            "Freno trasero": "Tambor 130 mm",
            "Llanta delantera": "3.00-17, 46P Tubetype",
            "Llanta trasera": "100/90-17, 55P Tubetype"
          },
          "Dimensiones": {
            "Largo": "2016 mm",
            "Ancho": "740 mm",
            "Alto": "1148 mm",
            "Distancia entre ejes": "1285 mm",
            "Distancia al piso": "190 mm",
            "Peso": "128 Kg",
            "Tanque": "11 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Análogo",
            "Batería": "12 V, 4 Ah MF",
            "Farola": "12V 35/35 W",
            "Stop": "12 V 21/5 W",
            "Direccionales delanteras": "12 V, 10W",
            "Direccionales traseras": "12 V, 10W",
            "Indicadores del tablero": "12 V, 2W"
          }
        },
        "resumen": {
          "cc": "144,8",
          "hp": "11,84",
          "nm": "12,55",
          "peso": "128",
          "tanque": "11"
        }
      }
    ],
    "descripcion": "Chasis y suspensión reforzados para carga y vías destapadas. La opción del transportador y del campo."
  },
  {
    "slug": "discover-125",
    "nombre": "Discover 125 Sport",
    "linea": "discover",
    "fotos": 1,
    "lema": "La siempre confiable y en la calle imparable",
    "destacados": [
      "125 más potente con 12.82 HP",
      "3 tecnologías de motor: 4 válvulas, Exhaustec y DTS-i",
      "Suspensión Mono-Nitrox trasera con nitrógeno",
      "Freno disco delantero con CBS",
      "Diseño deportivo con farola halógena"
    ],
    "versiones": [
      {
        "nombre": "125 Sport",
        "precio": 6999000,
        "fuente": "https://grupouma.com/colombia/motos/discover/discover-125-sport/",
        "colores": [
          "Azul"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, Monocilíndrico, SOHC, DTSi, 4 Válvulas",
            "Cilindraje": "124.6 cc",
            "Potencia máxima": "12.82 Hp @ 9000 rpm",
            "Torque máximo": "10.79 N.m @ 6500 rpm",
            "Alimentación": "Carburador",
            "Embrague": "Multi-Disco Bañado en Aceite",
            "Transmisión": "5 Velocidades",
            "Arranque": "Eléctrico y Pedal"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Tubular con Cuna Semi-doble",
            "Suspensión trasera": "Brazo oscilante, Mono-Nitrox, 110 mm recorrido",
            "Freno delantero": "Disco de 200 mm con CBS",
            "Freno trasero": "Tambor 130 mm con CBS",
            "Llanta delantera": "2.75-17, 41P Tubetype",
            "Llanta trasera": "3.00-17, 50P Tube Type"
          },
          "Dimensiones": {
            "Largo": "1994 mm",
            "Ancho": "714 mm",
            "Alto": "1078 mm",
            "Distancia entre ejes": "1300 mm",
            "Distancia al piso": "170 mm",
            "Altura del sillín": "780 mm",
            "Peso en vacío": "127 Kg",
            "Tanque": "10 L",
            "Reserva": "3.4 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Análogo",
            "Batería": "12 V, 5 Ah",
            "Farola": "12V 35/35 W",
            "Stop": "12 V 21/5 W",
            "Direccionales": "12 V, 10W",
            "Indicadores del tablero": "12 V, 1.7W",
            "Luz porta placa": "12 V 3W"
          }
        },
        "resumen": {
          "cc": "124,6",
          "hp": "12,82",
          "nm": "10,79",
          "peso": "127",
          "tanque": "10"
        }
      }
    ],
    "descripcion": "Punto medio entre economía y confort: asiento largo, suspensión suave y buen rendimiento de combustible para el día a día."
  },
  {
    "slug": "pulsar-n125",
    "nombre": "Pulsar N125",
    "linea": "pulsar",
    "fotos": 4,
    "lema": "Tu Primera Moto, Tu Primer Poder",
    "destacados": [
      "Diseño aerodinámico ágil y moderno",
      "Una de las mejores relaciones peso/potencia del segmento",
      "Suspensión trasera con monoamortiguador",
      "Tablero digital con conectividad",
      "Farola y Stop con iluminación LED"
    ],
    "versiones": [
      {
        "nombre": "Carburada",
        "precio": 7599000,
        "fuente": "https://grupouma.com/colombia/motos/pulsar/pulsar-n125-carburada/",
        "colores": [
          "Blanca"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, SOHC cilindro único",
            "Cilindraje": "124,59 cc",
            "Potencia máxima": "11.53 Hp @ 8000 rpm",
            "Torque máximo": "11 N.m @ 6000 rpm",
            "Refrigeración": "Aire",
            "Alimentación": "Carburador",
            "Transmisión": "5 Velocidades",
            "Arranque": "Eléctrico y pedal. Encendido silencioso"
          },
          "Chasis y frenos": {
            "Suspensión delantera": "Telescópica diámetro de 30 mm",
            "Suspensión trasera": "Suspensión con monoamortiguador",
            "Freno delantero": "Disco de 240 mm",
            "Freno trasero": "CBS Freno Tambor"
          },
          "Dimensiones": {
            "Distancia al piso": "198 mm",
            "Peso": "125 Kg",
            "Tanque": "9.5 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Digital LCD monocromático",
            "Farola": "LED",
            "Stop": "LED"
          }
        },
        "resumen": {
          "cc": "124,59",
          "hp": "11,53",
          "nm": "11",
          "peso": "125",
          "tanque": "9,5"
        }
      },
      {
        "nombre": "FI (inyección)",
        "precio": 8099000,
        "fuente": "https://grupouma.com/colombia/motos/pulsar/pulsar-n125-fi/",
        "colores": [
          "Blanco",
          "Negro",
          "Azul",
          "Rojo"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, SOHC cilindro único",
            "Cilindraje": "124,59 cc",
            "Potencia máxima": "11.84 Hp @ 6000 rpm",
            "Torque máximo": "11 N.m @ 6000 rpm",
            "Refrigeración": "Aire",
            "Alimentación": "Inyección Electrónica",
            "Transmisión": "5 Velocidades",
            "Arranque": "Eléctrico y pedal. Encendido silencioso con tecnología Start Stop"
          },
          "Chasis y frenos": {
            "Suspensión delantera": "Telescópica diámetro de 30 mm",
            "Suspensión trasera": "Suspensión con monoamortiguador",
            "Freno delantero": "Disco de 240 mm",
            "Freno trasero": "CBS Freno Tambor"
          },
          "Dimensiones": {
            "Distancia al piso": "198 mm",
            "Peso": "125 Kg",
            "Tanque": "9.5 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Digital LCD monocromático",
            "Farola": "LED",
            "Stop": "LED"
          }
        },
        "resumen": {
          "cc": "124,59",
          "hp": "11,84",
          "nm": "11",
          "peso": "125",
          "tanque": "9,5"
        }
      }
    ],
    "descripcion": "La entrada a la familia Pulsar: inyección electrónica, tablero digital y consumo bajo para moverte todos los días por la zona."
  },
  {
    "slug": "pulsar-ns125",
    "nombre": "Pulsar NS125",
    "linea": "pulsar",
    "fotos": 5,
    "lema": "Adrenalina y Estilo en Cada Kilómetro",
    "destacados": [
      "Diseño deportivo y agresivo",
      "Suspensión Mono-Nitrox",
      "4 válvulas para mayor eficiencia",
      "Freno de disco 240 mm con CBS",
      "Tablero digital LCD"
    ],
    "versiones": [
      {
        "nombre": "NS125",
        "precio": 8799000,
        "fuente": "https://grupouma.com/colombia/motos/pulsar/pulsar-ns-125/",
        "colores": [
          "Negro",
          "Azul"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, Monocilíndrico",
            "Cilindraje": "124.45 cc",
            "Potencia máxima": "12 Hp @ 8500 rpm",
            "Torque máximo": "11 N.m @ 7000 rpm",
            "Alimentación": "Carburador",
            "Transmisión": "5 Velocidades"
          },
          "Chasis y frenos": {
            "Suspensión delantera": "Horquilla Telescópica",
            "Suspensión trasera": "Mono Suspensión con Nitrox",
            "Freno delantero": "Disco de 240 mm con CBS",
            "Freno trasero": "Tambor de 130 mm"
          },
          "Dimensiones": {
            "Peso": "141 Kg",
            "Tanque": "12 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Digital LCD",
            "Farola": "LED",
            "Stop": "LED",
            "Direccionales": "LED"
          }
        },
        "resumen": {
          "cc": "124,45",
          "hp": "12",
          "nm": "11",
          "peso": "141",
          "tanque": "12"
        }
      }
    ],
    "descripcion": "El chasis perimetral de la familia NS en formato 125. Ágil en ciudad y con la postura deportiva que caracteriza a la línea."
  },
  {
    "slug": "pulsar-p150",
    "nombre": "Pulsar P150",
    "linea": "pulsar",
    "fotos": 1,
    "lema": "Más potente, ligera y recargada",
    "destacados": [
      "Iluminación LED con faro ojo de ángel",
      "Motor Full Injection 149.68 cc",
      "Frenos ABS monocanal",
      "Tablero Infinity Display LED",
      "Tanque más delgado para mejor ergonomía"
    ],
    "versiones": [
      {
        "nombre": "P150",
        "precio": 8999000,
        "fuente": "https://grupouma.com/colombia/motos/pulsar/pulsar-p150/",
        "colores": [
          "Gris Grafito",
          "Negro",
          "Blanco"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, Monocilíndrico, 2 Válvulas",
            "Cilindraje": "149.68 cc",
            "Potencia máxima": "14.3 Hp @ 8500 rpm",
            "Torque máximo": "13.5 N.m @ 6000 rpm",
            "Alimentación": "Inyección Electrónica",
            "Transmisión": "5 Velocidades"
          },
          "Chasis y frenos": {
            "Suspensión delantera": "Hidráulica, Telescópica vertical 31 mm",
            "Suspensión trasera": "Mono Suspensión",
            "Freno delantero": "Disco de 260 mm, ABS un solo canal",
            "Freno trasero": "Disco de 230 mm"
          },
          "Dimensiones": {
            "Peso": "140 Kg",
            "Tanque": "14 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Análogo – Digital, Full LED",
            "Farola": "LED Sistema DRL",
            "Stop": "LED"
          }
        },
        "resumen": {
          "cc": "149,68",
          "hp": "14,3",
          "nm": "13,5",
          "peso": "140",
          "tanque": "14"
        }
      }
    ],
    "descripcion": "Pensada para el uso diario sin renunciar al nombre Pulsar: asiento largo, postura erguida y buen rendimiento de combustible."
  },
  {
    "slug": "pulsar-n160",
    "nombre": "Pulsar N160 Pro",
    "linea": "pulsar",
    "fotos": 4,
    "lema": "Tecnología hecha potencia",
    "destacados": [
      "Tablero digital con conectividad al celular",
      "Iluminación Full LED",
      "ABS doble canal con modos configurables",
      "Clutch Antirrebote",
      "Suspensión Invertida"
    ],
    "versiones": [
      {
        "nombre": "N160 Pro",
        "precio": 10999000,
        "fuente": "https://grupouma.com/colombia/motos/pulsar/pulsar-n160-pro/",
        "colores": [],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, SOHC cilindro único",
            "Cilindraje": "164,82 cc",
            "Potencia máxima": "15,78 HP @ 8750 RPM",
            "Torque máximo": "14,65N.M @ 6750 RPM",
            "Refrigeración": "Aire",
            "Alimentación": "Inyección Electrónica",
            "Transmisión": "5 Velocidades 1 hacia abajo, 4 hacia arriba"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Chasis Cuna Simple Abierto",
            "Suspensión delantera": "Hidráulica, suspensión invertida",
            "Suspensión trasera": "Mono Suspensión",
            "Freno delantero": "ABS, Disco de 300 mm",
            "Freno trasero": "ABS, Disco de 230 mm",
            "Llanta delantera": "100/80-17, Tubeless",
            "Llanta trasera": "130/70-17, Tubeless"
          },
          "Dimensiones": {
            "Largo": "1980 mm",
            "Ancho": "743 mm",
            "Alto": "1050 mm",
            "Distancia entre ejes": "1348 mm",
            "Distancia al piso": "165 mm"
          },
          "Eléctrico y tablero": {
            "Batería": "12 V, 4 Ah, VRLA",
            "Farola": "LED DRL",
            "Luz posición": "LED",
            "Stop": "LED",
            "Direccionales delanteras": "LED",
            "Indicadores del tablero": "LED",
            "Luz porta placa": "12 V, 5 W"
          }
        },
        "resumen": {
          "cc": "164,82",
          "hp": "15,78",
          "nm": "14,65",
          "peso": null,
          "tanque": null
        }
      }
    ],
    "nota": "El catálogo oficial vigente es la N160 Pro; valida que las fotos correspondan a esta versión.",
    "descripcion": "Naked de 160 cc con suspensión invertida, ABS de doble canal con modos, clutch antirrebote y tablero con conectividad."
  },
  {
    "slug": "pulsar-ns160",
    "nombre": "Pulsar NS160 FI ABS",
    "linea": "pulsar",
    "fotos": 3,
    "lema": "¡Es tu momento de ser dueño de las calles!",
    "destacados": [
      "Tablero digital con conectividad al celular",
      "Iluminación Full LED",
      "Frenos ABS doble canal configurables",
      "Suspensión delantera invertida",
      "Motor inyección electrónica 160.3 cc"
    ],
    "versiones": [
      {
        "nombre": "NS160 FI ABS",
        "precio": 11199000,
        "fuente": "https://grupouma.com/colombia/motos/pulsar/pulsar-ns-160-fi-abs-2027/",
        "colores": [
          "Negro Zafiro"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, Monocilíndrico, SOHC, DTSi, 4 Válvulas",
            "Cilindraje": "160.3 cc",
            "Potencia máxima": "16.75 Hp @ 9000 ± 250 rpm",
            "Torque máximo": "14.6 N.m @ 7250 ± 250 rpm",
            "Alimentación": "Inyección Electrónica",
            "Embrague": "Multi-Disco Bañado en Aceite",
            "Transmisión": "5 Velocidades (1 hacia abajo, 4 hacia arriba)",
            "Arranque": "Eléctrico y pedal"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Perimetral",
            "Suspensión delantera": "Hidráulica, Telescópica Invertida",
            "Suspensión trasera": "Monoamortiguador",
            "Freno delantero": "ABS, Disco de 300 mm",
            "Freno trasero": "ABS, Disco de 230 mm",
            "Llanta delantera": "100/80-17, 52P, Tubeless",
            "Llanta trasera": "130/70-17, 62P, Tubeless"
          },
          "Dimensiones": {
            "Largo": "2017 mm",
            "Ancho": "803.5 mm",
            "Alto": "1060 mm",
            "Distancia entre ejes": "1372 mm",
            "Distancia al piso": "170 mm",
            "Peso": "152 Kg",
            "Tanque": "12 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Digital, Full LED",
            "Batería": "12 V, 4 Ah, VRLA",
            "Farola": "LED DRL",
            "Stop": "LED",
            "Direccionales delanteras": "LED",
            "Direccionales traseras": "LED",
            "Indicadores del tablero": "LED"
          }
        },
        "resumen": {
          "cc": "160,3",
          "hp": "16,75",
          "nm": "14,6",
          "peso": "152",
          "tanque": "12"
        }
      }
    ],
    "descripcion": "Deportiva naked con chasis perimetral y motor de cuatro válvulas. Estabilidad alta en carretera y frenado con ABS."
  },
  {
    "slug": "pulsar-ns200",
    "nombre": "Pulsar NS200 FI ABS",
    "linea": "pulsar",
    "fotos": 4,
    "lema": "Domina las calles con estilo y seguridad",
    "destacados": [
      "Motor DTS-i 4 válvulas con combustión de doble chispa",
      "ABS doble canal con 3 modos de frenada",
      "Tablero digital con conectividad y app Bajaj Ride Connect",
      "Farola LED con luz DRL e iluminación completa LED",
      "Clutch anti rebote y sillín deportivo"
    ],
    "versiones": [
      {
        "nombre": "SC · ABS monocanal",
        "precio": 13199000,
        "fuente": "https://grupouma.com/colombia/motos/pulsar/pulsar-ns200-fi-abs-sc/",
        "colores": [
          "Gris Ónix",
          "Negro",
          "Blanco"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, OHC, cilindro único, Refrigeración líquida",
            "Cilindraje": "199.4 cc",
            "Potencia máxima": "24,16 HP @9.750 RPM",
            "Torque máximo": "18,74 Nm @8.000 RPM",
            "Alimentación": "Inyección Electrónica",
            "Embrague": "Multi-Disco Bañado en Aceite con Slipper Clutch",
            "Transmisión": "6 Velocidades (1 hacia abajo, 5 hacia arriba)",
            "Arranque": "Eléctrico"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Perimetral",
            "Suspensión delantera": "Hidráulica, Telescópica Convencional",
            "Suspensión trasera": "Mono Suspensión",
            "Freno delantero": "ABS, Disco de 300 mm",
            "Freno trasero": "Disco de 230 mm",
            "Llanta delantera": "100/80-17, Tubeless",
            "Llanta trasera": "130/70-17, Tubeless"
          },
          "Dimensiones": {
            "Largo": "2017 mm",
            "Ancho": "804 mm",
            "Alto": "1075 mm",
            "Distancia entre ejes": "1363 mm",
            "Distancia al piso": "168 mm",
            "Peso": "159 Kg",
            "Tanque": "12 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Digital con conectividad",
            "Batería": "12 V, 8 Ah, VRLA",
            "Farola": "LED DRL",
            "Stop": "LED",
            "Direccionales delanteras": "LED",
            "Direccionales traseras": "LED",
            "Indicadores del tablero": "LED"
          }
        },
        "resumen": {
          "cc": "199,4",
          "hp": "24,16",
          "nm": "18,74",
          "peso": "159",
          "tanque": "12"
        }
      },
      {
        "nombre": "DC · ABS doble canal",
        "precio": 15799000,
        "fuente": "https://grupouma.com/colombia/motos/pulsar/pulsar-ns200-fi-abs/",
        "colores": [
          "Rojo Merlot",
          "Negro",
          "Azul"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, Monocilíndrico, SOHC, DTSi, 4 Válvulas",
            "Cilindraje": "199.4 cc",
            "Potencia máxima": "24.16 Hp @ 9750 ± 250 rpm",
            "Torque máximo": "18.74 N.m @ 8000 ± 250 rpm",
            "Alimentación": "Inyección Electrónica",
            "Embrague": "Multi-Disco Bañado en Aceite",
            "Transmisión": "6 Velocidades",
            "Arranque": "Eléctrico"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Perimetral",
            "Suspensión delantera": "Telescópica Invertida",
            "Suspensión trasera": "Monoamortiguador",
            "Freno delantero": "ABS, Disco de 300 mm",
            "Freno trasero": "ABS, Disco de 230 mm",
            "Llanta delantera": "100/80-17, 52P, Tubeless",
            "Llanta trasera": "130/70-17, 62P, Tubeless"
          },
          "Dimensiones": {
            "Largo": "2015 mm",
            "Ancho": "803.5 mm",
            "Alto": "1075 mm",
            "Distancia entre ejes": "1363 mm",
            "Distancia al piso": "169 mm",
            "Peso": "155 Kg",
            "Tanque": "12 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Digital con conectividad",
            "Batería": "12 V, 8 Ah, VRLA",
            "Farola": "12V, 55 W / 60 W, H4",
            "Stop": "LED",
            "Direccionales delanteras": "12V 10W (2)",
            "Direccionales traseras": "12V 10W (2)",
            "Indicadores del tablero": "LED"
          }
        },
        "resumen": {
          "cc": "199,4",
          "hp": "24,16",
          "nm": "18,74",
          "peso": "155",
          "tanque": "12"
        }
      }
    ],
    "descripcion": "Refrigeración líquida, cuatro válvulas y triple bujía. La naked de 200 cc de referencia en Colombia."
  },
  {
    "slug": "pulsar-rs200",
    "nombre": "Pulsar RS200 FI ABS",
    "linea": "pulsar",
    "fotos": 1,
    "lema": "La pulsar más rápida",
    "destacados": [
      "Motor DTS-i 4 válvulas",
      "Fuel Injection (FI)",
      "Sistema de frenos antibloqueo (ABS)",
      "Diseño Deportivo",
      "Tablero Digital Full LED"
    ],
    "versiones": [
      {
        "nombre": "RS200",
        "precio": 15999000,
        "fuente": "https://grupouma.com/colombia/motos/pulsar/pulsar-rs-200/",
        "colores": [],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, Monocilíndrico, SOHC, DTSi, 4 Válvulas",
            "Cilindraje": "199.5 CC",
            "Potencia máxima": "24.13 Hp @ 9750 rpm",
            "Torque máximo": "18.6 N.m @ 8000 rpm",
            "Diámetro × carrera": "72 mm x 49.00 mm",
            "Alimentación": "Inyección Electrónica",
            "Embrague": "Multi-Disco Bañado en Aceite",
            "Transmisión": "6 Velocidades",
            "Arranque": "Eléctrico"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Perimetral",
            "Suspensión delantera": "Hidráulica, Telescópica Vertical 120 mm recorrido",
            "Suspensión trasera": "Mono Suspensión con Nitrox, 110 mm recorrido",
            "Freno delantero": "ABS, Disco de 320 mm",
            "Freno trasero": "ABS, Disco de 230 mm",
            "Llanta delantera": "100/80-17 , 52P Tubeless",
            "Llanta trasera": "130/70-17 , 61P Tubeless"
          },
          "Dimensiones": {
            "Largo": "1999 mm",
            "Ancho": "765 mm",
            "Alto": "1114 mm",
            "Distancia entre ejes": "1345 mm",
            "Distancia al piso": "157 mm",
            "Peso": "164 Kg",
            "Tanque": "13 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Digital, Full LED",
            "Batería": "12 V, 8 Ah, VRLA",
            "Farola": "12 V 55 W Bajas y 65 W Altas",
            "Stop": "LED",
            "Direccionales delanteras": "LED",
            "Direccionales traseras": "LED",
            "Indicadores del tablero": "LED"
          }
        },
        "resumen": {
          "cc": "199,5",
          "hp": "24,13",
          "nm": "18,6",
          "peso": "164",
          "tanque": "13"
        }
      }
    ],
    "descripcion": "La única carenada de la familia: aerodinámica completa, faros proyectores y ABS. Pensada para carretera abierta."
  },
  {
    "slug": "pulsar-ns400z",
    "nombre": "Pulsar NS400Z",
    "linea": "pulsar",
    "fotos": 4,
    "lema": "Siente el Poder",
    "destacados": [
      "Motor 373 cc con 43 HP @ 7,500 rpm",
      "Frenos ABS doble canal",
      "Suspensión delantera invertida",
      "Consola Bluetooth conectada",
      "Control de tracción"
    ],
    "versiones": [
      {
        "nombre": "NS400Z",
        "precio": 18299000,
        "fuente": "https://grupouma.com/colombia/motos/pulsar/pulsar-ns400z/",
        "colores": [
          "Pulsarmanía"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 Tiempos, DOHC cilindro único",
            "Cilindraje": "373,27 cc",
            "Potencia máxima": "43 HP @ 7,500 rpm",
            "Torque máximo": "35 N.m @ 7000 rpm",
            "Alimentación": "Inyección Electrónica",
            "Embrague": "Multi-Disco Bañado en Aceite con Slipper Clutch",
            "Transmisión": "6 Velocidades (1 hacia abajo, 5 hacia arriba)",
            "Arranque": "Eléctrico"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Perimetral con Cuna Abierta",
            "Suspensión delantera": "Hidráulica, Suspensión Invertida",
            "Suspensión trasera": "Mono Suspensión Nitrox",
            "Freno delantero": "ABS, Disco de 320 mm",
            "Freno trasero": "ABS, Disco 230 mm",
            "Llanta delantera": "120/70 ZR17",
            "Llanta trasera": "150/60 ZR17"
          },
          "Dimensiones": {
            "Largo": "1990 mm",
            "Ancho": "820 mm",
            "Alto": "1057 mm",
            "Distancia entre ejes": "1344 mm",
            "Distancia al piso": "165 mm",
            "Peso": "174 Kg",
            "Tanque": "12 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "LCD a color con pantalla de Multiple Información",
            "Batería": "12V, 8Ah, VRLA",
            "Farola": "LED",
            "Stop": "LED",
            "Direccionales": "LED",
            "Indicadores del tablero": "LED"
          }
        },
        "resumen": {
          "cc": "373,27",
          "hp": "43",
          "nm": "35",
          "peso": "174",
          "tanque": "12"
        }
      }
    ],
    "descripcion": "La Pulsar más potente de la historia. Modos de manejo, ABS de doble canal y 40 HP en un chasis perimetral."
  },
  {
    "slug": "dominar-400",
    "nombre": "Dominar 400",
    "linea": "dominar",
    "fotos": 3,
    "lema": "La mejor sport tourer",
    "destacados": [
      "Parrilla trasera con espaldar incluido",
      "Cúpula alta para protección contra viento",
      "Protector de motor",
      "Puerto USB integrado",
      "Frenos ABS"
    ],
    "versiones": [
      {
        "nombre": "Touring",
        "precio": 19399000,
        "fuente": "https://grupouma.com/colombia/motos/dominar/dominar-400-touring/",
        "colores": [
          "Negro",
          "Gris",
          "Azul"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 tiempos, Monocilíndrico, DOHC",
            "Cilindraje": "373.27 cc",
            "Potencia máxima": "39.43 Hp @ 8650 rpm",
            "Torque máximo": "35 N.m @ 7000 rpm",
            "Diámetro × carrera": "89 mm x 60 mm",
            "Alimentación": "Inyección Electrónica",
            "Embrague": "Multi-Disco Bañado en Aceite + Anti-rebote",
            "Transmisión": "6 Velocidades",
            "Arranque": "Eléctrico"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Perimetral",
            "Suspensión delantera": "Hidráulica, Telescópica Invertida",
            "Suspensión trasera": "Mono Suspensión con Nitrox",
            "Freno delantero": "ABS, Disco de 320 mm",
            "Freno trasero": "ABS, Disco de 230 mm",
            "Llanta delantera": "110/70R17, 54S Tubeless",
            "Llanta trasera": "150/60R17, 66S Tubeless"
          },
          "Dimensiones": {
            "Largo": "2156 mm",
            "Ancho": "836 mm",
            "Alto": "1112 mm",
            "Distancia entre ejes": "1453 mm",
            "Distancia al piso": "157 mm",
            "Peso": "192 Kg",
            "Tanque": "13 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Digital, Full LED",
            "Batería": "12 V, 8 Ah, VRLA",
            "Farola": "LED",
            "Stop": "LED",
            "Direccionales delanteras": "LED",
            "Direccionales traseras": "LED",
            "Indicadores del tablero": "LED"
          }
        },
        "resumen": {
          "cc": "373,27",
          "hp": "39,43",
          "nm": "35",
          "peso": "192",
          "tanque": "13"
        }
      },
      {
        "nombre": "Volcano",
        "precio": 20399000,
        "fuente": "https://grupouma.com/colombia/motos/dominar/dominar-400-volcano/",
        "colores": [
          "Black"
        ],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 tiempos, Monocilíndrico, DOHC, DTs-i, 4 Válvulas",
            "Cilindraje": "373.27 cc",
            "Potencia máxima": "39.43 Hp @ 8800 rpm",
            "Torque máximo": "35 N.m @ 6500 rpm",
            "Diámetro × carrera": "89 mm x 60 mm",
            "Alimentación": "Inyección Electrónica",
            "Embrague": "Multi-Disco Bañado en Aceite + Anti-rebote",
            "Transmisión": "6 Velocidades",
            "Arranque": "Eléctrico"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Perimetral",
            "Suspensión delantera": "Hidráulica, Telescópica Invertida",
            "Suspensión trasera": "Mono Suspensión con Nitrox",
            "Freno delantero": "ABS, Disco de 320 mm",
            "Freno trasero": "ABS, Disco de 230 mm",
            "Llanta delantera": "110/70R17, 54S Tubeless",
            "Llanta trasera": "150/60R17, 66S Tubeless"
          },
          "Dimensiones": {
            "Largo": "2156 mm",
            "Ancho": "863 mm",
            "Alto": "1243 mm",
            "Distancia entre ejes": "1453 mm",
            "Distancia al piso": "157 mm",
            "Peso": "192 Kg",
            "Tanque": "13 L"
          },
          "Eléctrico y tablero": {
            "Tablero": "Digital, Full LED",
            "Batería": "12 V, 8 Ah, VRLA",
            "Farola": "LED",
            "Stop": "LED",
            "Direccionales delanteras": "LED",
            "Direccionales traseras": "LED",
            "Indicadores del tablero": "LED"
          }
        },
        "resumen": {
          "cc": "373,27",
          "hp": "39,43",
          "nm": "35",
          "peso": "192",
          "tanque": "13"
        }
      }
    ],
    "galeriaExtra": [
      "dominar-400-tera/1.webp",
      "dominar-400-tera/2.webp"
    ],
    "nota": "Valida qué fotos corresponden a la versión Touring y cuáles a la Volcano.",
    "descripcion": "La insignia de Bajaj para carretera: 40 HP, suspensión invertida, iluminación LED y tablero secundario en el tanque."
  },
  {
    "slug": "torito",
    "nombre": "Torito",
    "linea": "motocarros",
    "fotos": 0,
    "lema": "Tu mejor socio en el camino",
    "destacados": [
      "Diseñado para sacar el máximo provecho de cada trayecto",
      "Se adapta a múltiples usos y terrenos",
      "Firme, resistente y siempre listo",
      "Motor DTSi de doble chispa, 4 tiempos",
      "Caja de cambios 4 velocidades + reversa"
    ],
    "versiones": [
      {
        "nombre": "Torito",
        "precio": 17999000,
        "fuente": "https://grupouma.com/colombia/motos/torito/torito/",
        "colores": [],
        "specs": {
          "Motor": {
            "Tipo de motor": "DTSi de doble chispa, de 4 tiempos",
            "Cilindraje": "198.88 cc",
            "Potencia máxima": "10.19 Hp @ 5000 rpm",
            "Torque máximo": "17 N.m @ 3500 rpm",
            "Transmisión": "4 Velocidades + Reversa",
            "Encendido": "CDI DC"
          },
          "Chasis y frenos": {
            "Suspensión delantera": "Articulada monobrazo + resorte helicoidal + amortiguador hidráulico de doble efecto",
            "Suspensión trasera": "Articulada monobrazo + resorte helicoidal + amortiguador hidráulico de doble efecto",
            "Freno delantero": "Tambor",
            "Freno trasero": "Tambor",
            "Llanta delantera": "4.00 -8 6 PR Tubetype",
            "Llanta trasera": "4.00 -8 6 PR Tubetype"
          },
          "Dimensiones": {
            "Largo": "1995 mm",
            "Ancho": "765 mm",
            "Alto": "1045 mm",
            "Distancia entre ejes": "1325 mm",
            "Distancia al piso": "170 mm",
            "Peso": "128 kg",
            "Tanque": "10,5 L"
          },
          "Eléctrico y tablero": {
            "Batería": "12 V, 32 Ah",
            "Farola": "12 V 35/35 W",
            "Faros": "Dos luces delanteras",
            "Luz posición": "12 V 5 W",
            "Stop": "12 V 21/5 W",
            "Direccionales": "12 V, 10 W"
          }
        },
        "resumen": {
          "cc": "198,88",
          "hp": "10,19",
          "nm": "17",
          "peso": "128",
          "tanque": "10,5"
        }
      }
    ],
    "descripcion": "Motocarro de pasajeros y trabajo con motor DTS-i de doble chispa y caja de 4 velocidades más reversa."
  },
  {
    "slug": "maxima-cargo",
    "nombre": "Máxima Cargo",
    "linea": "motocarros",
    "fotos": 0,
    "lema": "Tu negocio más rentable que nunca",
    "destacados": [
      "Ahorro en cada kilómetro recorrido",
      "Diseñada para moverte con agilidad",
      "Se ajusta a distintos retos, rutas y cargas",
      "Carga máxima de 500 kg",
      "4 versiones disponibles: Pick Up, Estacas, Carpado, Furgón"
    ],
    "versiones": [
      {
        "nombre": "Máxima Cargo",
        "precio": 22999000,
        "fuente": "https://grupouma.com/colombia/motos/maxima-cargo/maxima-cargo/",
        "colores": [],
        "specs": {
          "Motor": {
            "Tipo de motor": "4 tiempos, Monocilíndrico, SOHC, DTS-i",
            "Cilindraje": "236.2 cc",
            "Potencia máxima": "10.72 Hp @ 4500 rpm",
            "Torque máximo": "20.1 N.m @ 3000 rpm",
            "Diámetro × carrera": "67 x 67 mm",
            "Alimentación": "Carburador",
            "Embrague": "Multi-disco bañado en aceite + anti-vibración",
            "Transmisión": "4 Velocidades + Reversa",
            "Arranque": "Eléctrico"
          },
          "Chasis y frenos": {
            "Tipo de chasis": "Monocasco",
            "Suspensión delantera": "Articulada de doble brazo + resortes helicoidales + amortiguadores hidráulicos de doble efecto",
            "Suspensión trasera": "Trapecio + resortes helicoidales de compresión + amortiguadores hidráulicos de doble efecto",
            "Freno delantero": "Tambor de 200 mm",
            "Freno trasero": "Tambor de 200 mm",
            "Llanta delantera": "4.50 – 10, 8PR Tubetype",
            "Llanta trasera": "4.50 – 10, 8PR Tubetype"
          },
          "Dimensiones": {
            "Largo": "3230 mm",
            "Ancho": "1493 mm",
            "Alto": "1818 mm",
            "Distancia entre ejes": "2125 mm",
            "Distancia al piso": "190 mm",
            "Peso": "495 kg",
            "Tanque": "12 L",
            "Capacidad": "1 conductor + 500 kg de carga",
            "Radio de giro": "3240 mm"
          },
          "Eléctrico y tablero": {
            "Tablero": "Análogo",
            "Batería": "12 V, 32 Ah",
            "Farola": "12 V 35/35 W",
            "Stop": "12 V 21/5 W",
            "Direccionales delanteras": "12 V, 10 W",
            "Direccionales traseras": "12 V, 10 W",
            "Indicadores del tablero": "12 V, 5 W"
          }
        },
        "resumen": {
          "cc": "236,2",
          "hp": "10,72",
          "nm": "20,1",
          "peso": "495",
          "tanque": "12"
        }
      }
    ],
    "nota": "El listado de Grupo UMA mostró $23.799.000 y la ficha $22.999.000; se usa el de la ficha.",
    "descripcion": "Motocarro de carga con capacidad de 500 kg y cuatro carrocerías: Pick Up, Estacas, Carpado y Furgón."
  },
  {
    "slug": "pulsar-n250",
    "nombre": "Pulsar N 250",
    "linea": "pulsar",
    "fotos": 1,
    "lema": null,
    "destacados": [],
    "descripcion": "Naked de un cuarto de litro con embrague asistido antirrebote, ABS de doble canal y tablero con conectividad.",
    "disponible": false,
    "nota": "No aparece en el catálogo vigente de Grupo UMA (distribuidor oficial). Confirma si sigue a la venta o retíralo.",
    "versiones": [
      {
        "nombre": "Pulsar N 250",
        "precio": null,
        "fuente": null,
        "colores": [],
        "specs": {
          "Ficha de referencia": {
            "Cilindraje": "249.07 cc",
            "Potencia": "24.5 HP @ 8.750 rpm",
            "Torque": "21.5 Nm @ 6.500 rpm",
            "Embrague": "Asistido y antirrebote",
            "Frenos": "Disco 300 mm / disco 230 mm con ABS doble canal",
            "Transmisión": "5 velocidades",
            "Llantas": "17 pulgadas delantera y trasera",
            "Tanque": "14 litros"
          }
        },
        "resumen": {
          "cc": "249,07",
          "hp": "24,5",
          "nm": "21,5",
          "peso": null,
          "tanque": "14"
        }
      }
    ]
  },
  {
    "slug": "dominar-250",
    "nombre": "Dominar 250",
    "linea": "dominar",
    "fotos": 1,
    "lema": null,
    "destacados": [],
    "descripcion": "La entrada a la familia touring: motor refrigerado por líquido, ABS de doble canal y postura cómoda para viaje.",
    "disponible": false,
    "nota": "No aparece en el catálogo vigente de Grupo UMA (distribuidor oficial). Confirma si sigue a la venta o retíralo.",
    "versiones": [
      {
        "nombre": "Dominar 250",
        "precio": null,
        "fuente": null,
        "colores": [],
        "specs": {
          "Ficha de referencia": {
            "Cilindraje": "248.77 cc",
            "Potencia": "27 HP @ 8.500 rpm",
            "Torque": "23.5 Nm @ 6.500 rpm",
            "Refrigeración": "Líquida",
            "Frenos": "Disco 300 mm / disco 230 mm con ABS doble canal",
            "Transmisión": "6 velocidades",
            "Tanque": "13 litros"
          }
        },
        "resumen": {
          "cc": "248,77",
          "hp": "27",
          "nm": "23,5",
          "peso": null,
          "tanque": "13"
        }
      }
    ]
  },
  {
    "slug": "boxer-s",
    "nombre": "Boxer S",
    "linea": "boxer",
    "fotos": 1,
    "lema": null,
    "destacados": [],
    "descripcion": "La versión más equipada de la Boxer: freno de disco delantero y acabados deportivos sin perder la economía de la línea.",
    "disponible": false,
    "nota": "No aparece en el catálogo vigente de Grupo UMA (distribuidor oficial). Confirma si sigue a la venta o retíralo.",
    "versiones": [
      {
        "nombre": "Boxer S",
        "precio": null,
        "fuente": null,
        "colores": [],
        "specs": {
          "Ficha de referencia": {
            "Cilindraje": "144.8 cc",
            "Potencia": "12 HP @ 7.500 rpm",
            "Torque": "12.5 Nm @ 5.000 rpm",
            "Arranque": "Eléctrico y pedal",
            "Frenos": "Disco delantero / tambor trasero",
            "Suspensión": "Telescópica / doble amortiguador",
            "Transmisión": "5 velocidades",
            "Tanque": "12 litros"
          }
        },
        "resumen": {
          "cc": "144,8",
          "hp": "12",
          "nm": "12,5",
          "peso": null,
          "tanque": "12"
        }
      }
    ]
  }
]

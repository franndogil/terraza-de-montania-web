# Terraza de Montaña

Sitio web de **Terraza de Montaña**, una cabaña de alquiler ubicada en Los Morteritos, Panaholma, Valle de Traslasierra, Córdoba, Argentina.

El sitio presenta el alojamiento, su entorno natural y las actividades de la zona, e invita a los visitantes a consultar disponibilidad y contactarse por WhatsApp, Instagram o email.

## Características

- **Sitio estático** en HTML, CSS y JavaScript vanilla — sin frameworks ni build step.
- **Responsive** y pensado para mobile, con menú hamburguesa y CTA flotante.
- **Slider de imágenes** en la portada con loop infinito.
- **Galería con lightbox** en la página del alojamiento ([js/lightbox.js](js/lightbox.js)).
- **Mapa interactivo** de la zona con [MapLibre GL JS](https://maplibre.org/) ([lugares.html](lugares.html)).
- **SEO**: metadatos, Open Graph, datos estructurados JSON-LD (`LodgingBusiness`), `robots.txt` y `sitemap.xml`.

## Estructura del proyecto

```
terraza-de-montania-web/
├── index.html              # Inicio (hero slider + CTA)
├── nosotros.html           # Quiénes somos
├── alojamientos.html       # Listado de alojamientos
├── alojamiento-uno.html    # Cabaña en Los Morteritos (galería + detalle)
├── lugares.html            # La zona: lugares y actividades (mapa)
├── contacto.html           # Contacto
├── faqs.html               # Preguntas frecuentes
├── robots.txt
├── sitemap.xml
├── css/
│   ├── global.css          # Estilos base compartidos
│   ├── index.css           # Estilos por página
│   ├── nosotros.css
│   ├── alojamientos.css
│   ├── alojamiento-uno.css
│   ├── lugares.css
│   ├── contacto.css
│   ├── faqs.css
│   └── maplibre-gl.css     # Estilos del mapa (vendor)
├── js/
│   ├── main.js             # Navegación mobile y CTA flotante
│   ├── lightbox.js         # Galería de imágenes
│   └── maplibre-gl.js      # Librería del mapa (vendor)
└── assets/
    ├── fonts/              # Montserrat (variable font)
    ├── icons/              # Íconos de redes y contacto
    └── images/             # Logos, fotos del alojamiento, hero
```

## Páginas

| Página | Descripción |
|--------|-------------|
| `index.html` | Portada con slider de imágenes y llamado a consultar disponibilidad. |
| `nosotros.html` | Historia y presentación de los anfitriones. |
| `alojamientos.html` | Listado de los alojamientos disponibles. |
| `alojamiento-uno.html` | Ficha de la Cabaña en Los Morteritos: galería, servicios y detalles. |
| `lugares.html` | Mapa interactivo con lugares y actividades del Valle de Traslasierra. |
| `contacto.html` | Datos de contacto y accesos a WhatsApp, Instagram y email. |
| `faqs.html` | Preguntas frecuentes. |

## Cómo ejecutarlo localmente

El proyecto es un sitio estático, así que solo necesitás servir los archivos. Al usar rutas relativas y `fetch` (mapa), conviene un servidor local en lugar de abrir el HTML directamente.

Con Python:

```bash
python -m http.server 8000
```

Con Node (npx):

```bash
npx serve
```

Luego abrí <http://localhost:8000> en el navegador.

## Despliegue

Al ser estático, se puede publicar en cualquier hosting de archivos estáticos (GitHub Pages, Netlify, Vercel, etc.).

Antes de publicar, reemplazá el placeholder `TU-DOMINIO` por el dominio real en:

- [robots.txt](robots.txt)
- [sitemap.xml](sitemap.xml)
- Metadatos Open Graph de [alojamiento-uno.html](alojamiento-uno.html)

## Tecnologías

- HTML5 / CSS3 / JavaScript (vanilla)
- [MapLibre GL JS](https://maplibre.org/) — mapa interactivo (licencia BSD-3)
- Tipografía Montserrat

## Contacto

- **WhatsApp:** [+54 9 11 4027-3519](https://wa.me/5491140273519)
- **Instagram:** [@terrazademontana](https://instagram.com/terrazademontana)
- **Email:** terrazademontana@gmail.com
- **Ubicación:** Los Morteritos, Panaholma, Valle de Traslasierra, Córdoba, Argentina

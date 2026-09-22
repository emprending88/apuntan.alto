# Apuntan Alto

Sitio web estático (HTML/CSS/JS puro, sin frameworks ni dependencias de build) sobre criptomonedas, divisas y educación financiera.

## Estructura del proyecto

```
apuntan-alto/
├── index.html                 → Página de inicio
├── sobre-nosotros.html
├── contacto.html
├── politica-privacidad.html
├── politica-cookies.html
├── aviso-legal.html
├── 404.html                   → Página de error personalizada
├── robots.txt
├── sitemap.xml
├── css/style.css
├── js/main.js
└── articulos/
    ├── index.html              → Listado de artículos
    ├── que-es-bitcoin.html
    ├── guia-forex-principiantes.html
    └── stablecoins-explicadas.html
```

---

## 1. Antes de publicar: rellena los datos legales

Antes de subir el sitio, abre estos tres archivos y sustituye los textos entre corchetes `[ ]` por tus datos reales (titular, correo de contacto, jurisdicción, fecha):

- `politica-privacidad.html`
- `aviso-legal.html`
- `politica-cookies.html`

Esto es importante tanto por cumplimiento legal (RGPD si operas en la UE, o la normativa que te aplique) como porque **Google AdSense revisa que estas páginas existan y sean coherentes** antes de aprobar un sitio.

También sustituye `hola@apuntanalto.com` por tu correo real en `contacto.html` y en la política de privacidad.

---

## 2. Subir el proyecto a GitHub

1. Crea una cuenta en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo, público, por ejemplo llamado `apuntan-alto`. No marques "Add a README" (ya tienes uno).
3. En tu ordenador, dentro de la carpeta `apuntan-alto` que te he entregado, abre una terminal y ejecuta:

   ```bash
   git init
   git add .
   git commit -m "Primera versión del sitio Apuntan Alto"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/apuntan-alto.git
   git push -u origin main
   ```

   (Sustituye `TU-USUARIO` por tu nombre de usuario de GitHub.)

---

## 3. Publicar el sitio con GitHub Pages

1. En GitHub, entra en tu repositorio → pestaña **Settings**.
2. En el menú lateral, pincha en **Pages**.
3. En "Build and deployment" → "Source", elige **Deploy from a branch**.
4. En "Branch", selecciona `main` y la carpeta `/ (root)`. Guarda.
5. Espera uno o dos minutos. GitHub te mostrará una URL del tipo `https://TU-USUARIO.github.io/apuntan-alto/`. Compruébala: ya debería verse el sitio en vivo.

---

## 4. Conectar tu subdominio propio (paso a paso)

Esto asume que ya tienes un dominio comprado (por ejemplo en Namecheap, GoDaddy, IONOS, OVH, etc.) y quieres usar un subdominio, por ejemplo `www.apuntanalto.com` o `blog.tudominio.com`.

### 4.1. Añade el archivo CNAME al repositorio

1. Dentro de la carpeta del proyecto, crea un archivo llamado exactamente `CNAME` (sin extensión) que contenga una sola línea con tu subdominio, por ejemplo:

   ```
   www.apuntanalto.com
   ```

2. Súbelo al repositorio (`git add CNAME && git commit -m "Añadir CNAME" && git push`).

   Alternativa sin terminal: en GitHub, dentro del repositorio, pincha en "Add file" → "Create new file", escribe `CNAME` como nombre y pega tu subdominio como contenido.

### 4.2. Configura el DNS en tu proveedor de dominio

Entra en el panel de tu proveedor de dominio (donde lo compraste) y busca la sección de gestión de DNS. Añade un registro:

| Tipo  | Nombre / Host | Valor / Destino                  |
|-------|---------------|-----------------------------------|
| CNAME | `www` (o el subdominio que uses) | `TU-USUARIO.github.io` |

Si en vez de un subdominio (`www.tudominio.com`) quieres usar el dominio raíz (`tudominio.com`), en lugar de un CNAME necesitas registros **A** apuntando a las IPs de GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### 4.3. Activa el dominio en GitHub

1. Vuelve a **Settings → Pages** en tu repositorio.
2. En "Custom domain", escribe tu subdominio (`www.apuntanalto.com`) y guarda.
3. Espera a que aparezca la verificación en verde (puede tardar desde minutos hasta 24-48 horas, según la propagación del DNS).
4. Marca la casilla **Enforce HTTPS** en cuanto esté disponible, para que el sitio use `https://` automáticamente.

### 4.4. Actualiza las URLs del propio sitio

Los archivos `index.html` de cada página y `sitemap.xml` incluyen actualmente `https://www.apuntanalto.com/` como URL de referencia (para las etiquetas `canonical`, Open Graph y el mapa del sitio). Si usas un dominio distinto, busca y sustituye esa URL en todos los archivos por la tuya real.

---

## 5. Preparar el sitio para Google AdSense

AdSense revisa el sitio completo, no solo una página. Antes de solicitar tu cuenta:

- ✅ **Contenido propio y suficiente**: el sitio ya incluye tres artículos largos y originales. Antes de solicitar la revisión, es muy recomendable añadir más contenido (AdSense valora sitios con contenido sustancial, no solo una landing page). Escribe artículos nuevos siguiendo la misma estructura que los existentes en `articulos/`.
- ✅ **Páginas legales completas**: política de privacidad, política de cookies y aviso legal (ya incluidas; recuerda rellenar los datos reales).
- ✅ **Navegación clara**: menú, footer con enlaces a todas las secciones (ya incluido).
- ✅ **Dominio propio**: AdSense funciona con subdominios de GitHub Pages, pero un dominio propio (`tudominio.com`) transmite más seriedad y es lo recomendable.
- ✅ **Sitio accesible y sin errores**: revisa que todos los enlaces funcionen tras el despliegue.
- ⚠️ **Banner de cookies real**: antes de activar AdSense o Analytics, instala un gestor de consentimiento de cookies real (por ejemplo [CookieYes](https://www.cookieyes.com/) o [Cookiebot](https://www.cookiebot.com/), ambos con planes gratuitos), especialmente si vas a recibir visitas desde la Unión Europea.
- ⚠️ **Nada de contenido que prometa rentabilidad o "señales de trading"**: el contenido actual ya evita esto de forma deliberada. Mantén ese criterio en los artículos que añadas: Google es especialmente estricto con contenido financiero que pueda interpretarse como asesoramiento de inversión encubierto.

Cuando el sitio esté listo, solicita tu cuenta en [adsense.google.com](https://adsense.google.com), añade tu dominio y sigue las instrucciones para verificarlo (normalmente insertando un fragmento de código en el `<head>`, que te dará la propia plataforma).

**Importante:** ninguna guía puede garantizar la aprobación de AdSense — la decisión final es de Google y depende también de factores como la antigüedad del dominio, el tráfico y las políticas vigentes en el momento de la revisión.

---

## 6. Cómo editar el contenido

- Todos los textos están directamente en los archivos `.html`, en español.
- Los colores y tipografías se controlan desde `css/style.css` (variables al principio del archivo, bajo `:root`).
- Para añadir un artículo nuevo: duplica `articulos/que-es-bitcoin.html`, cambia el título, la descripción y el contenido dentro de `<article class="prose">`, y añade un enlace a él en `articulos/index.html` y en la sección "Artículos recientes" de `index.html`.
- El formulario de contacto y el de la newsletter son maquetas (no envían correos de verdad todavía). Para recibir los envíos, conecta un servicio como [Formspree](https://formspree.io) (tiene plan gratuito): solo tienes que cambiar el atributo `action` del `<form>` por la URL que te da Formspree y quitar el `data-local-form` de `js/main.js` si quieres su confirmación nativa.

---

## 7. Previsualizar en local antes de publicar

No hace falta ningún servidor especial. Basta con abrir `index.html` con doble clic en tu navegador, o —mejor, para que las rutas relativas se comporten igual que en producción— ejecutar desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

y visitar `http://localhost:8000` en el navegador.

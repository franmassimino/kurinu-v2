# Kurinu V2 — Handoff

## Estado del proyecto
Landing Next.js 16 (App Router) + React 19 + Tailwind v4. Todas las secciones del plan original ya están montadas en [app/page.tsx](../app/page.tsx): Navbar, Hero, WhatIsKurinu, About, Gallery, Features, TakeALook, HowToOrder, Commissions, Footer.

## Cambios de configuración recientes (importantes)
El dev server tiraba dos errores en cadena con Turbopack en Windows:

1. `Can't resolve 'tailwindcss' in 'C:\Users\Francisco\Documents\projects'` — Turbopack inferiía mal el workspace root al directorio padre (que tiene decenas de proyectos hermanos).
2. `Cannot find module 'unknown'` desde `lightningcss/node/index.js` — Turbopack no resuelve bien los `.node` addons que carga `@tailwindcss/node` en Windows, aunque el binario nativo (`lightningcss-win32-x64-msvc`) esté correctamente instalado.

**Solución aplicada:** se cambió a webpack en lugar de Turbopack. Estado final:

- [package.json](../package.json) — `"dev": "next dev --webpack"`, `"build": "next build --webpack"`.
- [postcss.config.mjs](../postcss.config.mjs) — formato objeto con strings (lo que webpack/Next esperan):
  ```js
  const config = { plugins: { "@tailwindcss/postcss": {} } };
  export default config;
  ```
- [next.config.ts](../next.config.ts) — sin config especial de turbopack, solo `images.remotePatterns` para `placehold.co`.

Cuando salga una versión de Next que arregle Turbopack + Tailwind v4 + Windows, se pueden quitar los `--webpack`.

## Lo que pide el PDF de feedback del cliente
[docs/document_pdf.pdf](document_pdf.pdf) (3 páginas) trae estos puntos:

1. **Sección "What is Kurinu E-Pets?"** debajo del hero, con texto exacto. ✅ Ya implementada en [components/WhatIsKurinu.tsx](../components/WhatIsKurinu.tsx) palabra por palabra.
2. **Resto perfecto hasta la galería**. ✅ Sin cambios pedidos.
3. **Sección "Commissions"** al final, con 4 comms (imágenes + reviews) y texto introductorio: *"This is a curated selection of the 40 final commissions that conclude the project, including examples both with and without customized elements such as faceplates and in-device items, along with client reviews"*. ✅ Implementada en [components/Commissions.tsx](../components/Commissions.tsx).

## Lo que falta concretamente

### 1. Imágenes nuevas (perro negro / rojo)
El cliente menciona en la página 2 del PDF que iba a pasar imágenes que aún no están: *"Te dejo en este link las que sé que no tienes (perro negro /rojo) Kurinu"* — el link del PDF apunta afuera y hay que descargarlas.

Hoy en [components/Gallery.tsx:36-48](../components/Gallery.tsx#L36-L48) se usan `/assets/1.webp` … `/assets/4.png` como placeholders. Reemplazar con las imágenes reales cuando lleguen.

### 2. Datos reales de las 4 commissions
En [components/Commissions.tsx:15-52](../components/Commissions.tsx#L15-L52) los avatares, fotos del carrusel y el campo `iconByHandle` (ahora `"#"`) están como placeholders reusando `/assets/1-5`. Hay que poner:
- Avatar e imágenes reales de cada comm (Skye, Viladze, E-West, Jasper).
- URLs reales de los autores del icon (CyanSorcery, Twinky Art, Nordeva, Jasper).

### 3. Fuente Dogica Pixel
La memoria dice que el archivo en uso es `public/fonts/DogicaPixelBold.otf`. Verificar que esté presente; si no, agregarlo.

## Cómo correr localmente
```bash
cd C:\Users\Francisco\Documents\projects\kurinu-v2
npm run dev
```

Si después de un `rm -rf node_modules` aparecen errores de PostCSS/Tailwind, **no volver a Turbopack** — la configuración con webpack es la que funciona en este equipo.

## Archivos clave
- Página principal: [app/page.tsx](../app/page.tsx)
- Layout y fuentes: [app/layout.tsx](../app/layout.tsx)
- Estilos globales y tokens Tailwind v4: [app/globals.css](../app/globals.css)
- Plan de diseño original (referencia): [docs/kurinu-epets-plan.md](kurinu-epets-plan.md)
- PDF de feedback del cliente: [docs/document_pdf.pdf](document_pdf.pdf)

## Stack y tokens (recordatorio)
- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`).
- Color primario `#C5BEF5` (lila), secundario `#A8D4E1` (celeste).
- Gradiente: `linear-gradient(to right, #C5BEF5, #A8D4E1)`.
- Fuente pixel: Dogica Pixel Bold (`next/font/local`). Fuente body: Montserrat (`next/font/google`).
- Utilidades en [app/globals.css](../app/globals.css): `.gradient-text`, `.gradient-bg`, `.btn-primary`, `.btn-outline-white`.

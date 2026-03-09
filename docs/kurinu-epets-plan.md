# Kurinu E-Pets - Landing Page Plan

## Overview
Migración de la página Webflow a una landing page en Next.js dentro del proyecto spikhyenna-portfolio.
Ruta: `app/(app)/kurinu/page.tsx` (o subdominio separado, por decidir)

---

## Secciones

### 1. Navbar
- Logo: icono pixel + "KURINU E-PETS"
- Links: Home | About | Gallery | Order yours | Contact (botón outline)
- Fondo: gradiente lila → celeste claro

### 2. Hero
- Background: foto de tamagotchi real (full width, altura ~600px)
- Headline: `Bring your Fursonas to life!`
  - "Fursonas" en lila, el resto en blanco
  - Pixel font
- Subtexto: "Custom E-Pets crafted with love to reflect your individual style and imagination. Start your journey today and experience the magic of true customization."
- CTAs:
  - Botón primario lila: "Order yours >"
  - Botón outline blanco: "Learn more"

### 3. About — Get to Know Us
- Fondo: blanco
- Título centrado: "Get to Know Us!" con pixel font
  - Mascota Yenna (pixel art) a la izquierda con speech bubble "I'M YENNA YOU CAN FIND ME HERE"
  - Mascota Sima (pixel art) a la derecha con speech bubble "I'M SIMA YOU CAN FIND ME HERE"
- Párrafo 1: "Hello! We're Yenna and Sima, two big fans of Tamagotchis. **Yenna** is a freelance illustrator working under the name Spikhyenna, while **Sima** is an independent photographer and filmmaker with a keen interest in programming."
- Párrafo 2: "Since 2023, we've been working together to bring this fantastic idea to life. We hope you like it and support us on the journey ahead as we develop our own device!"

### 4. Gallery — Create Your Own Custom E-Pet
- Layout: dos columnas (texto izquierda, grid derecha)
- Título: `Create Your Own Custom E-Pet` ("E-Pet" en lila, pixel font)
- Subtexto: "Experience the joy of owning a personalized E-Pet that reflects your style and character. With the combination of our unique artwork and advanced programming, **we take customization to the maximum level.**"
- Grid derecha: 2×2 con 4 fotos
  1. Fursuit (hiena/leopardo) con tamagotchi
  2. Tamagotchi en orejas rojas de fursuit
  3. Tamagotchi con charm colgando, fondo rosa
  4. Pantalla con sprite pixel art en software de edición
- Link debajo del grid: "See our gallery →"

### 5. Features
- Fondo: lila claro / lavanda suave
- Layout: 3 columnas centradas
- Cada feature: icono pixel art (mascota) arriba + título + descripción centrada
  1. **Unleash fun** — "Guaranteed fun for all ages! Perfect as gift and a vivid reminder of retro nostalgia" — mascota normal
  2. **Express yourself** — "Unlock a world of creativity with a wide range of character options for your custom E-Pet." — mascota con expresión enojada/cool
  3. **Fully customizable** — "We create each E-Pet from scratch tailored to your specifications for an unmatched experience." — mascota con destellos ✨
- Título en pixel font, descripción en sans-serif pequeño

### 6. Gallery — Take a Look
- Fondo: blanco
- Título centrado: "Take a look" (pixel font)
- Grid 2×2 (o masonry), imágenes grandes sin padding entre ellas
  1. Tamagotchi con charm, fondo rosa (vertical/grande, ocupa 2 filas a la izquierda)
  2. Unboxing kit: caja Kurinu, manual, stickers, charm (arriba derecha)
  3. Trading cards Kurinu E-Pets (abajo izquierda)
  4. Video embed de YouTube (thumbnail con play button rojo) — tamagotchi en mano mostrando pantalla (abajo derecha)
- Nota: la imagen izquierda es más alta (span 2 rows), las 2 de la derecha son cuadradas

### 7. How To / Order Process
- Fondo: blanco
- Supertítulo pequeño centrado: "Our customization and ordering process"
- Título: "How do I order mine?" (pixel font, negro)
- Layout: 5 pasos horizontales conectados con línea punteada lila entre cada número
- Cada paso: círculo lila con número → título en pixel font → descripción en sans-serif
  1. **Read manual** — "Read carefully our instructions before start customizing."
  2. **Personalize** — "Customize your E-Pet with our E-Pet designer."
  3. **Place order** — "Review your choices and send us your order for us to review.*"
  4. **Crafting time** — "Once your order is confirmed, we will start working on your E-Pet.**"
  5. **Enjoy!** — "Your unique E-Pet will be delivered to your doorstep."
- Notas al pie en texto pequeño lila:
  - `*Due to the artisanal nature of our work, we review and accept a limited number of orders at a time to ensure the highest quality and customer satisfaction :)`
  - `**This process takes between 2-4 months. we will keep in touch in the meanwhile, please be patient!`

### 8. Footer
- Fondo: gris muy claro / off-white
- Columna izquierda: logo (icono + "KURINU E-PETS")
- Columna central: links verticales en lila
  - Home
  - About
  - Gallery
  - Order yours
- Columna derecha: links verticales en lila
  - Contact
  - Terms of service
  - User instructions
- Línea divisoria horizontal lila fina
- Copyright: "© 2024 Created by **Kurinu**. All rights reserved."
- Sin redes sociales visibles en el footer (al menos en este screenshot)

---

## Orden final de secciones
1. Navbar
2. Hero
3. About — Get to Know Us
4. Create Your Own Custom E-Pet (texto + grid 2×2)
5. Features (3 columnas sobre fondo lavanda)
6. Gallery — Take a Look (grid asimétrico + video)
7. How Do I Order Mine? (5 pasos)
8. Footer

*(Sección "Commissions" no recordada — omitir por ahora o añadir después)*

---

## Assets necesarios
- [ ] Foto hero de fondo (tamagotchi real close-up)
- [ ] Mascotas pixel art: Yenna y Sima (PNG con transparencia, con speech bubbles)
- [ ] 3 variantes de mascota para features (normal, enojada, con destellos)
- [ ] 4 fotos para grid "Create Your E-Pet"
- [ ] 4 imágenes/video para grid "Take a Look"
- [ ] Logo/icono Kurinu E-Pets (PNG)
- [ ] YouTube embed ID para el video

## Design Tokens

### Typography
- **Primary (pixel/títulos):** Dogica Pixel
- **Secondary (body/descripciones):** Montserrat

### Colors
- **Primary:** `#C5BEF5` (lila lavanda)
- **Secondary:** `#A8D4E1` (celeste claro)

### Gradient
`linear-gradient(to right, #C5BEF5, #A8D4E1)` — usado en:
- **Botón primario:** fondo con gradiente, texto blanco
- **Botón secundario (outline):** sin fondo, borde y texto con gradiente
- **Palabras/fragmentos destacados en títulos:** clip de texto con gradiente (ej. "Custom E-Pet", "Fursonas", "E-Pet" en secciones)

---

## Decisiones pendientes
- [ ] ¿Ruta dentro del mismo proyecto (`/kurinu`) o repo separado?
- [ ] ¿Nuevo dominio o subpath?
- [ ] ¿Formulario de contacto real o solo link a Telegram/email?
- [x] ~~¿Pixel font a usar?~~ → **Dogica Pixel**

# 🧉 Matiemos – Recomendador de Merienda según el Clima

**Matiemos** es una aplicación web desarrollada con React.js que sugiere acompañamientos ideales para el mate, té o café, basándose en el clima actual del usuario. Es un proyecto personal enfocado en practicar habilidades de desarrollo frontend y diseño de producto digital.

## 🚀 Demo

👉 [Probar la app](https://matiemos.vercel.app/)

## ✨ Características

- Elección de bebida: mate, té o café.
- Recomendación de acompañamiento según el clima local.
- Lógica aleatoria para obtener nuevas sugerencias.
- Recetas incluidas para preparaciones caseras.
- Interfaz simple, amigable y responsive.
- Animaciones suaves con Material UI.
- Sonido de mate al presionar un botón especial.
- Input inicial de nombre guardado en `localStorage`.
- Icono personalizado (favicon) y fuentes personalizadas.
- JSON local con 15 acompañamientos detallados.

## 🛠️ Tecnologías utilizadas

- **React.js** (`useState`, `useEffect`, `useReducer`)
- **Custom Hook**: `useWeather` para obtener datos del clima
- **Material UI** (`Grow`, `Slide`, `Card`, `Button`)
- **CSS** personalizado para diseño responsive
- **JSON** como base de datos local
- **WebP** para optimización de imágenes
- **Vercel** para deploy

## 📂 Estructura del proyecto
/src
├── components
│ ├── Home.jsx
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── SuggestionCard.jsx
│ ├── AskName.jsx
│ └── ButtonSound.jsx
├── data
│ └── suggestion.json
├── hooks
│ └── useWeather.js
├── assets
│ └── (imágenes .webp y sonidos)
└── App.jsx

## 🔧 Cómo correrlo localmente

1. Cloná el repo:

   ```bash
   git clone https://github.com/Lautaro-Zarate/matiemos-
   cd matiemos

2. Instalá las dependencias:
    npm install

3. Corré el proyecto:
    npm run dev

## Desarrollador con cariño por Lautaro Zarate Rivas.

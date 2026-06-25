# VEX — Hero Section

Hero a pantalla completa con video de fondo, navbar "liquid glass", animación de
texto carácter por carácter y tarjeta de cristal.

**Stack:** React + TypeScript + Tailwind CSS + Vite.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El resultado queda en `dist/`.

## Publicación en GitHub Pages

El repo incluye un workflow (`.github/workflows/deploy.yml`) que compila y
publica automáticamente en cada push a `main`. Solo hay que activar Pages:

1. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Hacer push a `main`.

El link quedará en: `https://<tu-usuario>.github.io/<nombre-del-repo>/`

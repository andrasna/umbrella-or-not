# Umbrella Or Not 

A weather app built with Vite + React + TypeScript.  
Data comes from Open‑Meteo (no API key required).

🔗 **Live demo deployed Netlify:** [Umbrella Or Not](https://umbrella-or-not.netlify.app/?location=Budapest&latitude=47.49835&longitude=19.04045)


## Prerequisites
- Node.js
- npm

## Setup
1) Clone and install
```bash
git clone git@github.com:andrasna/umbrella-or-not.git
cd umbrella-or-not
npm install
```

2) Environment variables  
Copy `.env.template` to `.env` and adjust if needed:
```bash
cp .env.template .env
```
Default values:
```env
VITE_GEO_API_URL=https://geocoding-api.open-meteo.com/v1
VITE_METEO_API_URL=https://api.open-meteo.com/v1
```

## Run
```bash
npm run dev
```
App: http://localhost:5173

## Tech Stack
- React 19, React Router 7
- Vite 7
- TypeScript 5
- MUI 7, @mui/x-charts
- @tanstack/react-query 5
- axios

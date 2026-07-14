# React-App

Small Vite + React demo app with a JSON mock API.

## Prerequisites
- Node.js and npm (Node 16+ recommended)

## Install
```powershell
Set-Location -Path 'D:\codeio\React-App'
npm install
```

## Run the app
```powershell
Set-Location -Path 'D:\codeio\React-App'
npm run dev
```
- Vite normally serves at `http://localhost:5173/`; if that port is in use it will pick the next available port (e.g. `5174`).

## Start the mock API (json-server)
```powershell
Set-Location -Path 'D:\codeio\React-App'
npx json-server --watch data/dummy.json --port 3000
```
- Courses endpoint: `http://localhost:3000/courses`

## Notes
- Asset imports in `src/App.jsx` must match filenames in `src/assets` (e.g. `javascript.png`, not `js.png`).
- If Vite shows unresolved import errors, confirm the relative path and filename in the import statement.
- To disable the Vite overlay error screen, set `server.hmr.overlay` to `false` in `vite.config.js` (not recommended while debugging).

If you want, I can also add a short `npm` script to start both servers together or a `.env` file with ports.

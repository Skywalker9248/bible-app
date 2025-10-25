import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppSetupProvider from './providers/appSetupProvider.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppSetupProvider>
      <App />
    </AppSetupProvider>
  </StrictMode>,
)

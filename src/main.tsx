import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// If the user lands on any path other than '/' (e.g. /resume.pdf#journey after
// a refresh), redirect them back to the portfolio root while preserving the hash
// so the page still scrolls to the correct section.
if (window.location.pathname !== '/') {
  const hash = window.location.hash; // e.g. "#journey"
  window.history.replaceState(null, '', '/' + hash);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

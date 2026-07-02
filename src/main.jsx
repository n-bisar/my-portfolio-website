import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/typography.css";
import "./styles/animations.css";
import App from './App.jsx'
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

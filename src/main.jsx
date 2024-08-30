import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './css/NavBar.css'
import './css/Footer.css'
import './css/TrendingWeekElement.css'
import './css/series.css'
import './css/movies.css'
import './css/PlayButton.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

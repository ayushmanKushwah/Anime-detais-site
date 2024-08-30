import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Player from './player'
// import './css/NavBar.css'
import './css/playerHome.css'


createRoot(document.getElementById('player')).render(
    <StrictMode>
        <Player/>
    </StrictMode>,
  )
  
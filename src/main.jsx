import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Canvas shadows>
    <color attach="background" args={['#101010']} />
    <fog attach="fog" args={['#101010', 10, 20]} />
    <App />
    </Canvas>
  </React.StrictMode>,
)

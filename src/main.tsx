import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, {GlobalStyles} from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        <GlobalStyles/>
    </StrictMode>,
)

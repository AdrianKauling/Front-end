import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import SobreMim from './pages/sobremim'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobremim" element={<SobreMim/>} />
            </Routes>
        </BrowserRouter>
    )
}
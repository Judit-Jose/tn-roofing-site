import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ContactModal from './components/ContactModal';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/siding-and-windows" element={<Services category="Siding & Windows" />} />
                    <Route path="/roofing-and-gutters" element={<Services category="Roofing & Gutters" />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <ContactModal />
            </Layout>
        </BrowserRouter>
    );
}

export default App;

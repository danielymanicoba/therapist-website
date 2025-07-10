// MobileHeader.jsx
import { useState } from 'react';
import './HeaderMobile.scss';

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="mobile-header">
        <h1 className="logo">Letícia Campos</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
            ☰
        </button>

        {isOpen && (
            <nav className="mobile-nav">
            <a href="#aterapia">A TERAPIA</a>
            <a href="#sobremim">SOBRE</a>
            <a href="#faq">DÚVIDAS</a>
            </nav>
        )}
        </header>
    );
};

export default HeaderMobile;

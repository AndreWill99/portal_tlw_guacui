import React from 'react';
import logoHeader from '../assets/logo_header.png';
import headerBanner from '../assets/LED_tlw_guacui.png';

export const Header = () => {
    return (
        <header className="portal-header">
            {/* Top Red-Orange Bar */}
            <div className="top-brand-bar">
                <img src={logoHeader} alt="the LOVE walk 2026" className="navbar-logo-img" />
            </div>

            {/* Main Hero Banner Image */}
            <div className="hero-banner-container">
                <img src={headerBanner} alt="The Love Walk - Sábado 24 de Outubro na Praça João Acacinho" className="hero-banner-img" />
            </div>
        </header>
    );
};

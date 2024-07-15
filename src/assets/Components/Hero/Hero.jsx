import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div id="main-content">
                <div className="banner" id="fashion">
                    <span className="caption">
                        Shop the latest trends in Men's and Women's fashion. Up
                        to 50% off on select items!
                    </span>
                    <span className="cover"></span>
                </div>
            </div>
            <div id="footer">
                <div className="mini-banner" id="Clothing">
                    <span className="caption">Clothing</span>
                </div>
                <div className="mini-banner" id="Jewelry">
                    <span className="caption">Jewelry</span>
                </div>
                <div className="mini-banner" id="Eletronics">
                    <span className="caption">Electronics</span>
                </div>
            </div>
        </>
    )
}

export default Hero

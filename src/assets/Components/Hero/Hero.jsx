import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div id="main-content">
                <div className="banner" id="fashion">
                    <span className="caption">
                        <div className="hero-title">
                            Discover Style for Less
                        </div>
                        <div className="hero-description">
                            Shop the latest trends in Men's and Women's fashion.
                            Up to 50% off on select items!
                        </div>
                    </span>
                    <span className="cover"></span>
                </div>
            </div>
            <div id="footer">
                <div className="mini-banner" id="sale">
                    <span className="caption">On Sale</span>
                </div>
                <div className="mini-banner" id="trending">
                    <span className="caption">Trending</span>
                </div>
                <div className="mini-banner" id="new-products">
                    <span className="caption">New Products</span>
                </div>
            </div>
        </>
    )
}

export default Hero

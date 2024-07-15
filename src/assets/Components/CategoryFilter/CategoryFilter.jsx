import React from 'react'
import './CategoryFilter.css'

const CategoryFilter = () => {
    return (
        <filter>
            <div className="title">Categories</div>

            <div id="filters">
                <div className="category">
                    <input type="checkbox" id="all" />
                    All
                </div>
                <div className="category">
                    <input type="checkbox" id="mens" />
                    Men's Clothing
                </div>
                <div className="category">
                    <input type="checkbox" id="womens" />
                    Women's Clothing
                </div>
                <div className="category">
                    <input type="checkbox" name="Jewelry" id="jewelry" />
                    Jewelry
                </div>
                <div className="category">
                    <input type="checkbox" name="" id="electronics" />
                    Electronics
                </div>
            </div>
        </filter>
    )
}

export default CategoryFilter

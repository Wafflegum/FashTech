import { React } from 'react'
import './MiniBrowse.css'

const MiniBrowse = ({ products }) => {
    return (
        <minibrowse>
            {products.map((product) => {
                return (
                    <div className="minibrowse-card" key={product.id}>
                        <div className="minibrowse-preview">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="minibrowse-content">
                            <div className="minibrowse-name">
                                {product.title}
                            </div>
                            <div className="minibrowse-price">
                                ${product.price}
                            </div>
                        </div>
                    </div>
                )
            })}
        </minibrowse>
    )
}

export default MiniBrowse

import { React, useState, useEffect } from 'react'
import './App.css'
import SearchBar from './assets/Components/SearchBar/SearchBar'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Browse from './assets/Components/Browse/Browse'
import CategoryFilter from './assets/Components/CategoryFilter/CategoryFilter'
import MiniBrowse from './assets/Components/MiniBrowse/MiniBrowse'

import axios from 'axios'

function App() {
    const [products, setProducts] = useState([])

    function FetchMiniBrowse(limit) {
        axios // fetches all of the products in the API
            .get(
                `https://fakestoreapi.com/products?limit=${limit ? limit : 10}`
            )
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    useEffect(() => FetchMiniBrowse(8), products)

    return (
        <>
            <header>
                <div id="navigations">
                    <SearchBar />
                    <Navbar />
                </div>
            </header>

            <main>
                <Hero />
                <div id="minibrowse">
                    <CategoryFilter />
                    <MiniBrowse products={products} />
                </div>
            </main>
        </>
    )
}

export default App

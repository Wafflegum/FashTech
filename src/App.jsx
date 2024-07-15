import React from 'react'
import './App.css'
import SearchBar from './assets/Components/SearchBar/SearchBar'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Browse from './assets/Components/Browse/Browse'
import CategoryFilter from './assets/Components/CategoryFilter/CategoryFilter'

function App() {
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
                <div id="browse">
                    <CategoryFilter />
                    <Browse />
                </div>
            </main>
        </>
    )
}

export default App

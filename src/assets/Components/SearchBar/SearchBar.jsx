import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ fetch }) => {
    const [item, setItem] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        fetch(item)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="searchBar"
                    placeholder="Search..."
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
                <button type="submit" className="searchBtn">
                    <img
                        src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=000000"
                        alt="search"
                    />
                </button>
            </form>
        </>
    )
}

export default SearchBar

import React, { useState } from 'react'
import axios from 'axios'

const AxiosPokemon = () => {
    // Variable to hold the pokemon list
    const [pokemon, setPokemon] = useState([]);

    // Fetch data from pokemon api
    const fetchData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => {
            // Log data to check how it's formatted
            console.log(response.data.results);
            // Put data inside the response
            setPokemon(response.data.results);
        })
        .catch((err) => {
            // Log the error if we get one
            console.log("Error: ", err);
        })
    }

    return (
        <div>
            {/* Button to fetch pokemon */}
            <button className='fetch-button' onClick={fetchData}>Fetch Pokemon</button>

            {/* Map through data and display it */}
            {
                pokemon.map((poke, i) => {
                    return (
                        <div key={i}>
                            <h2>{poke.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AxiosPokemon
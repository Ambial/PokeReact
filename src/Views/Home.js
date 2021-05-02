import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({ pokemon: results }) {
    return (
        <div className=" mt-10 p-4 flex flex-wrap" >
            <h1>Home</h1>
            {
                results &&
                results.map((pokemon, idx) => (
                    <div className="ml-4 text-2xl text-blue-400">
                        <Link to={`/about/${pokemon.idx}`} key={idx}>{pokemon.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonList from "../pokemonList/PokemonList";
import classes from "./Pokemon.module.css";
import Pagination from "../pagination/Pagination";



const PokemonPage = () => {

    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(1)
    const [limit, setLimit] = useState(10)
    const getPokemons = async () => {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        setPokemons(data.results)
    }

    const handleNext =  () => {
        setOffset(prev=>prev+limit)
    }
    const handlePrev =  () => {
        setOffset(prev=>prev-limit)
    }

    const page = Math.floor(offset/limit)+1

    useEffect(() => {
        getPokemons()
    }, [offset, limit]);


    return (
        <div className={classes.list}>
            {
                pokemons.map(pokemon=> <PokemonList key={pokemon.name} pokemonL={pokemon}/>)
            }
            <Pagination handleNext={handleNext} page={page} handlePrev={handlePrev}/>
        </div>
    );
};


export default PokemonPage;
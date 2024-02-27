import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonList from "../pokemonList/PokemonList";
import classes from "./Pakemon.module.css";


const PokemonPage = () => {
    const [pokemons, setPokemons] = useState([])
    const getPokemons = async () => {
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPokemons(data.results)
    }

    useEffect(() => {
        getPokemons()
    }, []);

    return (
        <div className={classes.list}>
            {
                pokemons.map(pokemon=> <PokemonList key={pokemon.name} pokemonL={pokemon}/>)
            }
        </div>
    );
};


export default PokemonPage;
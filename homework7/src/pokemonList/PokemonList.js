import React, {useEffect, useState} from 'react';
import classes from "./PokemonList.module.css";
import axios from "axios";
import {Link} from "react-router-dom";

const PokemonList = ({pokemonL}) => {
    const [pokemon, setPokemon] = useState({})
    console.log(pokemon,'++++++++')

    const getPokemon = async ()=>{
        const {data} = await axios.get(pokemonL.url);
        return data
    }

    useEffect(() => {
        getPokemon().then(pokemon => setPokemon(pokemon))
    }, []);



    return (
        <div className={classes.card}>
            {pokemonL.name}
            <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt="pokemon"/>
            <Link to={`/pokemon/${pokemon.id}`}>Подробнее</Link>

        </div>
    );
};

export default PokemonList;
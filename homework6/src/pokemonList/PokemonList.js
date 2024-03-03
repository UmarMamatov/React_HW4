import React, {useEffect, useState} from 'react';
import classes from "./PokemonList.module.css";
import axios from "axios";

const PokemonList = ({pokemonL}) => {
    const [pokemon, setPokemon] = useState({})
    console.log(pokemon,'++++++++')

    const getPokemon = async (url)=>{
        const {data} = await axios.get(url);
        setPokemon(data.sprites.other.dream_world.front_default)
    }

    useEffect(() => {
        getPokemon(pokemonL.url)
    }, []);

    return (
        <div className={classes.card}>
            {pokemonL.name}
            <img src={pokemon} alt="pokemon"/>

        </div>
    );
};

export default PokemonList;
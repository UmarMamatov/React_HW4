import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const PokemonInfoPage = () => {

    const {id} = useParams()

    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(false)

    const getPokemonBuId = async ()=>{
        setLoading(true)
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            return data
        }
        catch (e){
            console.log('Error', e.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPokemonBuId().then(pokemon=> setPokemon(pokemon))
    }, [id]);

    return (
        <div>
            {
                loading ? <p>Load...</p>
                    :
                    <>
                        <p>Name: {pokemon.name}</p>
                        <p>Abilities: {pokemon?.abilities?.map(value=> value.ability.name).join(', ')}</p>
                        <p>Stats: {pokemon?.stats?.map(value=> value.stat.name).join(', ')}</p>
                        <p>Types: {pokemon?.types?.map(value=> value.type.name).join(', ')}</p>
                        <p>Some Moves: {pokemon?.moves?.slice(0,5).map(value=> value.move.name).join(', ')}</p>
                        <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt="pokemon"/>
                    </>
            }
        </div>
    );
};

export default PokemonInfoPage;
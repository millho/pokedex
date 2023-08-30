import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";

// @ts-ignore
export const pokeApi = new axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 8000
})

class PokemonService {

    async getPokemon() {
        const res = await pokeApi.get('pokemon')
        console.log('fetched', res.data);
        AppState.pokemon = res.data.results
    }

    async getActive(name) {

        const res = await pokeApi.get(`pokemon/${name}`)
        AppState.activePokemon = new Pokemon(res.data)
    }
}

export const pokemonService = new PokemonService
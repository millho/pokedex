import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { Pokemon } from "../models/Pokemon.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokemon() {
    let pokemon = AppState.pokemon
    let listContent = ''
    pokemon.forEach(pokemon => listContent += Pokemon.PokemonListTemplate(pokemon))
    setHTML('pokemon-list', listContent)
}

function _drawActive() {
    let active = AppState.activePokemon
    if (active) {
        setHTML('active-pokemon', active.activeTemplate)
    }
}

export class PokemonController {
    constructor() {
        this.getPokemon()
        AppState.on('pokemon', _drawPokemon)
        AppState.on('activePokemon', _drawActive)
    }

    async getPokemon() {
        try {
            await pokemonService.getPokemon()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getActive(name) {
        try {
            console.log('getting active');
            await pokemonService.getActive(name)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}
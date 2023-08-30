

export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
    }

    static PokemonListTemplate(pokemon) {
        return `
        <p class="selectable elevation-3 text-light ps-2 py-1 rounded mb-0" onclick="app.PokemonController.getActive('${pokemon.name}')">${pokemon.name}</p>`
    }

    get activeTemplate() {
        return `
        <div>
        ${this.name}
        </div>
        `
    }
}
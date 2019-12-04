import { setPokemonQuery, SET_POKEMON_QUERY } from './actions'

describe("Pokemon app actions", () => {
  it("sets the pokemon query", () => {
    const pokemonName = "bulbasaur"
    const pokemonQuery = setPokemonQuery(pokemonName)
    expect(pokemonQuery.type).toBe(SET_POKEMON_QUERY)
    expect(pokemonQuery.payload).toBe(pokemonName)
  })
})
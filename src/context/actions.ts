export const POKEMON_QUERY = 'POKEMON_QUERY'

export const setPokemonQuery = (query: string) => ({
  type: POKEMON_QUERY,
  payload: query
})
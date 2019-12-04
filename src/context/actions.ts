export const SET_POKEMON_QUERY = 'SET_POKEMON_QUERY'

export const setPokemonQuery = (query: string) => ({
  type: SET_POKEMON_QUERY,
  payload: query
})
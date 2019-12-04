
interface State {
  pokemonQuery: string
}

interface Action {
  type: string
  payload?: any
}

export const defaultState = {
  query: ''
}

export const reducer = (state: State, action: Action) => {
  console.log("Updating States", state, action.type, action.payload)
  switch (action.type) {
    case 'POKEMON_QUERY':
      return {
        ...state,
        query: action.payload
      }
    default:
      return state;
    }
};
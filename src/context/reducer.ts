import { SET_POKEMON_QUERY } from "./actions";

interface State {
  query: string
}

interface Action {
  type: string
  payload?: any
}

export const defaultState: State = {
  query: ''
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_POKEMON_QUERY:
      return {
        ...state,
        query: action.payload
      }
    default:
      return state;
    }
};
import { reducer, defaultState } from './reducer'
import { SET_POKEMON_QUERY } from './actions'

describe("reducer", () => {
  it("returns the default state if no actions match", () => {
    const newState = reducer(defaultState, {type: ""})
    expect(newState.query).toBe("")
  })

  it("updates the pokemon query", () => {
    const action = {
      type: SET_POKEMON_QUERY,
      payload: "bulbasaur"
    }
    const newState = reducer(defaultState, action)

    expect(newState.query).toBe("bulbasaur")
  })
})
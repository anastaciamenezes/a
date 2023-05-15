import { Players } from '../models/Players'

export enum ActionType {
  SET_PLAYERS = 'SET_PLAYERS',
}

export type Action = {
  type: ActionType
  payload: Players[]
}

export type State = {
  players: Players[]
}

const UserReducer = (state: State, action: Action): State => {
  const { payload, type } = action

  switch (type) {
    case ActionType.SET_PLAYERS:
      return {
        ...state,
        players: payload,
      }
    default:
      throw new Error()
  }
}

export default UserReducer
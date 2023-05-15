import { Dispatch } from 'react'
import { Players } from '../models/Players'
import { Action, ActionType } from './UserReducer'

export const setPlayers = (dispatch: Dispatch<Action>, player: Players[]) =>
  dispatch({
    payload: player,
    type: ActionType.SET_PLAYERS,
  })
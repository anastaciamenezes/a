import { Dispatch, ReactNode, createContext, useReducer } from 'react'
import { Players } from '../models/Players'
import UserReducer, { Action } from './UserReducer'

type InitialStateType = {
  players: Players[]
}

const initialState: InitialStateType = {
  players: [],
}

type UserContextType = {
  state: InitialStateType
  dispatch: Dispatch<Action>
}

const UserContext = createContext<UserContextType>({
  dispatch: () => null,
  state: initialState,
})

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
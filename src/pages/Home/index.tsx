import { CSSProperties, useCallback, useContext, useState } from 'react'
import { ClockLoader } from 'react-spinners'

import PlayersCard from '../../components/PlayersCard'
import { setPlayers } from '../../context/Actions'
import UserContext from '../../context/UserContext'
import { Players, isInstanceOfPlayersNotFound } from '../../models/Players'
import { PlayersService } from '../../services/PlayersService'
import {
  HomeContainer,
  NoResultsFoundMessage,
  ResultsFoundMessage,
  SearchButton,
  SearchInput,
  SearchPanel,
} from './styles'

const playersService = new PlayersService()
const loadingCssOverride: CSSProperties = {
  margin: '10px auto',
}
const loadingColor = '#392e4a'

const Home = () => {
  const [filter, setFilter] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [noPlayersFound, setNoPlayersFound] = useState(false)

  const { state, dispatch } = useContext(UserContext)
  const { players } = state

  const searchPlayers = useCallback(async () => {
    if (filter) {
      setIsSearching(true)
      setNoPlayersFound(false)
      const response = await playersService.findPlayers(filter)
      if (isInstanceOfPlayersNotFound(response)) {
        setNoPlayersFound(true)
        setPlayers(dispatch, [])
      } else {
        const players = response as Players[]
        setPlayers(dispatch, players)
        setFilter('')
      }

      setIsSearching(false)
    }
  }, [filter, dispatch])

  return (
    <HomeContainer>
      <SearchPanel>
        <SearchInput
          data-cy=''
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <SearchButton
          data-cy=''
          value='Buscar'
          disabled={isSearching}
          onClick={searchPlayers}
        />
      </SearchPanel>

      {isSearching && (
        <ClockLoader color={loadingColor} cssOverride={loadingCssOverride} />
      )}

      {!isSearching && players.length > 0 && (
        <>
          <ResultsFoundMessage>
            {players.length} resultado(s) encontrado(s)
          </ResultsFoundMessage>

          {players.map((p, index) => (
            <PlayersCard key={index} order={index + 1} players={p} />
          ))}
        </>
      )}

      {!isSearching && noPlayersFound && (
        <NoResultsFoundMessage>
          Nenhum jogador encontrado
        </NoResultsFoundMessage>
      )}
    </HomeContainer>
  )
}

export default Home
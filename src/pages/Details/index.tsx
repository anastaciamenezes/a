import { useLocation, useNavigate } from 'react-router-dom'
import { Players } from '../../models/Players'
import {
  BackButton,
  DetailsContainer,
  DetailsList,
  DetailsMetadata,
  DetailsPanel,
  DetailsPanelTitle,
  DetailsTitle,
} from './styles'

type Location = {
  state: {
    players: Players
  }
}

const Details = () => {
  const location: Location = useLocation()
  const { players } = location.state
  const navigate = useNavigate()
  console.log(players)

  return (
    <DetailsContainer>
      <DetailsTitle data-cy='details-title'>
        Informações sobre {players.term}
      </DetailsTitle>

      {players.team.length > 0 && (
        <DetailsPanel data-cy='team-panel'>
          <DetailsPanelTitle>Significados</DetailsPanelTitle>
          <DetailsList data-cy='details-list'>
            {players.team.map((p, index) => (
              <DetailsMetadata key={index}>{p}</DetailsMetadata>
            ))}
          </DetailsList>
        </DetailsPanel>
      )}

      <BackButton data-cy='back-button' onClick={() => navigate('/')}>
        Voltar
      </BackButton>
    </DetailsContainer>
  )
}

export default Details
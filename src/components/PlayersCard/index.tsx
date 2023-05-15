import { Players } from '../../models/Players'
import {
  PlayersCardPanel,
  PlayersDetailsLink,
  PlayersDetailsText,
  PlayersTitle,
} from './styles'

type Props = {
  order: number
  players:Players
}

const PlayersCard = ({order, players }: Props) => {
  const {team, name} = players
  const details = `${team.length} informações sobre times e ${name.length} informações dos jogadores`

  return (
    <PlayersCardPanel data-cy=''>
      <PlayersTitle data-cy=''>{`${order} - ${players}`}</PlayersTitle>
      <PlayersDetailsLink to='/details'state={{players}}>
        <PlayersDetailsText data-cy=''>{details}</PlayersDetailsText>
      </PlayersDetailsLink>
    </PlayersCardPanel>
  )
}

export default PlayersCard
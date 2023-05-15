import { BrowserRouter } from 'react-router-dom'
import PlayersCard from '.'
import FontStyles from '../../assets/fonts/fonts'
import { Players } from '../../models/Players'

describe('<PlayersCard />', () => {
  it('should render players info correctly', () => {
    cy.fixture('players').then((playerJson: Players) => {
      const players: Players = playerJson as Players
      const order = 1

      cy.mount(
        <BrowserRouter>
          <FontStyles />
          <PlayersCard players={players} order={order} />
        </BrowserRouter>
      )

      const { team, name } = players
      const title = `${team} - ${name}`
      cy.get('[data-cy="play-title"]').should('have.text', title)

      const details = `${team.length} informação sobre time(s) e ${name.length} informação sobre jogador`

      cy.get('[data-cy="play-details"]').should('have.text', details)
    })
  })
})
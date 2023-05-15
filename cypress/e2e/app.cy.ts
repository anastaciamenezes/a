interface Players {
  team: string[]
  meta: number
}

interface PlayersNotFound {
  title: string
}

const isInstanceOfPlayersNotFound = (obj: Players[] | PlayersNotFound) =>
  (obj as PlayersNotFound).title != undefined

const getPlayers = (jsonObj: any): Players[] | PlayersNotFound => {
  const { title } = jsonObj

  if (title) {
    const notFound: PlayersNotFound = { title }
    return notFound
  }

  const players: Players[] = []

  jsonObj.forEach((obj: any) => {
    const {player, team  } = obj

    const teamArr: string[] = []
    if (team && team.length > 0) {
      team.forEach((m: any) => {
        const { definitions } = m
        if (definitions && definitions.length > 0) {
          definitions.forEach((d: any) => {
            const { definition } = d
            teamArr.push(definition)
          })
        }
      })
    }

    const playersObj: Players = {
      meta: player,
      team: teamArr,
    }
    players.push(playersObj)
  })

  return players
}

describe('Balldontlie E2E tests', () => {
  beforeEach(() => {
    cy.visit('')
    cy.fixture('apiResponse').then((value) => (this.apiResponse = value))
  })

  it('should render correct number of players cards when search is performed', () => {
    const query = 'games'
    cy.intercept('GET', `${Cypress.env('API_URL')}/${query}`, {
      body: this.apiResponse,
    })
  })  

    it.only('should show correct meanings about a player', () => {
      const query = 'player'
      cy.request({
        method: 'GET',
        url: `${Cypress.env('API_URL')}/${query}`,
      }).then(({ body }) => {
        const players = getPlayers(body)
        console.log(players)
      })
    })
  })
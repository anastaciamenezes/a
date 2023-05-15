export interface Players {
  term: any
  children: any
  length: any
  name: string[]
  team: string[]
}

export interface PlayersNotFound {
  title: string
}

export const isInstanceOfPlayersNotFound = (obj: Players[] | PlayersNotFound) =>
  (obj as PlayersNotFound).title !== undefined

export const getPlayers = (jsonObj: any): Players[] | PlayersNotFound => {
  const { title } = jsonObj

  if (title) {
    const notFound: PlayersNotFound = { title }
    return notFound
  }

  const players: Players[] = []

  jsonObj.forEach((obj: any) => {
    const { players, team } = obj
    
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
      name: players,
      team: teamArr,
      children: undefined,
      length: undefined,
      term: undefined
    }
    players.push(playersObj)
  })

  return players
}
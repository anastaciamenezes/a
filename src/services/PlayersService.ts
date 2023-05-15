import axios, { AxiosInstance } from 'axios'
import { Players, PlayersNotFound, getPlayers } from '../models/Players'

export class PlayersService {
  private _http: AxiosInstance

  constructor() {
    this._http = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    })
  }

  async findPlayers(name: string): Promise<Players[] | PlayersNotFound> {
    const response = await this._http.get(`/${name.trim()}`, {
      validateStatus: (status) => status < 500,
    })

    const result = getPlayers (response.data)
    return result
  }
}
import { IPlayer } from '../storeInterfaces/Player';

export interface ITeam {
  name: string,
  foundationYear: number,
  division: string,
  conference: string,
  imageUrl: string,
}

export interface ITeamUpdate {
  name: string,
  foundationYear: number,
  division: string,
  conference: string,
  imageUrl: string,
  id: number,
}

export interface IDataAddTeam {
  team: ITeam,
  token: string,
}

export interface IDataDeleteTeam {
  id: string,
  history: any,
  playersList: IPlayer[],
  token: string,
}

export interface IDataUpdateTeam {
  team: ITeamUpdate,
  token: string,
}

export interface IDataLoadChunkTeams {
  chunkData : {
    name: string,
    size: number,
    page: number,
  },
  token: string,
}

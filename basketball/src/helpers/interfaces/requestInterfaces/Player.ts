import { IOption } from '../componentsInterfaces/StateAndEvents';

export interface IPlayer {
  name: string,
  number: number,
  position: string,
  team: number,
  birthday: string,
  height: number,
  weight: number,
  avatarUrl: string
}

export interface IPlayerUpdate {
  name: string,
  number: number,
  position: string,
  team: number,
  birthday: string,
  height: number,
  weight: number,
  avatarUrl: string,
  id: number
}

export interface IAddDataPlayer {
  player: IPlayer,
  token: string,
}

export interface IRemoveDataPlayer {
  id: string,
  history: any,
  token: string,
}

export interface IUpdateDataPlayer {
  player: IPlayerUpdate,
  token: string,
}

export interface IDataLoadChunk {
  chunkData: {
    name: string,
    teams: IOption[],
    page: number,
    size: number,
  },
  token: string,
}

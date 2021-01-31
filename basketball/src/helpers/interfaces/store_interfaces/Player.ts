export interface IPlayer {
  name: string,
  number: number,
  position: string,
  team: number,
  birthday: string,
  height: number,
  weight: number,
  avatarUrl: string,
  id: number,
}

export interface IChunkPlayers {
  data: IPlayer[],
  count: number,
  page: number,
  size: number,
}

export interface IPostionOption {
  value: string,
  label: string,
}

export interface ITeamOption {
  value: string,
  label: string,
  imageSrc: string,
}

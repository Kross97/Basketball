export interface ITeam {
  name: string,
  foundationYear: number,
  division: string,
  conference: string,
  imageUrl: string,
  id: number,
}

export interface IChunkDataTeams {
  data: ITeam[],
  count: number,
  page: number,
  size: number,
}

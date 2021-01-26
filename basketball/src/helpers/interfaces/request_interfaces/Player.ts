export interface Player {
  name: string,
  number: number,
  position: string,
  team: number,
  birthday: string,
  height: number,
  weight: number,
  avatarUrl: string
}

export interface PlayerUpdate {
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

import { ITeam } from '../storeInterfaces/Team';
import { IPlayer } from '../storeInterfaces/Player';

export interface IOption {
  value: string;
  label: string;
  imageSrc?: string;
}

export interface IStateChangeEntities {
  name: string;
  teams: IOption[];
  page: number;
  size: string;
}

export interface IPaginationValue {
  selected: number;
}

export interface IDataSelected {
  chunkEntities: ITeam[] | IPlayer[],
  countEntities: number,
  sizePageEntities: number,
}

export type ISelectedDataAll = ITeam[] | IPlayer[];

export interface IDataChangeUser {
  userName: string,
}

export interface IFormAddPlayer {
  birthday: string,
  height: string,
  name: string,
  number: string,
  position: string,
  team: string,
  weight: string,
  id?: string,
}

export interface IFormAddTeam {
  conference: string,
  division: string,
  foundationYear: string,
  name: string,
  id?: string,
}

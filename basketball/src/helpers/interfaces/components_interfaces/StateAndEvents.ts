import { ITeam } from '../store_interfaces/Team';
import { IPlayer } from '../store_interfaces/Player';

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

import {
  get, post, put, remove,
} from './index';

import { ITeam, ITeamUpdate } from '../helpers/interfaces/requestInterfaces/Team';

export const getTeams = (url: string, token: string) => get(url, token);

export const getTeam = (url: string, token: string) => get(url, token);

export const addTeam = (url: string, body: ITeam, token: string) => (
  post<string>(url, JSON.stringify(body), token)
);

export const updateTeam = (url: string, body: ITeamUpdate, token: string) => (
  put<string>(url, JSON.stringify(body), token)
);

export const deleteTeam = (url: string, token: string) => remove(url, token);

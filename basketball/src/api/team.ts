import {
  get, post, put, remove,
} from './index';

import { Team, TeamUpdate } from '../helpers/interfaces/request_interfaces/Team';

export const getTeams = (url: string, token: string) => get(url, token);

export const getTeam = (url: string, token: string) => get(url, token);

export const addTeam = (url: string, body: Team, token: string) => (
  post<string>(url, JSON.stringify(body), token)
);

export const updateTeam = (url: string, body: TeamUpdate, token: string) => (
  put<string>(url, JSON.stringify(body), token)
);

export const deleteTeam = (url: string, token: string) => remove(url, token);

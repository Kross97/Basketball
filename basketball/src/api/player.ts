import {
  get, post, remove, put,
} from './index';

import { IPlayer, IPlayerUpdate } from '../helpers/interfaces/request_interfaces/Player';

export const getPositions = (url: string, token: string) => get(url, token);

export const getPlayers = (url: string, token: string) => get(url, token);

export const getPlayer = (url: string, token: string) => get(url, token);

export const addPlayer = (url: string, body: IPlayer, token: string) => (
  post<string>(url, JSON.stringify(body), token)
);

export const updatePlayer = (url: string, body: IPlayerUpdate, token: string) => (
  put<string>(url, JSON.stringify(body), token)
);

export const deletePlayer = (url: string, token: string) => remove(url, token);

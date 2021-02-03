import { createSlice } from '@reduxjs/toolkit';
import { IMenuState } from '../../helpers/interfaces/store_interfaces/Menu';

export const menuReducer = createSlice({
  name: 'menuReducer',
  initialState: {
    isActiveSandwichMenu: false,
    isActiveChangeMenu: false,
  },
  reducers: {
    toggleStatusSandwichMenu: (state: IMenuState) => ({
      ...state,
      isActiveSandwichMenu: !state.isActiveSandwichMenu,
    }),
    toggleStatusChangeMenu: (state: IMenuState) => ({
      ...state, isActiveChangeMenu: !state.isActiveChangeMenu,
    }),
  },
});

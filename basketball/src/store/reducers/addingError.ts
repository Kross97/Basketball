import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const addEntityError = createSlice({
  name: 'addingError',
  initialState: {
    errorMessage: '',
  },
  reducers: {
    addErrorMessage: (state, {
      payload: { errorMessage },
    }: PayloadAction<{ errorMessage: string }>) => ({ errorMessage }),
    clearErrorMessage: () => ({ errorMessage: '' }),
  },
});

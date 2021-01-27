import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveImage } from '../../api/image';

export const loadNewImage = createAsyncThunk('imageLoad',
  async (imageData: any) => {
    console.log('IMAAAGEEE');
    const result = await saveImage('Image/SaveImage', imageData.file, imageData.token);
    console.log('RESULt', result);
  });

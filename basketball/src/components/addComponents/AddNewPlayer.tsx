import React from 'react';
import { AddNewEntity } from './AddNewEntity';

interface IContext {
  isTeamForm: boolean;
  addNewEntity: (data: any) => void;
}

export const AddPlayerContext = React.createContext({
  isTeamForm: false,
  addNewEntity: () => { },
} as IContext);

export const AddNewPlayer = () => {
  const addNewEntity = (data: any) => {
    console.log('DATA', data);
  };

  const loadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileImage = event.target.files[0];
      const formData = new FormData();
      formData.set('imageLoad', fileImage);
    }
  };

  return (
    <>
      <AddPlayerContext.Provider value={{ isTeamForm: false, addNewEntity }}>
        <AddNewEntity loadImage={loadImage} isTeamContext={false} />
      </AddPlayerContext.Provider>
    </>
  );
};

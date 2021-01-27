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

  return (
    <>
      <AddPlayerContext.Provider value={{ isTeamForm: false, addNewEntity }}>
        <AddNewEntity isTeamContext={false} />
      </AddPlayerContext.Provider>
    </>
  );
};

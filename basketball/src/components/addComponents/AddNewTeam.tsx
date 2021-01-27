import React from 'react';
import { AddNewEntity } from './AddNewEntity';

interface IContext {
  isTeamForm: boolean;
  addNewEntity: (data: any) => void;
}

export const AddTeamContext = React.createContext({
  isTeamForm: true,
  addNewEntity: () => { },
} as IContext);

export const AddNewTeam = () => {
  const addNewEntity = (data: any) => {
    console.log('DATA', data);
  };

  return (
    <>
      <AddTeamContext.Provider value={{ isTeamForm: true, addNewEntity }}>
        <AddNewEntity isTeamContext />
      </AddTeamContext.Provider>
    </>
  );
};

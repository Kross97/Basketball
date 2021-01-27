import React from 'react';
import { AddNewEntity } from './AddNewEntity';

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
      <AddNewEntity
        addNewEntity={addNewEntity}
        loadImage={loadImage}
        isTeam={false}
      />
    </>
  );
};

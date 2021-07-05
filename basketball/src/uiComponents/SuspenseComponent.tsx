import React from 'react';
import '../themes/suspense.css';
import styled from 'styled-components';

export const SuspenseAnimation = () => (
  <SuspenseContainer>
    <div id="floatingCirclesG">
      <div className="f_circleG" id="frotateG_01" />
      <div className="f_circleG" id="frotateG_02" />
      <div className="f_circleG" id="frotateG_03" />
      <div className="f_circleG" id="frotateG_04" />
      <div className="f_circleG" id="frotateG_05" />
      <div className="f_circleG" id="frotateG_06" />
      <div className="f_circleG" id="frotateG_07" />
      <div className="f_circleG" id="frotateG_08" />
    </div>
  </SuspenseContainer>
);

const SuspenseContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

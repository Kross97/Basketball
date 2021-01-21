import styled from 'styled-components';

export const TextStandart = styled.span`
  font-family: Avenir, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const TextSmall = styled(TextStandart)`
  font-size: 14px;
`;

export const TextExtraSmall = styled(TextStandart)`
 font-size: 12px;
`;

export const TextLogo = styled.span`
  font-family: Orbitron, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  text-transform: uppercase;
`;

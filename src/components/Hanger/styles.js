import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
      opacity: 0;
    transform: scale(0);
  }
  70% {
    opacity: 0.7;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const HangerContainer = styled.div`
  position: relative;
  padding: 24px;
`;

const Head = styled.div`
  border-radius: 50%;
  border: 10px solid var(--white);
  height: 20px;
  position: absolute;
  top: 60px;
  right: 27px;
  width: 20px;
  animation: ${appear} 2s ease-in-out;
`;

const Body = styled.div`
  background: var(--white);
  right: 42px;
  height: 50px;
  position: absolute;
  top: 90px;
  width: 10px;
  animation: ${appear} 2s ease-in-out;
`;

const LeftHand = styled.div`
  background: var(--white);
  height: 30px;
  right: 53px;
  top: 102px;
  position: absolute;
  transform: rotate(45deg);
  width: 10px;
  animation: ${appear} 2s ease-in-out;
`;

const RightHand = styled.div`
  background: var(--white);
  height: 30px;
  right: 30px;
  position: absolute;
  top: 102px;
  transform: rotate(-45deg);
  width: 10px;
  animation: ${appear} 2s ease-in-out;
`;

const LeftLeg = styled.div`
  background: var(--white);
  height: 30px;
  right: 53px;
  position: absolute;
  top: 131px;
  transform: rotate(45deg);
  width: 10px;
  animation: ${appear} 2s ease-in-out;
`;

const RightLeg = styled.div`
  background: var(--white);
  height: 30px;
  right: 30px;
  position: absolute;
  top: 131px;
  transform: rotate(-45deg);
  width: 10px;
  animation: ${appear} 2s ease-in-out;
`;

export { HangerContainer, Head, Body, LeftHand, RightHand, LeftLeg, RightLeg };

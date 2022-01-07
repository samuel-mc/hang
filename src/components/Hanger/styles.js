import styled from 'styled-components';

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
`;

const Body = styled.div`
  background: var(--white);
  right: 42px;
  height: 50px;
  position: absolute;
  top: 90px;
  width: 10px;
`;

const LeftHand = styled.div`
  background: var(--white);
  height: 30px;
  right: 53px;
  top: 102px;
  position: absolute;
  transform: rotate(45deg);
  width: 10px;
`;

const RightHand = styled.div`
  background: var(--white);
  height: 30px;
  right: 30px;
  position: absolute;
  top: 102px;
  transform: rotate(-45deg);
  width: 10px;
`;

const LeftLeg = styled.div`
  background: var(--white);
  height: 30px;
  right: 53px;
  position: absolute;
  top: 131px;
  transform: rotate(45deg);
  width: 10px;
`;

const RightLeg = styled.div`
  background: var(--white);
  height: 30px;
  right: 30px;
  position: absolute;
  top: 131px;
  transform: rotate(-45deg);
  width: 10px;
`;

export { HangerContainer, Head, Body, LeftHand, RightHand, LeftLeg, RightLeg };

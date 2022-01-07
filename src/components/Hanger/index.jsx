import React from 'react';
import hangImage from '../../assets/hang.png';
import {
  HangerContainer,
  Body,
  Head,
  RightHand,
  LeftHand,
  RightLeg,
  LeftLeg,
} from './styles';

const Hanger = () => {
  return (
    <section>
      <HangerContainer>
        <img src={hangImage} alt="" />
        <Head />
        <Body />
        <LeftHand />
        <RightHand />
        <LeftLeg />
        <RightLeg />
      </HangerContainer>
    </section>
  );
};

export default Hanger;

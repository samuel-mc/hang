import React from 'react';
import { connect } from 'react-redux';
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

const Hanger = (props) => {
  const { gameReducer } = props;
  const { mistakes } = gameReducer;
  console.log(mistakes);
  // const

  return (
    <section>
      <HangerContainer>
        <img src={hangImage} alt="" />
        {mistakes > 0 && <Head />}
        {mistakes > 1 && <Body />}
        {mistakes > 2 && <LeftHand />}
        {mistakes > 3 && <RightHand />}
        {mistakes > 4 && <LeftLeg />}
        {mistakes > 5 && <RightLeg />}
      </HangerContainer>
    </section>
  );
};

const mapStateToProps = ({ gameReducer }) => ({ gameReducer });

export default connect(mapStateToProps)(Hanger);

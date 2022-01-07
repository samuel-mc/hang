import React from 'react';
import Hanger from '../Hanger';
import WordBoard from '../WordBoard';
import LettersBoard from '../LettersBoard';

import Container from './styles';

const PrincipalContainer = () => (
  <Container>
    <Hanger />
    <WordBoard />
    <LettersBoard />
  </Container>
);

export default PrincipalContainer;

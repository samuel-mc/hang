import React from 'react';
import { connect } from 'react-redux';

import { Board, LetterContainer } from './styles';

const WordBoard = (props) => {
  const { wordsReducer } = props;
  const { wordSelected } = wordsReducer;

  console.log(wordSelected);

  return (
    <Board>
      {wordSelected.map((letter) => (
        <LetterContainer key={`${letter.letter}`}>
          {letter.visible ? letter.letter : '_'}
        </LetterContainer>
      ))}
    </Board>
  );
};

const mapStateToProps = ({ wordsReducer }) => ({ wordsReducer });

export default connect(mapStateToProps)(WordBoard);

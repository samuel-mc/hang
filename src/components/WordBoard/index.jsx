import React from 'react';
import { connect } from 'react-redux';

import { Board, LetterContainer } from './styles';

const WordBoard = (props) => {
  const { wordsReducer } = props;
  const { wordArray } = wordsReducer;

  return (
    <Board>
      {wordArray ? (
        wordArray.map((letter) => (
          <LetterContainer key={`${letter.key}`}>
            {letter.visible ? letter.letter : '_'}
          </LetterContainer>
        ))
      ) : (
        <h1>Cargando ...</h1>
      )}
    </Board>
  );
};

const mapStateToProps = ({ wordsReducer }) => ({ wordsReducer });

export default connect(mapStateToProps)(WordBoard);

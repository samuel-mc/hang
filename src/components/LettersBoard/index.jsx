import React from 'react';
import { connect } from 'react-redux';
import { Board, LetterContainer } from './styles';

import * as wordsActions from '../../actions/wordsActions';

const LettersBoard = (props) => {
  const { setRandomLetters, wordsReducer } = props;
  const { letters, wordSelected, randomLetters } = wordsReducer;
  const { word } = wordSelected;
  const wordArray = word.split('');
  const randomLettersAux = [];

  const handleRandomLetters = () => {
    while (randomLettersAux.length < 15) {
      const letter = letters[Math.floor(Math.random() * letters.length)];
      if (!randomLettersAux.includes(letter)) {
        randomLettersAux.push(letter);
      }
    }
    for (let i = 0; i < wordArray.length; i++) {
      if (!randomLettersAux.includes(wordArray[i])) {
        randomLettersAux.push(wordArray[i]);
      }
    }
    setRandomLetters(randomLettersAux);
  };

  React.useEffect(() => {
    console.log(props);
    handleRandomLetters();
  }, []);

  const handleSelection = (letter) => {
    if (word.includes(letter)) {
      console.log(word.toString().includes('a'));
    }
  };

  return (
    <Board>
      {randomLetters &&
        randomLetters.map((letter) => (
          <LetterContainer key={letter} onClick={() => handleSelection(letter)}>
            {letter}
          </LetterContainer>
        ))}
    </Board>
  );
};

const mapDispatchToProps = {
  ...wordsActions,
};

const mapStateToProps = ({ wordsReducer }) => ({ wordsReducer });

export default connect(mapStateToProps, mapDispatchToProps)(LettersBoard);

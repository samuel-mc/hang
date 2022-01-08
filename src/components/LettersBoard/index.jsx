import React from 'react';
import { connect } from 'react-redux';
import { Board, LetterContainer } from './styles';
import useRandomLetters from '../../hooks/useRandomLetters';
import * as wordsActions from '../../actions/wordsActions';
import * as gameActions from '../../actions/gameActions';

const LettersBoard = (props) => {
  const { wordsReducer, setRandomLetters, setWordArray, setMistakes } = props;
  const { randomLetters, wordSelected, wordArray } = wordsReducer;

  const { chooseRandomLetters } = useRandomLetters(props);

  React.useEffect(() => {
    chooseRandomLetters();
  }, []);

  const handleSelection = (letter) => {
    const auxLetters = [...randomLetters];
    const auxWord = [...wordArray];

    auxLetters.splice(randomLetters.indexOf(letter), 1);
    setRandomLetters(auxLetters);

    if (wordSelected.includes(letter)) {
      for (let i = 0; i < auxWord.length; i += 1) {
        if (auxWord[i].letter === letter) {
          auxWord[i].visible = auxWord[i].letter === letter && true;
        }
      }
    } else {
      setMistakes();
    }

    setWordArray(auxWord);
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
  ...gameActions,
};

const mapStateToProps = ({ wordsReducer, gameReducer }) => ({
  wordsReducer,
  gameReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(LettersBoard);

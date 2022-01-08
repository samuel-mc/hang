import React from 'react';
import { connect } from 'react-redux';
import useRandomLetters from '../../hooks/useRandomLetters';
import * as wordsActions from '../../actions/wordsActions';
import * as gameActions from '../../actions/gameActions';
import { Board, LetterContainer, PlayAnimation } from './styles';

const LettersBoard = (props) => {
  const { wordsReducer, setRandomLetters, setWordArray, setMistakes } = props;
  const { randomLetters, wordSelected, wordArray } = wordsReducer;
  const [showMistakeAnimation, setShowMistakeAnimation] = React.useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = React.useState(false);

  const { chooseRandomLetters } = useRandomLetters(props);

  React.useEffect(() => {
    chooseRandomLetters();
  }, []);

  const handleMistake = () => {
    setMistakes();
    setShowMistakeAnimation(true);
    setTimeout(() => {
      setShowMistakeAnimation(false);
    }, 2000);
  }

  const handleSuccess = () => {
    setShowSuccessAnimation(true);
    setTimeout(() => {
      setShowSuccessAnimation(false);
    }, 2000);
  }

  const handleSelection = (letter) => {
    const auxLetters = [...randomLetters];
    const auxWord = [...wordArray];

    auxLetters.splice(randomLetters.indexOf(letter), 1);
    setRandomLetters(auxLetters);

    if (wordSelected.includes(letter)) {
      handleSuccess();
      for (let i = 0; i < auxWord.length; i += 1) {
        if (auxWord[i].letter === letter) {
          auxWord[i].visible = auxWord[i].letter === letter && true;
        }
      }
    } else {
      handleMistake();
    }
    setWordArray(auxWord);
  };

  return (
    <Board>
      {
        randomLetters &&
          randomLetters.map((letter) => (
            <LetterContainer key={letter} onClick={() => handleSelection(letter)}>
              {letter}
            </LetterContainer>
          ))
        }
      {
        showMistakeAnimation && <PlayAnimation> ❌ </PlayAnimation>
      }
      {
        showSuccessAnimation && <PlayAnimation> ✅ </PlayAnimation>
      }
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

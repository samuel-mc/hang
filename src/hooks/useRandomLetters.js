const useRandomLetters = (props) => {
  const { setRandomLetters, wordsReducer } = props;
  const { letters, wordSelected } = wordsReducer;
  const randomLettersAux = [];

  const chooseRandomLetters = () => {
    while (randomLettersAux.length < 15) {
      const letter = letters[Math.floor(Math.random() * letters.length)];
      if (!randomLettersAux.includes(letter)) {
        randomLettersAux.push(letter);
      }
    }
    for (let i = 0; i < wordSelected.length; i += 1) {
      if (!randomLettersAux.includes(wordSelected[i])) {
        const index = Math.floor(Math.random() * randomLettersAux.length);
        if (!wordSelected.includes(randomLettersAux[index])) {
          randomLettersAux.splice(index, 0, wordSelected[i]);
        } else {
          i -= 1;
        }
      }
    }
    setRandomLetters(randomLettersAux);
  };

  return {
    chooseRandomLetters,
  };
};

export default useRandomLetters;

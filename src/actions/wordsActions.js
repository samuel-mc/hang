export const setWord = (word) => (dispatch) => {
  dispatch({
    type: 'SET_WORD',
    payload: word,
  });
};

export const setWordArray = (wordArray) => (dispatch) => {
  dispatch({
    type: 'SET_WORD_ARRAY',
    payload: wordArray,
  });
};

export const setRandomLetters = (letters) => (dispatch) => {
  dispatch({
    type: 'SET_RANDOM_LETTERS',
    payload: letters,
  });
};

const INITIAL_STATE = {
  letters: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
  randomLetters: [],
  words: [
    {
      word: 'manzana',
      category: 1,
    },
    {
      word: 'platano',
      category: 1,
    },
    {
      word: 'fresa',
      category: 1,
    },
    {
      word: 'pera',
      category: 1,
    },
    {
      word: 'frambuesa',
      category: 1,
    },
    {
      word: 'mango',
      category: 1,
    },
    {
      word: 'FRANCIA',
      category: 2,
    },
  ],
  wordSelected: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_WORD':
      return {
        ...state,
        wordSelected: action.payload,
      };
    case 'SET_RANDOM_LETTERS':
      return {
        ...state,
        randomLetters: action.payload,
      };
    default:
      return state;
  }
};

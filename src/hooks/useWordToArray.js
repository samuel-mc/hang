const useWordToArray = (props) => {
  const { setWordArray } = props;

  const wordToArray = (wordSelected) => {
    let visibleLetters = 0;
    let index = 0;
    const word = wordSelected.split('');
    const wordArray = [];
    const level = 1;
    word.forEach((element) => {
      const visible = Math.floor(Math.random() * 2);

      if (visible && visibleLetters < wordSelected.length / 2 - level) {
        wordArray.push({
          key: index,
          letter: element,
          visible: true,
        });
        visibleLetters += 1;
      } else {
        wordArray.push({
          key: index,
          letter: element,
          visible: false,
        });
      }
      index += 1;
    });
    setWordArray(wordArray);
  };

  return { wordToArray };
};

export default useWordToArray;

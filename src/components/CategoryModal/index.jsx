import React from 'react';
import { connect } from 'react-redux';

import * as categoriesActions from '../../actions/categoriesActions';
import * as wordsActions from '../../actions/wordsActions';

import { ModalContainer, ModalContent, Button } from './styles';

const CategoryModal = (props) => {
  const { setShowModal, categoriesReducer, setWord, wordsReducer } = props;

  const chooseWord = (category) => {
    const categoryWords = wordsReducer.words.filter(
      (word) => word.category === category
    );
    const randomWord =
      categoryWords[Math.floor(Math.random() * categoryWords.length)];
    return randomWord.word;
  };

  const wordToArray = (wordSelected) => {
    const word = wordSelected.split('');
    const wordArray = [];
    const level = 1;
    let visibleLetters = 0;
    word.forEach((element) => {
      const visible = Math.floor(Math.random() * 2);
      if (visible && visibleLetters < wordSelected.length / 2 - level) {
        wordArray.push({
          letter: element,
          visible: true,
        });
        visibleLetters += 1;
      } else {
        wordArray.push({
          letter: element,
          visible: false,
        });
      }
    });
    console.log(wordArray);
    setWord(wordArray);
  };

  const handleSelection = (category) => {
    const wordSelected = chooseWord(category);
    wordToArray(wordSelected.toString());
    setShowModal();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h1>Selecciona una categoría</h1>
        {categoriesReducer.categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleSelection(category.id)}
          >
            {' '}
            {category.name}
          </Button>
        ))}
      </ModalContent>
    </ModalContainer>
  );
};

const mapDispatchToProps = {
  ...categoriesActions,
  ...wordsActions,
};

const mapStateToProps = ({ categoriesReducer, wordsReducer }) => ({
  categoriesReducer,
  wordsReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);

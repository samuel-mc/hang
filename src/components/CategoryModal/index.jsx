import React from 'react';
import { connect } from 'react-redux';

import useWordToArray from '../../hooks/useWordToArray';

import * as categoriesActions from '../../actions/categoriesActions';
import * as wordsActions from '../../actions/wordsActions';

import { ModalContainer, ModalContent, Button } from './styles';

const CategoryModal = (props) => {
  const { setShowModal, categoriesReducer, setWord, wordsReducer } = props;
  const { wordToArray } = useWordToArray(props);

  const chooseWord = (category) => {
    const categoryWords = wordsReducer.words.filter(
      (word) => word.category === category
    );
    const randomWord =
      categoryWords[Math.floor(Math.random() * categoryWords.length)];
    return randomWord.word;
  };

  const handleSelection = (category) => {
    const wordSelected = chooseWord(category);
    setWord(wordSelected);
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

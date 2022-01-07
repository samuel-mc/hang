import React from 'react';

import { connect } from 'react-redux';

import GlobalStyles from './GlobalStyles';

import CategoryModal from './CategoryModal';
import PrincipalContainer from './PrincipalContainer';

const App = (props) => {
  const { categoriesReducer } = props;

  return (
    <div className="app">
      <GlobalStyles />
      {categoriesReducer.showModal ? <CategoryModal /> : <PrincipalContainer />}
    </div>
  );
};

const mapStateToProps = ({ categoriesReducer }) => ({ categoriesReducer });

export default connect(mapStateToProps)(App);

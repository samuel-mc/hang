const INITIAL_STATE = {
  mistakes: 0,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_MISTAKES':
      return {
        ...state,
        mistakes: state.mistakes + 1,
      };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  categories: [
    {
      id: 1,
      name: 'Frutas',
    },
    {
      id: 2,
      name: 'Lugares',
    },
  ],
  categorySelected: null,
  showModal: true,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        categorySelected: action.payload,
      };
    case 'SET_SHOW_MODAL':
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};

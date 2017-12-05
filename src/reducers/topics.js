const topics = (state = [], action) => {
  switch (action.type) {
    case 'SET_INITIAL_TOPICS':
      return [
        ...state,
        ...action.data
      ];
    default:
      return state;
  }
};

export default topics;

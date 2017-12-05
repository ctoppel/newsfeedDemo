const visibilityFilter = (state = ['Blood', 'Water', 'Dirt', 'Sand'], action) => {
  switch (action.type) {
    case 'UPDATE_VISIBILITY_FILTER':
      if (!action.checked) return [
        ...state,
        action.name
      ];
      return [
        state.slice(0, state.indexOf(action.name)),
        state.slice(state.indexOf(action.name) + 1)
      ];
    default:
      return state;
  }
};

export default visibilityFilter;

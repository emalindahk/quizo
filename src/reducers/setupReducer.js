export const INITIAL_STATE = {
  setup: true,
  category: {},
  difficulty: "",
  score: 0,
};

export const setupReducer = (state, action) => {
  switch (action.type) {
    case "SETUP_START":
      return {
        ...state,
        setup: false,
      };
    case "SETUP_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "REMOVE_CATEGORY":
      return {
        ...state,
        category: {},
    };
    case "SETUP_DIFFICULTY":
      return {
        ...state,
        difficulty: action.payload,
      };
    case "REMOVE_DIFFICULTY":
      return {
        ...state,
        difficulty: "",
    };
    default:
      return state;
  }
};

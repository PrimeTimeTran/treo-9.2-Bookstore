import * as types from "../constants/auth.constants";

const initialState = {
  email: '',
  isAuthenticated: [],
  favoriteBooks: []
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default authReducer;

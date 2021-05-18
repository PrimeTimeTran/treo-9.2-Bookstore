import * as types from "../constants/books.constants";

const initialState = {
  books: [],
  loading: false,
  readingList: [],
  selectedBook: null,
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  

  switch (type) {
    case types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: payload
      };
    default:
      return state;
  }
};

export default booksReducer;

export const initialState = {
    loading: true,
    books: JSON.parse(localStorage.getItem("books")) || []
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
          loading: action.payload
        };
       case "GET_BOOKS":
        return {
          ...state,
          books: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };
  
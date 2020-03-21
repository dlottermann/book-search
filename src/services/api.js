/* FROM EXTERNAL GOOGLE API */
const API_URL = "https://www.googleapis.com/books/v1";
const API_KEY = 'KEY_GOOGLE';
const MAX= 10;

export const getBooks = async (startIndex,filter) => {
  const searchTerm = encodeURIComponent(filter);
  //author:
  //isbn:
  //
  let response = await fetch(`${API_URL}/volumes?q=${searchTerm}&maxResults=${MAX}&startIndex=${startIndex}&key${API_KEY}`);
  let data = await response.json();
  return data;
};

// import { books } from "./mock";


// export const getBooks = async () => {
//   return new Promise(resolve =>
//     setTimeout(() => {
//       resolve(books);
//     }, 2000)
//   );
// };

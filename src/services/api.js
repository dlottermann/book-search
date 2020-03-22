/* FROM EXTERNAL GOOGLE API */
const API_URL = "https://www.googleapis.com/books/v1";
const MAX= 10;

export const getBooks = async (startIndex,filter) => {
  const searchTerm = encodeURIComponent(filter);
  let response = await fetch(`${API_URL}/volumes?q=${searchTerm}&maxResults=${MAX}&startIndex=${startIndex}`);
  let data = await response.json();
  return data;
};


export const getBook = async (key) => {
  const id = encodeURIComponent(key);
  let response = await fetch(`${API_URL}/volumes/${id}`);
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

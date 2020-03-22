/* utils functions */
//this function only necessary where books from google books API

export const normalizeBooks = books => {
  if (!Array.isArray(books.items)) return [];

  const normalized = books.items.map(b => {
    return {
      id: b.id,
      title: b.volumeInfo.title,
      subtitle: b.volumeInfo.subtitle,
      isbn: b.volumeInfo.industryIdentifiers,
      author: b.volumeInfo.authors,
      publisher: b.volumeInfo.publisher,
      publishedDate: b.volumeInfo.publishedDate,
      lang: b.volumeInfo.language,
      weight: "72.3",
      dimensions: ["12,7", "0,3", "20,3"]
    };
  });

  return normalized;
};

export const normalizeBook = book => ({
  id: book.id,
  title: book.volumeInfo.title,
  subtitle: book.volumeInfo.subtitle,
  isbn: book.volumeInfo.industryIdentifiers,
  author: book.volumeInfo.authors,
  publisher: book.volumeInfo.publisher,
  publishedDate: book.volumeInfo.publishedDate,
  lang: book.volumeInfo.language,
  weight: "72.3",
  dimensions: ["12,7", "0,3", "20,3"],
  thumb: book.volumeInfo.imageLinks.thumbnail || null
});

export const normalizeISBN = isbn => {
  if (isbn) {
    if (!Array.isArray(isbn)) return null;
    let num = isbn.filter(i => i.type === "ISBN_13");
    return num.length > 0 ? `(${num[0].identifier})` : "-";
  }
};

export const normalizeDate = date => {
  if (date) {
    if (date.includes("-")) {
      const year = date.split("-");
      return year[0];
    } else {
      return date;
    }
  }
};

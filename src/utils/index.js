/* utils functions */


//this function only necessary where books from google books API
export const normalizeBooks = books =>{
    
    if(!Array.isArray(books.items)) return []
    
    const normalized =  books.items.map(b => {
            return {
                title:b.volumeInfo.title,
                subtitle:b.volumeInfo.subtitle,
                isbn:b.volumeInfo.industryIdentifiers,
                author:b.volumeInfo.authors,
                publisher:b.volumeInfo.publisher,
                publishedDate:b.volumeInfo.publishedDate,
            }
    })
    
    return normalized
}
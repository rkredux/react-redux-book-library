export function selectBook(book){
	console.log(`${book.title} was selected by the user`);
	return {
		type: "BOOK_SELECTED", 
		payload: book
	}; 
}


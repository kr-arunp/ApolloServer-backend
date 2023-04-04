
import { authors, books } from "../database.js";

export const AddNewBook=(parent,args)=>{
	const { id, title, authorId }=args;
	const newBook={ 
		id,
		title,
		authorId
	}
	const isBook =books.find((book) => book.id === id);	
	if (isBook) {
	 console.error("Book Id already exist")
	}
	else {
		books.unshift(newBook);
		return books;
	}
}

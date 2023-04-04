/** @format */

import { authors, books } from "../database.js";

export const RemoveABook = (parent, args) => {
  const {id} = args;
const isBook = books.find((book) => book.id === id);	
let indexToDelete = books.findIndex((book) => book.id === id);
  if (!isBook) {
    console.error("given Book Id is not exist");
  } else {
    books.splice(indexToDelete, 1);
    return books;
  }
};

/** @format */

import { authors } from "../database.js";

export const RemoveAAuthor = (parent, args) => {
  const { id } = args;
  const isAuthor = authors.find((book) => book.id === id);
  let indexToDelete = authors.findIndex((book) => book.id === id);
  if (!isAuthor) {
    console.error("given Book Id is not exist");
  } else {
    authors.splice(indexToDelete, 1);
    return authors;
  }
};

/** @format */

import { authors } from "../database.js";
export const AddAuthor = (parent, args) => {
  const { id, name } = args;
  const newAuthor = {
    id,
    name
  };
  const isAuthor= authors.find((author) => author.id ===id);
  if (isAuthor) {
    console.error("Author Id already exist");
  } else {
    authors.unshift(newAuthor);
    return authors;
  }
};

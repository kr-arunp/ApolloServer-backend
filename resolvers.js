/** @format */
import { authors, books } from "./schema/database.js";
import { AddNewBook } from "./schema/mutations/AddNewBook.js";
import { RemoveABook } from "./schema/mutations/RemoveABook.js";
import { AddAuthor } from "./schema/mutations/AddAuthor.js";
import { RemoveAAuthor } from "./schema/mutations/RemoveAAuthor.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
    author: (parent, args) => {
      return authors.find((author) => author.id === args.id);
    },
    book: (parent, args) => {
      return books.find((book) => book.id === args.id);
    },
  },
  Author: {
    books: (parent, args) => {
      return books.filter((book) => book.authorId === parent.id);
    },
  },
  Book: {
    authors: (parent, args) => {
      return authors.find((author) => author.id === parent.authorId);
    },
  },
  Mutation: {
    AddNewBook: (parent, args) => AddNewBook(parent, args),
    RemoveABook: (parent, args) =>RemoveABook(parent, args),
    AddAuthor: (parent, args) => AddAuthor(parent, args),
    RemoveAAuthor:(parent, args) => RemoveAAuthor(parent, args),
  },
};

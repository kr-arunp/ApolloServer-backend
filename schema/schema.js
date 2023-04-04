// Importing the gql function from the `apollo-server` package.
import { gql } from "apollo-server"

// Defining the GraphQL schema using the gql function.
export const TypeDefs = gql`
  type Book {
    id: ID!           #Declaring a field named id which is of type ID and is required.
    title: String     #Declaring a field named title which is of type String
    authorId: Int     #Declaring a field named authorId which is of type Int.
    authors: Author   #Declaring a field named authors which is of type Author.
  }

  type Author {
    id: ID!           #Declaring a field named id which is of type ID and is required.
    name: String!     # Declaring a field named name which is of type String and is required.
    books: [Book!]  #Declaring a field named books which is an array of Book types and is required.
  }

type Mutation{
AddNewBook(id:ID!,title:String,authorId:Int):[Book],
RemoveABook(id:ID!):[Book],
AddAuthor(id:ID!,name:String):[Author],
RemoveAAuthor(id:ID!):[Author],
}
  type Query {
    book(id: ID!): Book           # Declaring a query named book that returns a single Book type given an id
    books: [Book]                # Declaring a query named books that returns an array of Book types.
    author(id: ID!): Author      # Declaring a query named author that returns a single Author type given an id
    authors: [Author!]        # Declaring a query named authors that returns an array of Author types
  }`;

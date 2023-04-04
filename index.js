import { ApolloServer } from "apollo-server";
// import { startStandaloneServer } from "@apollo/server/standalone";
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";

import { TypeDefs } from "./schema/schema.js";
import { resolvers } from "./resolvers.js";
const typeDefs=TypeDefs;
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins:[
  ApolloServerPluginLandingPageGraphQLPlayground
  ],
  
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});

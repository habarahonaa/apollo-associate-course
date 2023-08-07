import { typeDefs } from "./schema";
import { ApolloServer } from "@apollo/server";
import { addMocksToSchema } from "@graphql-tools/mock";
import { resolvers } from "./resolvers";
import { TrackAPI } from "./datasources/track-api";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startStandaloneServer } from "@apollo/server/standalone";

async function startApolloServer() {
  const server = new ApolloServer({
      typeDefs,
      resolvers
    });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache })
        }
      }
    },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();

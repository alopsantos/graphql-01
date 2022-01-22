import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import "./connection";
import { VideoResolver } from "./video/VideoResolver";
import { FarmaciaResolver } from "./farmacia/FarmaciaResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [VideoResolver, FarmaciaResolver],
  });
  const server = new ApolloServer({ schema });

  server.listen({ port: 4100 }, console.log("Server is running port 4100"));
}

bootstrap();

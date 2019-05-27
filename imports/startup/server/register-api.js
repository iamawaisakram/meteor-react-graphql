import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testScehma = `
type Query {
  hi: String
}
`;

const typeDefs = [testScehma, ResolutionsSchema];

const resolvers = {
  Query: {
    hi() {
      return 'Hello Awais';
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });

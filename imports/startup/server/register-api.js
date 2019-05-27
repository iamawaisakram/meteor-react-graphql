import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testScehma = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

const typeDefs = [testScehma, ResolutionsSchema];

const resolvers = {
  Query: {
    hi() {
      return 'Hello Awais';
    },
    resolutions() {
      return [
        {
          _id: 'adsfadadfsadsf',
          name: 'Get Stuff Done'
        },
        {
          _id: 'ffffffffff',
          name: 'Loose some weight'
        }
      ];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });

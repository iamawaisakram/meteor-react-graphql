import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ResolutionForm from './ResolutionForm';

const App = ({ loading, resolutions }) => {
  if (loading) return null;
  return (
    <div>
      <ResolutionForm />
      <ul>
        {resolutions &&
          resolutions.map(res => <li key={res._id}>{res.name}</li>)}
      </ul>
    </div>
  );
};

const ResolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(ResolutionsQuery, {
  props: ({ data }) => ({
    ...data
  })
})(App);

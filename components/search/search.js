import { memo } from 'react';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import AlgoliaClient from '../../lib/algolia-client';
import AutoComplete from './auto-complete';

const searchClient = new AlgoliaClient();

function Search({ indexName, ...props }) {
  return (
    <InstantSearch indexName={indexName} searchClient={searchClient}>
      <Configure hitsPerPage={8} />
      <AutoComplete {...props} />
    </InstantSearch>
  );
}

// This may look invalid, but currently the implementation of search doesn't have dynamic
// props, and this avoids querying Algolia multiple times + unnecessary re-renders
export default memo(Search, () => true);

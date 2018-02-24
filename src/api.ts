import fetch from 'node-fetch';
import * as querystring from 'querystring';

const searchUri = 'http://openlibrary.org/search.json';

type ValidQueries = {
  author?: string
};

type search = (query: ValidQueries) => any;
const search: search = (query) =>
  fetch(`${searchUri}?${querystring.stringify(query)}`)
    .then(response => response.json());

export {
  ValidQueries,
  search
};

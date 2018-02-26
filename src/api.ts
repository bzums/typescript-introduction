import fetch from 'node-fetch';
import * as querystring from 'querystring';
import { Book, SearchParams } from './types/book';

const searchUri = 'http://openlibrary.org/search.json';

const buildUrl = (params: SearchParams): string =>
  `${searchUri}?${querystring.stringify(params)}`;

type search = (queryParams: SearchParams) => Promise<Book[]>;
const search: search = (queryParams) =>
  fetch(buildUrl(queryParams))
    .then(response => response.json())
    .then(data => data.docs);

export {
  search
};

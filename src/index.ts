import { search } from './api';

search({ author: 'poe' })
  .then(data => console.log(data.docs.map(book => book.title)));

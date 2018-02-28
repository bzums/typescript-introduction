import { search } from './api';

search({ author: 'poe' })
  .then(books => books.map(book => book.title))
  .then(titles => titles.forEach(title => console.log(title)));

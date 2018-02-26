type Book = {
  title: string,
  author_name: string[],
  first_publish_year: number,
  first_sentence: string[] | undefined
};

type SearchParams = {
  author?: string,
  title?: string
};

export {
  Book,
  SearchParams
};

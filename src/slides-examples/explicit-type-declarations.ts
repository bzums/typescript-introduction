const foo = 'foo';

type stringTransformer = (s: string) => string;

const normalise: stringTransformer = (s) => s.trim().toUpperCase();
const preview: stringTransformer = (s) => s.substring(0, 10);

normalise(foo);
preview('foobarfoobar');

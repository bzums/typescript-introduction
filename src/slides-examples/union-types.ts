type stringTransformer = (s: string | undefined) => string;

const safeNormalise: stringTransformer = (s) =>
  (s === undefined)
    ? ''
    : s.trim().toUpperCase();

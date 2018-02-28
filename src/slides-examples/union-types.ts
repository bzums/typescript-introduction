
const safeNormalise = (s: string | undefined) =>
  (s === undefined)
    ? ''
    : s.trim().toUpperCase();

safeNormalise('12');
safeNormalise(undefined);

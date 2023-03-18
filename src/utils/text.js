export const pluralize = ({ noun, number }) =>
  `${number || 'No'} ${noun}${number === 1 ? '' : 's'}`;

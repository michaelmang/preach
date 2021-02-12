import { apply, setup, tw } from 'twind';

import tokens from './tokens/tokens';

const colors = Object.values(tokens.color);

function normalizeColors(colors) {
  return Object.values(colors.color).map(({ name, value }) => ({ key: name, value }));
}

function collectionToObject(collection) {
  return collection.reduce(
    (obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
}

const themeColors = collectionToObject(normalizeColors(colors))

setup({
  theme: {
    colors: themeColors,
  },
});

export { apply, tw };
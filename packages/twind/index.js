import kebabcase from 'lodash.kebabcase';
import { apply, setup, tw } from 'twind';

import * as tokens from './tokens/tokens.js';

let colors = {};

for (const [key, value] of Object.entries(tokens)) {
  colors[kebabcase(key)] = value;
} 

setup({
  theme: {
    colors,
  },
});

export { apply, tw };
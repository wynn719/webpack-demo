import * as sub from './sub';

const fn = () => {
  console.log("hi fn");
};

const objSpread = {
  ...{
    a: 123,
  },
  b: 234,
};

const obj = {
  name: 'wynn',
  age: 29,
}

Object.entries(obj);

sub.fn2();

import('./dynamic').then((module) => console.log(module));
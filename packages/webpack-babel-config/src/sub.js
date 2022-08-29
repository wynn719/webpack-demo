const fn = () => {
  console.log("hi fn");
};

const objSpread = {
  ...{
    a: 123,
  },
  b: 234,
};

const p = Promise.resolve();

const map = new Map();

export const fn2 = () => console.log(456);
import { onRender } from '../index.js';

// generate unique identifier
const uuid = () => Math.floor(Math.random() * Date.now());

// сreate a function to add onClick to the necessary elements
const onClick = (callback) => {
  const uid = uuid();

  onRender(() => document.querySelector(`[onClick="${uid}"]`).addEventListener('click', callback));

  return uid;
};

export { onClick };

import { createStore } from 'redux';

export default (reducers) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? console.tron.createEnhancer()
      : null;

  return createStore(reducers, enhancer);
};

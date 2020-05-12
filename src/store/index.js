import createStore from './createStore';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export { store };

import { createStore } from 'redux';

import rootReducer from './reducers';

function configureStore() {
  return createStore(rootReducer, );
}

export default configureStore;
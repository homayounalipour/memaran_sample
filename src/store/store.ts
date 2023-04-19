import { configureStore, Store } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducer";
import rootSaga from "./sagas";

const persistConfig = {
  key: "ShopPersist",
  storage,
  whitelist: ["token", "auth", "profile"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const SagaMiddleware = createSagaMiddleware();

export const storeGenerator = (reducer) => {
  const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
        immutableCheck: false,
      }).prepend(SagaMiddleware);
    },
  });
  const persistor = persistStore(store);

  SagaMiddleware.run(rootSaga, store as TStoreRedux);

  return {
    store,
    persistor,
  };
};

export const { store, persistor } = storeGenerator(persistedReducer);

export type TReduxState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;
export type TStoreRedux = Store<TReduxState>;

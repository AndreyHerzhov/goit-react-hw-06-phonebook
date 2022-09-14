import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";
import storage from "redux-persist/lib/storage";
import {persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,} from "redux-persist";
 

const rootReducer = combineReducers({
   items: contactsReducer,
   filter: filterReducer
})

const persistConfig = {
   key: "contacts",
   storage,
   
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

 export const store = configureStore({
    reducer: {
      contacts: persistedReducer
   },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
 })

 export const persistor = persistStore(store)

 
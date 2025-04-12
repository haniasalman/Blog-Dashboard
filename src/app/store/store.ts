import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../features/posts/postApi';

export const makeStore = () => {
    return configureStore({
      reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
    });
  };
  
  export type AppStore = ReturnType<typeof makeStore>;
  export type RootState = ReturnType<AppStore['getState']>;
  export type AppDispatch = AppStore['dispatch'];
  
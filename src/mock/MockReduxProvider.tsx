import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/store/rootReducer";
import { debitCards, recentTransactions, user } from "@/mock/apiResponse";
import { DebitCardsState } from "@/store/slices/debitCard/debitCardsSlice";
import createSagaMiddleware from "redux-saga";

const mockStore = {
  user: {
    ...user,
    loading: false,
    error: null,
  },
  recentTransaction: {
    data: recentTransactions,
    loading: false,
    error: null,
  },
  debitCard: {
    data: debitCards,
    loading: false,
    error: null,
  } as DebitCardsState,
};

const sagaMiddleware = createSagaMiddleware();

const storyBookStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  preloadedState: mockStore,
});

const MockReduxProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    sessionStorage.setItem("isAuthenticated", "true");
  }, []);

  return <Provider store={storyBookStore}>{children}</Provider>;
};

export default MockReduxProvider;

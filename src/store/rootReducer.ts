import { combineReducers } from "redux";
import userReducer from "@/store/slices/user/userSlice";
import recentTransactionReducer from "@/store/slices/recentTransaction/recentTransactionSlice";
import debitCardReduce from "@/store/slices/debitCard/debitCardsSlice";
import bannerReducer from "@/store/slices/banner/bannerSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  recentTransaction: recentTransactionReducer,
  debitCard: debitCardReduce,
  banner: bannerReducer,
});

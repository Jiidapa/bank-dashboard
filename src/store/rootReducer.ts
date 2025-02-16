import { combineReducers } from "redux";
import userReducer from "@/store/slices/user/userSlice";
import recentTransactionReducer from "@/store/slices/recentTransaction/recentTransactionSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  recentTransaction: recentTransactionReducer,
});

"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchRecentTransactionRequest,
  getRecentTransaction,
} from "@/store/slices/recentTransaction/recentTransactionSlice";

const RecentTransactions = () => {
  const dispatch = useDispatch();
  const recentTransactions = useSelector(getRecentTransaction);

  useEffect(() => {
    dispatch(fetchRecentTransactionRequest());
  }, [dispatch]);

  return (
    <div className="rctly__wrap main-loading main-loading--order5">
      <ul className="rctly__lst">
        {recentTransactions?.map((recentTransaction, index) => (
          <li className="rctly__item" key={index}>
            <a href="#" className="rctly__link">
              <span className="rctly__thumb">
                <Image
                  src={recentTransaction.image}
                  width={54}
                  height={54}
                  alt="Recent Transactions Avatar"
                />
              </span>
              <span className="rctly__name">{recentTransaction.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;

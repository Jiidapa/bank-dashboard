"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchDebitCardsRequest,
  getDebitCards,
} from "@/store/slices/debitCard/debitCardsSlice";
import { DebitCard } from "@/mock/apiResponse";
import { maskNumber } from "@/modules/mainBank/components/DebitCards/utils";
import clsx from "clsx";

const DebitCards = () => {
  const dispatch = useDispatch();
  const debitCardList = useSelector(getDebitCards);

  useEffect(() => {
    dispatch(fetchDebitCardsRequest());
  }, []);

  return (
    <div className="debit-swipe__wrap main-loading main-loading--order6">
      <div className="debit-swipe__inner">
        <div className="debit-swipe__lst" style={{ width: "1595px" }}>
          {debitCardList?.map((debitCard: DebitCard, index: number) => (
            <a
              key={index}
              href="#"
              className={clsx(`debit-swipe__item`, {
                "text-dark-gray": ["#ffffff", "#fff", "white"].includes(
                  debitCard.color.toLowerCase()
                ),
              })}
              style={{
                backgroundColor: debitCard.color,
                border:
                  debitCard?.borderColor &&
                  `1px solid ${debitCard.borderColor}`,
              }}
              data-testid={`debit-card-${index}`}
            >
              <strong className="debit-swipe__name">{debitCard.name}</strong>
              {debitCard.status === "in-progress" && (
                <span className="debit-swipe__etc">In progress</span>
              )}
              {debitCard.number && (
                <span className="debit-swipe__etc debit-swipe__etc--active">
                  <span className="debit-swipe__etc__num">
                    {maskNumber(debitCard.number)}
                  </span>
                </span>
              )}
              <span
                className={clsx("debit-swipe__issue", {
                  "text-light-gray": debitCard.status === "Active",
                })}
              >
                Issued by TestLab
              </span>
            </a>
          ))}

          <a href="#" className="debit-swipe__item debit-swipe__item--all">
            See all
          </a>
        </div>
      </div>
    </div>
  );
};
export default DebitCards;

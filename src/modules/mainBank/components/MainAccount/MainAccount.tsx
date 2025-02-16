"use client";

import { useSelector } from "react-redux";
import { getAccounts } from "@/store/slices/account/accountSlice";
import { Account } from "@/mock/apiResponse";
import { toTitleCase } from "@/modules/mainBank/utils";

const MainAccount = () => {
  const accounts = useSelector(getAccounts);
  const targetAccount = accounts.find(
    (account: Account) => account.isMainAccount
  );

  return (
    <>
      {targetAccount && (
        <div className="main-acc main-acc--large main-loading main-loading--order3">
          <div className="main-acc__top" data-testid="main-account-top">
            <h2 className="main-acc__name">
              {toTitleCase(targetAccount.type)}
            </h2>
            <span className="main-acc__amount">฿62,000.00</span>
            <span className="main-acc__detail main-acc__detail--num">
              Smart account {targetAccount.accountNumber}
            </span>
            <span className="main-acc__detail">Powered by TestLab</span>
          </div>

          <div className="main-acc__bottom">
            <div className="main-acc__ani_box">
              <div className="main-acc__ani__item">
                <span className="main-acc__ani_img1"></span>
                <span className="main-acc__ani_img2"></span>
              </div>
              <div className="main-acc__ani__item2">
                <span className="main-acc__ani_img3"></span>
              </div>
            </div>
            <div className="main-acc__link__box">
              <div
                className="main-acc__link__item"
                data-testid="main-account-links"
              >
                <a
                  href="#"
                  className="main-acc__link main-acc__link--withdrawal"
                >
                  Withdrawal
                </a>
                <a href="#" className="main-acc__link main-acc__link--qr">
                  QR scan
                </a>
                <a href="#" className="main-acc__link main-acc__link--addmoney">
                  Add money
                </a>
              </div>
            </div>
          </div>
          <button type="button" className="main-acc__more">
            <span className="blind">More Action</span>
          </button>
          <div
            className="tooltip "
            style={{ display: "none" }}
            data-testid="tooltip-main-account"
          >
            <button type="button" className="tooltip__btn-more">
              Set main account
            </button>

            <button type="button" className="tooltip__btn-more">
              Copy account number
            </button>

            <button type="button" className="tooltip__btn-more">
              Edit Name and Color
            </button>
          </div>
          <div
            className="tooltip tooltip--bubble tooltip--right-under"
            style={{ display: "none" }}
          >
            <span className="tooltip__txt">
              Change your main account for <br />
              Using transfer, Wallet more easliy
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default MainAccount;

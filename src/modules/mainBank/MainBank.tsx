"use client";

import Greeting from "@/modules/mainBank/components/Greeting/Greeting";
import RecentTransactions from "@/modules/mainBank/components/RecentTransactions/RecentTransactions";
import DebitCards from "@/modules/mainBank/components/DebitCards/DebitCards";
import Banners from "@/modules/mainBank/components/Banners/Banners";
import MainAccount from "@/modules/mainBank/components/MainAccount/MainAccount";
import { useDispatch } from "react-redux";
import { fetchAccountsRequest } from "@/store/slices/account/accountSlice";
import { useEffect } from "react";
import AccountList from "@/modules/mainBank/components/AccountList/AccountList";

const MainBank = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccountsRequest());
  }, []);

  return (
    <div className="wrap">
      <header className="header ">
        <a href="#" className="header__lft header__menu">
          <span className="blind">Menu</span>
        </a>
        <button type="button" className="header__rgt header__cxl">
          <span className="blind">Cancel</span>
        </button>
      </header>

      <main className="container container--main">
        <div className="content_wrap">
          <Greeting />
          <MainAccount />
          <RecentTransactions />
          <a
            className="main-make main-loading main-loading--order6"
            style={{ display: "none" }}
          >
            <span className="main-make__img">
              {/*TODO: undo comment when there is an image file*/}
              {/*<Image*/}
              {/*  src="../img/main/img-debitcard-make.png"*/}
              {/*  alt="Image main make"*/}
              {/*  fill*/}
              {/*/>*/}
            </span>
            <strong className="main-make__tit">Make your Debit Card</strong>
            <p className="main-make__dsc">
              To enjoy 0.5% cash back from online purchase.
            </p>
          </a>

          <DebitCards />
          <AccountList />
          <Banners />

          <div className="main-tb">
            <a href="#" className="link-to">
              Total Balance
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainBank;

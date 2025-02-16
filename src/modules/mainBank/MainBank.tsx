import Greeting from "@/modules/mainBank/components/Greeting/Greeting";
import RecentTransactions from "@/modules/mainBank/components/RecentTransactions/RecentTransactions";
import DebitCards from "@/modules/mainBank/components/DebitCards/DebitCards";
import Banners from "@/modules/mainBank/components/Banners/Banners";

const MainBank = () => {
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

          <div className="main-acc main-acc--large main-loading main-loading--order3">
            <div className="main-acc__top" data-testid="main-account-top">
              <h2 className="main-acc__name">Saving Account</h2>
              <span className="main-acc__amount">฿62,000.00</span>
              <span className="main-acc__detail main-acc__detail--num">
                Smart account 568-2-81740-9
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
                  <a
                    href="#"
                    className="main-acc__link main-acc__link--addmoney"
                  >
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

          <RecentTransactions />

          <a
            className="main-make main-loading main-loading--order6"
            style={{ display: "none" }}
          >
            <span className="main-make__img">
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

          <div
            className="main-acc is-bluegreen is-small"
            data-testid="saving-account-card"
          >
            <div className="main-acc__top">
              <h2 className="main-acc__name">Saving Account</h2>
              <span className="main-acc__amount">฿8,837,999.00</span>
            </div>
            <div className="main-acc__bottom">
              <span className="main-acc__detail">
                Smart account 568-2-81740-9
              </span>
              <span className="main-acc__detail">Powered by TestLab</span>
            </div>
            <button
              type="button"
              className="main-acc__more main-acc__more--small"
            >
              <span className="blind">More Action</span>
            </button>
            <div
              className="tooltip tooltip--sub-acc"
              data-testid="tooltip-sub-account"
            >
              <button type="button" className="tooltip__btn-more">
                Copy account number
              </button>
              <button type="button" className="tooltip__btn-more">
                Edit Name and Color
              </button>
            </div>
            <a href="#" className="main-acc__act main-acc__act--money">
              <span className="blind">Add money</span>
            </a>
          </div>

          <div
            className="main-acc is-orange is-small"
            data-testid="credit-loan-card"
          >
            <div className="main-acc__top">
              <h2 className="main-acc__name">Credit Loan</h2>
              <span className="main-acc__amount">฿300.100</span>
            </div>
            <div className="main-acc__bottom">
              <span className="main-acc__detail">
                Credit Loan 568-2-81740-9
              </span>
            </div>
            <button
              type="button"
              className="main-acc__more main-acc__more--small"
            >
              <span className="blind">More Action</span>
            </button>
            <div
              className="tooltip tooltip--sub-acc"
              style={{ display: "none" }}
            >
              <button type="button" className="tooltip__btn-more">
                Copy account number
              </button>

              <button type="button" className="tooltip__btn-more">
                Edit Name and Color
              </button>
            </div>
            <a href="#" className="main-acc__act main-acc__act--disburse">
              <span className="blind">Disburse</span>
            </a>
          </div>

          <div
            className="main-acc is-purple is-small"
            data-testid="travel-new-york-card"
          >
            <div className="main-acc__top">
              <h2 className="main-acc__name">Travel New York</h2>
              <span className="main-acc__amount">฿30,000.00</span>
            </div>
            <div className="main-acc__bottom">
              <span className="main-acc__detail">
                Goal driven savings 568-2-81740-9
              </span>
              <span className="main-acc__detail">Powered by TestLab</span>
            </div>
            <button
              type="button"
              className="main-acc__more main-acc__more--small"
            >
              <span className="blind">More Action</span>
            </button>
            <div
              className="tooltip tooltip--sub-acc"
              style={{ display: "none" }}
            >
              <button type="button" className="tooltip__btn-more">
                Copy account number
              </button>

              <button type="button" className="tooltip__btn-more">
                Edit Name and Color
              </button>
            </div>
            <div className="main-acc__circle">
              <svg
                className="graph-bar"
                width="100%"
                height="100%"
                viewBox="0 0 42 42"
              >
                <circle
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="rgba(0,0,0,0.07)"
                  strokeWidth="1.5"
                ></circle>
                <circle
                  className="gauge"
                  cx="21"
                  cy="21"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDashoffset="25"
                  style={{ strokeDasharray: "24 76" }}
                ></circle>
              </svg>
              <div className="main-acc__num">
                <span className="percent">24</span>
                <span className="unit">%</span>
              </div>
            </div>
          </div>

          <div
            className="main-acc is-deepblue is-small"
            data-testid="need-to-repay-card"
          >
            <div className="main-acc__top">
              <h2 className="main-acc__name">Need to repay</h2>
              <span className="main-acc__amount">฿30,000.00</span>
              <span className="main-acc__flag main-acc__flag--lock">
                Disbursement
              </span>
              <span className="main-acc__flag">Overdue</span>
            </div>
            <div className="main-acc__bottom">
              <span className="main-acc__detail">
                Credit Loan 568-2-81740-9
              </span>
            </div>
            <button
              type="button"
              className="main-acc__more main-acc__more--small"
            >
              <span className="blind">More Action</span>
            </button>
            <div
              className="tooltip tooltip--sub-acc"
              style={{ display: "none" }}
            >
              <button type="button" className="tooltip__btn-more">
                Copy account number
              </button>

              <button type="button" className="tooltip__btn-more">
                Edit Name and Color
              </button>
            </div>
            <a href="#" className="main-acc__act main-acc__act--pay">
              <span className="blind">Pay</span>
            </a>
          </div>
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

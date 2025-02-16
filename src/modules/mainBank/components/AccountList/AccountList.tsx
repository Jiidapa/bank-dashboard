import { useSelector } from "react-redux";
import { getAccounts } from "@/store/slices/account/accountSlice";
import { Account } from "@/mock/apiResponse";
import { formatAccountAmount, toTitleCase } from "@/modules/mainBank/utils";
import clsx from "clsx";
import Progress from "@/components/Progress/Progress";

const AccountList = () => {
  const accounts = useSelector(getAccounts);

  const selectRenderDetailComponent = (account: Account) => {
    switch (account.type) {
      case "saving-account":
        return <SavingAccount account={account} />;
      case "credit-loan":
        return <LoanAccount account={account} />;
      case "goal-saving-account":
        return <GoalSavingAccount account={account} />;
      default:
        return <div />;
    }
  };

  return (
    <div>
      {accounts?.map((account: Account, index: number) => (
        <div
          key={index}
          className="main-acc is-small"
          style={{ backgroundColor: account.color }}
          data-testid="account-list"
        >
          <div className="main-acc__top">
            <h2 className="main-acc__name">{toTitleCase(account.type)}</h2>
            <span className="main-acc__amount">
              {formatAccountAmount(account.currency, account.amount)}
            </span>
            {account?.flags &&
              account.flags.map((flag, index: number) => (
                <span
                  className={clsx("main-acc__flag", {
                    "main-acc__flag--lock": index === 0,
                  })}
                  key={index}
                >
                  {flag}
                </span>
              ))}
          </div>
          {selectRenderDetailComponent(account)}
        </div>
      ))}
    </div>
  );
};

export default AccountList;

export const SavingAccount = ({ account }: { account: Account }) => {
  return (
    <>
      <div className="main-acc__bottom">
        <span className="main-acc__detail">
          Smart account{account.accountNumber}
        </span>
        <span className="main-acc__detail">Powered by {account.issuer}</span>
      </div>
      <button type="button" className="main-acc__more main-acc__more--small">
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
    </>
  );
};

const LoanAccount = ({ account }: { account: Account }) => {
  return (
    <>
      <div className="main-acc__bottom">
        <span className="main-acc__detail">
          Credit Loan {account.accountNumber}
        </span>
      </div>
      <button type="button" className="main-acc__more main-acc__more--small">
        <span className="blind">More Action</span>
      </button>
      <div className="tooltip tooltip--sub-acc" style={{ display: "none" }}>
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
    </>
  );
};

const GoalSavingAccount = ({ account }: { account: Account }) => {
  return (
    <>
      <div className="main-acc__bottom">
        <span className="main-acc__detail">
          Goal driven savings {account.accountNumber}
        </span>
        <span className="main-acc__detail">Powered by {account.issuer}</span>
      </div>
      <button type="button" className="main-acc__more main-acc__more--small">
        <span className="blind">More Action</span>
      </button>
      <div className="tooltip tooltip--sub-acc" style={{ display: "none" }}>
        <button type="button" className="tooltip__btn-more">
          Copy account number
        </button>

        <button type="button" className="tooltip__btn-more">
          Edit Name and Color
        </button>
      </div>
      <Progress percent={account.progress as number} />
    </>
  );
};

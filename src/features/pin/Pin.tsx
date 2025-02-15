"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SESSION_AUTH_KEY } from "@/constant/route";
import backspaceIcon from "../../../public/images/backspaec.png";
import clsx from "clsx";

const Pin = () => {
  const router = useRouter();
  const [pin, setPin] = useState<string>("");
  const maxPinDigit = 6;
  const pinKeyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0];

  const handlePinChange = (digit: string) => {
    if (pin.length < maxPinDigit) {
      setPin((prev) => prev + digit);
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    if (pin.length === maxPinDigit) {
      sessionStorage.setItem(SESSION_AUTH_KEY, "true");
      router.push("/");
    }
  }, [pin, router]);

  const renderPinKey = () => (
    <>
      {pinKeyList.map((num, index) => (
        <Fragment key={index}>
          {num !== "" ? (
            <button
              key={index}
              type="button"
              className="pin__key"
              onClick={() => handlePinChange(num.toString())}
              disabled={num === ""}
            >
              {num}
            </button>
          ) : (
            <span className="pin__key pin__key--space" />
          )}
        </Fragment>
      ))}
    </>
  );

  return (
    <div className="wrap">
      <main className="container container--pin-type">
        <div className="pin">
          <div className="pin__top">
            <span className="pin__photo">
              <Image
                src="https://dummyimage.com/200x200/999/fff"
                alt="avatar"
                width={92}
                height={92}
              />
            </span>
            <h1 className="pin__name">Interview User</h1>
            <p className="pin__dsc" style={{ display: "none" }}>
              Invalid PIN Code.
              <br />
              You have 3 attempt left.
            </p>
            <div className="pin__dots">
              {[...Array(6).keys()].map((index) => (
                <span
                  className={clsx("pin__dot", {
                    "is-filled": pin[index],
                  })}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="pin__btm">
            <a href="#" className="pin__login">
              Login with ID / Password
            </a>
            <span className="pin__kb">Powered by TestLab</span>
            <div className="pin__keys">
              {renderPinKey()}
              <button
                type="button"
                className="pin__key pin__key--del"
                onClick={handleBackspace}
              >
                <Image
                  src={backspaceIcon}
                  alt="backspace"
                  width={32}
                  height={32}
                />
                <span className="blind">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pin;

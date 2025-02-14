import Image from "next/image";

const Pin = () => {
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
                            <span className="pin__dot is-filled"></span>
                            <span className="pin__dot is-filled"></span>
                            <span className="pin__dot"></span>
                            <span className="pin__dot"></span>
                            <span className="pin__dot"></span>
                            <span className="pin__dot"></span>
                        </div>
                    </div>
                    <div className="pin__btm">
                        <a href="#" className="pin__login">
                            Login with ID / Password{" "}
                        </a>
                        <span className="pin__kb">Powered by TestLab</span>
                        <div className="pin__keys">
                            <button type="button" className="pin__key">
                                1
                            </button>
                            <button type="button" className="pin__key">
                                2
                            </button>
                            <button type="button" className="pin__key">
                                3
                            </button>
                            <button type="button" className="pin__key">
                                4
                            </button>
                            <button type="button" className="pin__key">
                                5
                            </button>
                            <button type="button" className="pin__key">
                                6
                            </button>
                            <button type="button" className="pin__key">
                                7
                            </button>
                            <button type="button" className="pin__key">
                                8
                            </button>
                            <button type="button" className="pin__key">
                                9
                            </button>
                            <span className="pin__key pin__key--space"></span>
                            <button type="button" className="pin__key">
                                0
                            </button>
                            <button type="button" className="pin__key pin__key--del">
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

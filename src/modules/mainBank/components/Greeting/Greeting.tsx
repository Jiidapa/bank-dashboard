"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserRequest, getUser } from "@/store/slices/user/userSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const { name, greetingMessage } = useSelector(getUser);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  return (
    <div className="main-top">
      <h1 className="main-top__tit main-loading main-loading--order1">
        {greetingMessage} {name}
      </h1>
    </div>
  );
};

export default Greeting;

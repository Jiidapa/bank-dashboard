"use client";

import MainBank from "@/modules/mainBank/MainBank";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

const MainBankPage = () => {
  return (
    <PrivateRoute>
      <MainBank />
    </PrivateRoute>
  );
};

export default MainBankPage;

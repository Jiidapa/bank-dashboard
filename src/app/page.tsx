import MainBank from "@/features/mainBank/MainBank";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

const MainBankPage = () => {
  return (
    <PrivateRoute>
      <MainBank />
    </PrivateRoute>
  );
};

export default MainBankPage;

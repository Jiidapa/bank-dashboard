"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SPLASH_SCREEN_PAGE } from "@/constant/route";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const sessionAuthKey = "isAuthenticated";

  useEffect(() => {
    const token = sessionStorage.getItem(sessionAuthKey);

    if (token !== "true") {
      router.push(SPLASH_SCREEN_PAGE);
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  return isAuthenticated ? <>{children}</> : null;
};

export default PrivateRoute;

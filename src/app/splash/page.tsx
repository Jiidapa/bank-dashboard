"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/pin");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="wrap" data-testid="splash-screen">
      <div className="splash">
        <div className="loader" />
      </div>
    </div>
  );
};

export default Page;

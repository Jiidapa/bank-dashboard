"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getBanners,
  fetchBannersRequest,
} from "@/store/slices/banner/bannerSlice";
import { Banner } from "@/mock/apiResponse";

const Banners = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector(getBanners);

  useEffect(() => {
    dispatch(fetchBannersRequest());
  }, []);

  return (
    <div>
      {bannerList?.map((banner: Banner, index: number) => (
        <a href="#" className="main-prod" key={index}>
          <span className="main-prod__cms-ico">
            <Image
              src={banner.image}
              width={54}
              height={54}
              alt="Main Product"
            />
          </span>
          <strong className="main-prod__tit">{banner.title}</strong>
          <p className="main-prod__dsc">{banner.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Banners;

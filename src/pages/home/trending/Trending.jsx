import React, { useState } from "react";
import "../Home.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  // console.log("dataaa", data);

  const onTabChange = (tab) => {
    if (tab === "Day") {
      setEndPoint("day");
    } else {
      setEndPoint("week");
    }
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.data?.results} loading={loading} />
    </div>
  );
};

export default Trending;

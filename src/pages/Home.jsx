import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Latest" fetchURL={requests.requestLatest} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="NowPlaying" fetchURL={requests.requestNowPlaying} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestRecommendations} />
      <Row rowID="5" title="Upcoming" fetchURL={requests.requestUpcoming} />
    </>
  );
};

export default Home;

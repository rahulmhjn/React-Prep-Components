import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const goToPagination = () => {
    navigate("/pagination");
  };

  const goToInProgress = () => {
    navigate("/inprogress");
  };

  const goToInfiniteScroll = () => {
    navigate("/infinite-scroll");
  };

  const goToProgressBar = () => {
    navigate("/progress-bar");
  };

  const goToStarRating = () => {
    navigate("/star-rating");
  };

  const goToSidebar = () => {
    navigate("/side-bar");
  };

  const goToSearchbar = () => {
    navigate("/search-bar");
  };

  const goToCSSPractice = () => {
    navigate("/css-practice");
  };

  const goToTabForm = () => {
    navigate("/tab-form");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "200px",
          backgroundColor: "grey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={goToPagination}
      >
        Pagination
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "200px",
          backgroundColor: "grey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={goToInfiniteScroll}
      >
        Infinite Scroll
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "200px",
          backgroundColor: "grey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={goToSearchbar}
      >
        Search Bar
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "200px",
          backgroundColor: "grey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={goToInProgress}
      >
        In Progress Work
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "200px",
          backgroundColor: "grey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={goToProgressBar}
      >
        Progress Bar
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "200px",
          backgroundColor: "grey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={goToStarRating}
      >
        Star Rating
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "200px",
          backgroundColor: "grey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={goToSidebar}
      >
        VS Code Sidebar
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "200px",
          backgroundColor: "grey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={goToCSSPractice}
      >
        Practice CSS
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "200px",
          backgroundColor: "grey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={goToTabForm}
      >
        Tab Form
      </div>
    </div>
  );
};

export default Home;

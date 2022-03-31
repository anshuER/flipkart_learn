import React from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "20px",
          border: "1px solid black",
          alignSelf: "center",
          marginTop: "50px"
        }}
      >
        <div
          className="alert alert-primary"
          style={{  width: "800px", alignSelf: "center" }}
        >
          Clothes
        </div>
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt="gelllo"
          width="800px"
          height="500px"
          style={{ alignSelf: "center" }}
        />
      </div>
    </div>
  );
};

export default Home;

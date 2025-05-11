import React from "react";

const CSS = () => {
  const [color, setColor] = React.useState("red");
  return (
    <div style={{ height: "160vh", width: "100vw" }}>
      <div className="outer">
        Relative
        <div className="inner">Sticky</div>
        {/* Absolute (It will be out of normal flow but relative to outer
          relative) */}
        <div
          style={{
            position: "absolute",
            height: "50px",
            width: "50px",
            top: 0,
            right: 0,
            backgroundColor: "green",
          }}
        >
          Absolute
        </div>
        {/* Static // This will be in normal flow an top left wont work */}
        <div
          style={{
            height: "50px",
            width: "50px",
            position: "static",
            backgroundColor: "blue",
          }}
        >
          Static
        </div>
        {/* Fixed // This will be fixed to the viewport */}
        <div
          style={{
            position: "fixed",
            height: "150px",
            width: "150px",
            top: 0,
            right: 0,
            backgroundColor: "orange",
          }}
        >
          Fixed
        </div>
      </div>
      <div style={{ position: "absolute", top: "0px", left: "350px" }}>
        <h3 style={{ display: "inline-block" }}>z-index</h3>
        <button onClick={() => setColor("red")}>red</button>
        <button onClick={() => setColor("blue")}>blue</button>
        <div
          className="box"
          style={{ zIndex: color === "red" ? 2 : 1, background: "red" }}
        ></div>
        <div
          className="box"
          style={{ zIndex: color === "blue" ? 2 : 1, background: "blue" }}
        ></div>
      </div>
    </div>
  );
};

export default CSS;

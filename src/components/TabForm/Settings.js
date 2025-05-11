import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, theme: e.target.value }));
  };

  return (
    <div>
      <div style={{ margin: "12px" }}>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onClick={handleChange}
        />
        <label>Dark</label>
      </div>
      <div style={{ margin: "12px" }}>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onClick={handleChange}
        />
        <label>Light</label>
      </div>
    </div>
  );
};

export default Settings;

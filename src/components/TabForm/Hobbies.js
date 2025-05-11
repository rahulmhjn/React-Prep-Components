import React from "react";

const Hobbies = ({ data, setData }) => {
  const { hobbies } = data;

  const handleChange = (e) => {
    const checked = e.target.name;
    setData((prev) => ({
      ...prev,
      hobbies: checked
        ? [...prev.hobbies, e.target.name]
        : prev?.hobbies?.filter((e) => e !== e.target.name),
    }));
  };

  return (
    <div>
      <div style={{ margin: "12px" }}>
        <input
          type="checkbox"
          name="coding"
          checked={hobbies?.includes("coding")}
          onChange={handleChange}
        />
        <label>Coding</label>
      </div>
      <div style={{ margin: "12px" }}>
        <input
          type="checkbox"
          name="music"
          checked={hobbies?.includes("music")}
          onChange={handleChange}
        />
        <label>Music</label>
      </div>
      <div style={{ margin: "12px" }}>
        <input
          type="checkbox"
          name="reading"
          checked={hobbies?.includes("reading")}
          onChange={handleChange}
        />
        <label>Reading</label>
      </div>
    </div>
  );
};

export default Hobbies;

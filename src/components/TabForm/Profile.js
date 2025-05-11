import React from "react";

const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div style={{ margin: "12px" }}>
        <label style={{ marginRight: "5px" }}>Name:</label>
        <input name="name" type="text" value={name} onChange={handleChange} />
        {errors.name && (
          <span style={{ display: "block", color: "red" }}>{errors.name}</span>
        )}
      </div>
      <div style={{ margin: "12px" }}>
        <label style={{ marginRight: "15px" }}>Age:</label>
        <input name="age" type="number" value={age} onChange={handleChange} />
        {errors.age && (
          <span style={{ display: "block", color: "red" }}>{errors.age}</span>
        )}
      </div>
      <div style={{ margin: "12px" }}>
        <label style={{ marginRight: "5px" }}>Email:</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && (
          <span style={{ display: "block", color: "red" }}>{errors.email}</span>
        )}
      </div>
    </div>
  );
};

export default Profile;

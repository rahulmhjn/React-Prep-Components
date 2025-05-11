import React, { useState } from "react";
import { fileConfig } from "./config";
import BackButton from "../../utilityComponents/BackButton/BackButton";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({ hobbies: [] });
  const [errors, setErrors] = useState({});

  const ActiveComponent = fileConfig[activeTab].component;

  const handleNext = () => {
    const result = fileConfig[activeTab].validate(data);
    console.log(result);
    if (result === true) {
      setActiveTab((prev) => prev + 1);
      setErrors({});
    } else {
      setErrors(result);
    }
  };

  return (
    <React.Fragment>
      <BackButton position="fixed" />
      <div className="tab-form-container">
        <div className="tab-form">
          <div className="tab-form-header">
            {fileConfig.map((obj, index) => (
              <div
                onClick={() => setActiveTab(index)}
                key={index}
                className="tab-form-title"
              >
                {obj.name}
              </div>
            ))}
          </div>
          <div className="tab-form-content">
            <ActiveComponent data={data} setData={setData} errors={errors} />
          </div>
          <div className="buttons">
            {activeTab !== 0 && (
              <button onClick={() => setActiveTab((prev) => prev - 1)}>
                Prev
              </button>
            )}
            {activeTab !== fileConfig.length - 1 && (
              <button onClick={handleNext}>Next</button>
            )}
            {activeTab === fileConfig.length - 1 && (
              <button
                onClick={() => {
                  alert("Data submitted successfully. Check console");
                  console.log(data);
                }}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TabForm;

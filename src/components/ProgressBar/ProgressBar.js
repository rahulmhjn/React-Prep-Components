import React from 'react';

const ProgressBar = ({ progress = 0, color = 'green' }) => {
  const styleObj = {
    width: progress + '%',
    backgroundColor: color,
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-outline">
        <div style={styleObj}>{progress}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;

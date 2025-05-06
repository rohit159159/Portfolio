import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <svg className="svg-loader" viewBox="0 0 100 100">
        <circle className="loader-bg" cx="50" cy="50" r="45" />
        <circle className="loader-ring" cx="50" cy="50" r="45" />
      </svg>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default Loader;

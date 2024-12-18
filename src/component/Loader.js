import React from "react";

const Loader = ({ show }) => {
  if (!show) {
    return;
  }
  return (
    <div className="loader-main">
      <div class="loading-wave">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
      </div>
     </div>
  );
};

export default Loader;

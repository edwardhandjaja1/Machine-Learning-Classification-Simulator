import React from "react";

const ResultsDisplay = ({ results }) => {
  return (
    <div>
      <h3>Results:</h3>
      <p>{JSON.stringify(results.predictions)}</p>
    </div>
  );
};

export default ResultsDisplay;

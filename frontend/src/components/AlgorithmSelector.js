import React from "react";

const AlgorithmSelector = ({ setAlgorithm }) => {
  return (
    <select onChange={(e) => setAlgorithm(e.target.value)}>
      <option value="naive_bayes">Naive Bayes</option>
      <option value="knn">K Nearest Neighbors</option>
      <option value="perceptron">Perceptron</option>
    </select>
  );
};

export default AlgorithmSelector;

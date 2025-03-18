import React, { useState } from "react";
import axios from "axios";

const ClassifierForm = ({ algorithm, setResults }) => {
  const [X_train, setXTrain] = useState("");
  const [y_train, setYTrain] = useState("");
  const [X_test, setXTest] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      model: algorithm,
      X_train: JSON.parse(X_train),
      y_train: JSON.parse(y_train),
      X_test: JSON.parse(X_test),
    };

    const response = await axios.post("http://localhost:8000/api/classify/", data);
    setResults(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Training Data (X_train):</label>
      <textarea value={X_train} onChange={(e) => setXTrain(e.target.value)} />

      <label>Labels (y_train):</label>
      <textarea value={y_train} onChange={(e) => setYTrain(e.target.value)} />

      <label>Test Data (X_test):</label>
      <textarea value={X_test} onChange={(e) => setXTest(e.target.value)} />

      <button type="submit">Classify</button>
    </form>
  );
};

export default ClassifierForm;

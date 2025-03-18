import React, { useState } from "react";
import AlgorithmSelector from "./components/AlgorithmSelector";
import ClassifierForm from "./components/ClassifierForm";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  const [algorithm, setAlgorithm] = useState("naive_bayes");
  const [results, setResults] = useState(null);

  return (
    <div>
      <h1>ML Classifier Simulator</h1>
      <AlgorithmSelector setAlgorithm={setAlgorithm} />
      <ClassifierForm algorithm={algorithm} setResults={setResults} />
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

export default App;



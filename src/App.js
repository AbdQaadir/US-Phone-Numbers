import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import NumberEntry from "./components/NumberEntry/NumberEntry";

function App() {
  const [numbers, setNumbers] = useState([]);

  const handleIndex = ({ element, type }) => {
    const fromIndex = numbers.indexOf(element);
    let toIndex = null;

    if (type === "up") {
      toIndex = fromIndex - 1;
    } else if (type === "down") {
      toIndex = fromIndex + 1;
    }

    let numbersDuplicate = [...numbers];
    numbersDuplicate.splice(fromIndex, 1);
    numbersDuplicate.splice(toIndex, 0, { ...element, index: toIndex });

    setNumbers(numbersDuplicate);
  };
  const handleSubmit = (number) => {
    if (number) {
      const newEntry = {
        number,
        id: numbers.length + 1,
        index: numbers[0].index - 1, //To ensure new item get to be at the top
      };
      setNumbers((previousState) => [newEntry, ...previousState]);
    }
  };

  const sortedNumbers = numbers.sort((a, b) => a.index - b.index);

  return (
    <div className="container">
      <Header handleSubmit={handleSubmit} />
      {sortedNumbers.map((number) => (
        <NumberEntry
          key={number.id}
          number={number}
          handleIndex={handleIndex}
          lastIndex={sortedNumbers[sortedNumbers.length - 1]}
          firstIndex={sortedNumbers[0]}
        />
      ))}
    </div>
  );
}

export default App;

import React, { useState } from "react";

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        id="option1"
        name="option"
        value="option1"
        checked={selectedOption === "option1"}
        onChange={handleOptionChange}
      />
      <label htmlFor="option1">Celcius</label>

      <input
        type="radio"
        id="option2"
        name="option"
        value="option2"
        checked={selectedOption === "option2"}
        onChange={handleOptionChange}
      />
      <label htmlFor="option2">Fahrenheit</label>
    </div>
  );
};

export default RadioButton;

import React, { useState } from "react";

const RadioButton: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <input
        className="custom-radio-button"
        type="radio"
        id="option1"
        name="option"
        value="option1"
        checked={selectedOption === "option1"}
        onChange={handleOptionChange}
      />
      <label htmlFor="option1">Celsius</label>

      <input
        className="custom-radio-button"
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

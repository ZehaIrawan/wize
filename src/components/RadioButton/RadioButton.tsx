import React, { ChangeEvent } from "react";

interface Props {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const RadioButton: React.FC<Props> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <input
        className="custom-radio-button"
        type="radio"
        id="celcius"
        name="option"
        value="celcius"
        checked={selectedOption === "celcius"}
        onChange={handleOptionChange}
      />
      <label htmlFor="celcius">Celsius</label>

      <input
        className="custom-radio-button"
        type="radio"
        id="fahrenheit"
        name="option"
        value="fahrenheit"
        checked={selectedOption === "fahrenheit"}
        onChange={handleOptionChange}
      />
      <label htmlFor="fahrenheit">Fahrenheit</label>
    </div>
  );
};

export default RadioButton;

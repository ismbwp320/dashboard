import { useState } from "react";

// Child Component
const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor]  = useState(undefined);

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <input
      type="text"
      id="input"
      aria-label="input"
      onChange={handleChange}
      value={activeColor}
    />
  );

};

export default Callback;
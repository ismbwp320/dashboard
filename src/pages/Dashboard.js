import { useState } from "react";
import Callback from "../components/Callback";
// How to pass data from Child to Parent
const Dashboard = () => {
  const [UIcolor, setUIcolor] = useState(null);

  // Calllback function
  const getColor = (color) => {
    setUIcolor(color);
  };

  return (
    <>
      <div style={{background: `${UIcolor}`, height: '300px', width: '300px', border: '1px solid' }}>

      </div>
      <Callback getColor= {getColor} />
    </>
  );

};

export default Dashboard;
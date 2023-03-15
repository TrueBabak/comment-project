import React from "react";
import Web from "../Components/web";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

const App = () => {
  return (
    <div className="bg-[#CBE4DE] h-screen">
      <Web />
    </div>
  );
};

export default App;

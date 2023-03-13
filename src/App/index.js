import React from "react";
import Web from "../Components/web";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

const App = () => {
  return (
    <div>
      <Web />
    </div>
  );
};

export default App;

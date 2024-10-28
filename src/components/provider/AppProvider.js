import React, { useEffect, useState } from "react";
import AppContext from "./Context";
import axios from "axios";

function AppProvider({ children }) {
  // const [ListServices, setListServices] = useState([]);
  

  useEffect(() => {
   
    fetchData();
  }, []);

  const fetchData = async () => {
    // lay data tu api se co luc xay ra loi
    try {
    
      // const resVehicles = await axios.get("http://localhost:9997/vehicles");
      // setListVehicles(resVehicles.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(toDos);

  const data = {
   
  };

  return (
    <AppContext.Provider value={data}>
      {children}
      {/* app  */}
    </AppContext.Provider>
  );
}

export default AppProvider;

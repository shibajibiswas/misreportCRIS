import React, { useState, useEffect } from "react";
import axios from 'axios';

import TableView from "./TableView";

 const Mistable = () => {
  // data state to mis data. Its initial value is an empty array
  const [data, setData] = useState([]);


  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    axios.get('/api/reports').then(json => setData(json.data))
  }, [])
  
  
    
    return (
      <div>
        
        <hr />
        <TableView reportdata={data} />
      </div>
    );
  
  

}

export default Mistable;
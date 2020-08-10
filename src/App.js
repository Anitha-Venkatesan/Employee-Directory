import React  from "react";
import Employee from "./components/employee";
import "./App.css";
import data from "./data/employee.json";

export default function App() {

  return (
    <div>
      <p>Employee Directory Using React</p>
      <Employee data={data}/>
    </div>
  )

}

  

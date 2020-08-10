import React  from "react";
import Employee from "./components/employee";
import "./App.css";
import data from "./data/employee.json";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    data
  }

  sortByName= () => {
    this.setState({
      data: data.sort( (a , b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    });
  }
  
render() {
  return (
    <div>
      <Navbar />
      <Search/>
      <Employee data={this.state.data}
      sortByName= {this.sortByName}
      />
    </div>
  );
  }
}
export default App;





  

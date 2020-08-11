import React  from "react";
import Employee from "./components/employee";
import "./App.css";
import data from "./data/employee.json";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    data,
    filteredData: null
  }
  sortByName= () => {

  
    this.setState({
      data: (this.state.filteredData || this.state.data).sort( (a , b) => {
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

  onFilter = (searchTerm) => {
    if (searchTerm) {
      this.setState({
        filteredData: this.state.data.filter((employee) => {
          return employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        })
      });
    } else {
      this.setState({
        filteredData: null
      });
    }
  };

render() {
  return (
    <div>
      <Navbar />
      <Search onSubmit={this.onFilter}/>
      <Employee data={this.state.filteredData || this.state.data}
      sortByName= {this.sortByName}
      />
    </div>
  );
  }
}
export default App;





  

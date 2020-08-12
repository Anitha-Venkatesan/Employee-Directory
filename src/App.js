import React from "react";
import Employee from "./components/employee";
import "./App.css";
import data from "./data/employee.json";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    data,
    filteredData: null,
    sortOrder: null
  }
  sortByName = () => {
    const currentSort = this.state.sortOrder === 'asc' ? 'desc' : 'asc';

    this.setState({
      data: (this.state.filteredData || this.state.data).sort((a, b) => {
        let order;
        
        if (a.name < b.name) {
          order = -1;
        } else if (a.name > b.name) {
          order = 1;
        } else {
          order = 0;
        }

        if (currentSort === 'desc') {
          order = -order;
        }

        return order;
      }),
      sortOrder: currentSort
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
      <Search onSubmit={this.onFilter} />
      <Employee 
        sortOrder={this.state.sortOrder}
        data={this.state.filteredData || this.state.data}
        sortByName={this.sortByName}
      />
    </div>
  );
}
}

export default App;







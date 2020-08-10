import React from "react";


class Search extends React.Component {
    // Setting the component's initial state
    state = {
      searchTerm: "",
    
    };
    handleInputChange = event => {
        // Getting the value and searchTerm of the input which triggered the change
        const { searchTerm, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [searchTerm]: value
        });
      };
    
      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
      };
      render() {
        // Notice how each input has a `value`, `searchTerm`, and `onChange` prop
        return (
          <div>
            <form className="form">
                <input
                    value={this.state.value}
                    searchTerm="seachTerm"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder=""
                />
                <button onClick={this.handleFormSubmit}>Search</button>
            </form>

    
         </div>
        );
      }
    }
    
    export default Search;
    
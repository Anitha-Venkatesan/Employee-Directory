import React from "react";


class Search extends React.Component {
    // Setting the component's initial state
    state = {
      searchTerm: "",
    };

    handleInputChange = event => {
        // Updating the input's state 
        this.setState({searchTerm:event.target.value}); 
      
      };
    
      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
      };

      render() {
        // Notice how each input has a `value`, `searchTerm`, and `onChange` prop
        return (
          <div>
            <form className="form" onSubmit={this.handleFormSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    placeholder="Enter the name of the employee"
                />
                <button type='submit'>Search</button>
            </form>

    
         </div>
        );
      }
    }
    
    export default Search;
    
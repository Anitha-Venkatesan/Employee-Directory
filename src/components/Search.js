import React from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


class Search extends React.Component {
  // Setting the component's initial state
  state = {
    searchTerm: "",
  };

  handleInputChange = event => {
    // Updating the input's state 
    this.setState({ searchTerm: event.target.value });

  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    // Notice how each input has a `value`, `searchTerm`, and `onChange` prop
    return (
      <Form onSubmit={this.handleFormSubmit}>
        
        <Container className = "mt-5">
          <Row>
            <Col></Col>
            <Col xs={6}>
              <Form.Control type="text"
                placeholder="Enter the name of the employee"
                value={this.state.value}
                onChange={this.handleInputChange} />
            </Col>
            <Col xs>
              <Button type='submit'>Search</Button>
            </Col>
          </Row>

        </Container>
      
      </Form>


    );
  }
}

export default Search;

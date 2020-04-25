import React, { Component } from 'react';
// bootstrap 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// npm 
import axios from 'axios';
// styles 
import '../../../assets/styles/createReviewForm.css';


class CreateReviewForm extends Component {
    constructor(props) {
        super(props);
           
        // initialize state(s) of comp
        this.state = {
            newReview: {
                title: '',
                description: '',
                name: '',
                stars: 0
            }
        }
         
        //binding
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
      }
       
    // storing inputted data into state
      handleInput(key, e) {
        // duplicating state obj and updating 
        var state = Object.assign({}, this.state.newReview); 
        state[key] = e.target.value;
        // setting state to new updated obj
        this.setState({newReview: state });
      }

    //  submit method 
      handleSubmit(e) {
        // prevent default behaviour  
        e.preventDefault();
        // calling below addReview function
        this.addReview(this.state.newReview);
        alert('Added Review!');
        this.resetForm();
      }

      addReview(review) {
        // saving input values as variables
        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const stars = document.getElementById('stars').value;

        // post request to endpoint
        axios({
            method: "post", 
            url:"http://localhost:8000/api/reviews", 
            data: {
                name: name,   
                title: title,  
                description: description,
                stars: stars
            }
        }).then(response => {
            return response.json();
        })
        .then(data => {
            //update the state of products and currentProduct
            this.setState((prevState)=> ({
                newReview: prevState.newReview.concat(data),
                currentProduct : data
            }))
        });
      }

      resetForm() {
        document.getElementById('createReviewForm').reset();
      }

     
      render() {
        return(
            <Form onSubmit={this.handleSubmit} className="createReview-Form" id="createReviewForm">
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" id="name" 
                        placeholder="Full name" onChange={ (e) => this.handleInput('name', e) } required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Title of review:</Form.Label>
                    <Form.Control type="text" id="title" 
                        placeholder="e.g. 'Good movie!'" onChange={ (e) => this.handleInput('title', e) } required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control as="textarea" rows="3" id="description" 
                        placeholder="Description of your review" onChange={ (e) => this.handleInput('description', e) } />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating:</Form.Label>
                    <Form.Control as="select" id="stars" onChange={ (e) => this.handleInput('stars', e) } required >
                        <option name="1">1</option>
                        <option name="2">2</option>
                        <option name="3">3</option>
                        <option name="4">4</option>
                        <option name="5">5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" className="submitBtn">Add review</Button>
                </Form.Group>
            </Form>
        );
    }
}

export default CreateReviewForm;
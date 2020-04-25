import React, { Component } from 'react';
// components
import ReviewCard from './ReviewCard';
import CurrentReview from './CurrentReview';
//animate
import {Animated} from "react-animated-css";
// npm 
import axios from 'axios';
//bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// styles 
import '../../../assets/styles/listReviews.css';

class ListReviews extends Component {
    constructor() {
        super();
    
        // initialize state(s) of comp
        this.state = {
            reviews: [],
            selectedReview: 0
        }
      }
    
      /* Lifecycle method(s) */
    
        // componentDidMount() lifecycle method to call api upon component rendering
    
        componentDidMount() {
            // get request to endpoint
            axios({
                method: "get", 
                url:"http://localhost:8000/api/reviews"
            }).then(response => {
                // accessing data property from response object (array of reviews)
                return response.data;
            }).then(reviews => {
                // fetched reviews are stored in component state
                this.setState({ reviews });
            });
        }
     
      /* Component method(s) */

        // making method to render review on click
        renderReview() {
            if (this.state.selectedReview) {
                return (
                    <Review review={this.state.selectedReview}/>
                );
            }
        }

        setSelectedReview(review) {
            // setting state to selected element 
            (review) ? this.setState({selectedReview:review}) : 0;
        }
    
        renderReviews() {
            return this.state.reviews.map((review, i) => {
                return (
                    // using calculation of map index 
                    // to make cards come in on a slight delay of the last one
                        <div key={review.id} 
                            className='review-list' 
                            onClick={() => this.setSelectedReview(review)}>
                                <Animated animationInDelay={i*500} animationIn="fadeInLeft">
                                    <ReviewCard key={review.id} review={review} />
                                </Animated>
                        </div>    
                );
            })
        }   
        
        renderCurrentReview() {
            // making sure unpopulated card doesn't come up 
            if (this.state.selectedReview) {
                return (
                    <Animated animationInDelay={400} animationIn="fadeIn">
                        <CurrentReview review={this.state.selectedReview} className="currentReview"/>
                    </Animated>
                )
            }
        }

        /* Render */
        
        render() {
                return (
                    <Row>
                        <Col>
                            { this.renderReviews() }
                        </Col>
                        <Col>
                            <div class="sticky-top">
                                {this.renderCurrentReview()}
                            </div>
                        </Col>
                    </Row>
                )
            }
        }

export default ListReviews;
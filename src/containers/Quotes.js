import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    // console.log(this.props)
    // oh so weird, so importing them only makes them 
    // available to connect, which merges them into props
    // so we still need variable assignment to make these available?
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO: Render Quotes With QuoteCard component and 
                pass down callback props for removing, upvoting 
                and downvoting quotes
               */}{ quotes.map( quote => 
               <QuoteCard
                key={quotes.id}
                quote={quote}
                removeQuote={removeQuote}
                upvoteQuote={upvoteQuote}
                downvoteQuote={downvoteQuote}
               />)}


            </div>
          </div>
        </div>
      </div>
    );
  }
}

// FIRST TRY :) 
// return {state: [...state]}
const mapStateToProps = (state) => {
  return ({
    quotes: state.quotes
  })
}
//add arguments to connect as needed

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote})(Quotes);

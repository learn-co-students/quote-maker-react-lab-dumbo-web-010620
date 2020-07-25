import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  //set up a controlled form with internal state
  state = {
    content: '',
    author: ''
  }

  handleOnChange = event => {
    // Handle Updating Component State
    // SOLUTION CODE
    // I do believe this is the same as the boilerplate
    const { value, name } = event.target
    this.setState({
      [name]: value
    })

    // BOILERPLATE CODE FROM PREVIOUS LAB
    // this.setState({
    //   [event.target.name]: event.target.value
    // });

    // MY RUSTY TRY
    // there should be a name in here somewhere
    // this.state.value = event.target.value
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    
    // am I missing a dispatch? bc newQuote var isn't getting used
    // event.preventDefault() √
    // let newQuote = addQuote(this.state) X
    // 2 steps: create newQuote object adding uuid
    // then this.props.addQuote(newQuote)
    // this.setState({content: '', author: ''})
    // QQ why do we have to get this through props
    // since we're importing addQuote, can't we just
    // addQuote(newQuote) ?

    event.preventDefault();
    const newQuote = {...this.state, id: uuid()};
    this.props.addQuote(newQuote);
    this.setState({
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
              {/* more elusive rote memorization shit that I'm blanking on 
              very simple but this is why I should learn CSS/HTML separately from just
              fucking React, so annoying that we don't do that earlier  
              the submit callback and event listener just go in the fucking form tag
              I'm looking at all the classnames when I should be looking at the fucking tag names
              jesus there's so much convention in this
              */}
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        // 
                        name='content'
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        //
                        name='author'
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
// QQ copied from solution, forgot about this.
export default connect(null, {addQuote})(QuoteForm);

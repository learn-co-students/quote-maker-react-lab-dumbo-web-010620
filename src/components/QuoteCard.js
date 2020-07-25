import React from 'react';

const QuoteCard = ( { quote, removeQuote, upvoteQuote, downvoteQuote}) => {
// I just wrote props here before as single argument 
// and then called on its properties
  console.log(upvoteQuote)

  return (
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* <p>{Render Quote Content}</p> */}
          {/* <p>{props.quote.content}</p> */}
          <p>{quote.content}</p>


          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
          {/* <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer> */}
          <footer>- author <cite title="Source Title">{quote.author}</cite></footer>

        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => upvoteQuote(quote.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => downvoteQuote(quote.id)}

          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
        {/* <div>Votes: {props.quote.votes}</div> */}
        <div>Votes: {quote.votes} </div>
      </div>
    </div>
  </div>)
  }

export default QuoteCard;

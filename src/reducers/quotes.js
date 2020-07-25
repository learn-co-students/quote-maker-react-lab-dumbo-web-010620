export default (state = [], action) => {
  let index;
  let quote; 

  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state, action.quote
      ]

    case 'REMOVE_QUOTE':
      let newState = state.filter(quote => quote.id !== action.quoteId)
      return [...newState]
      
    case 'UPVOTE_QUOTE':
      // first try
      // without a return statement this works? 
      // JS WHATS WRONG WITCHU?
      // let upvotedQuote = state.find( quote => quote.id === action.quoteId)
      // upvotedQuote.votes++
      // console.log('hello', upvotedQuote, 'goodbye')
      // return [...state, upvotedQuote]

      // second try, throwing mad errors
      // let upvotedQuote = state.find( quote => quote.id === action.quoteId)
      // upvotedQuote.votes++
      // let newState = [...state, upvotedQuote]
      // console.log('hello', upvotedQuote, 'goodbye')
      // return [newState]

      // SOLUTION CODE
      index = state.findIndex( quote => quote.id === action.quoteId)
      quote = state[index]

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1}),
        ...state.slice(index + 1)
      ]


    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state; 

    default:
      return state
  } // end switch
} // end ƒ

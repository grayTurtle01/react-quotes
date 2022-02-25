import React from 'react'

import './QuoteCard.css'

import {quotes, get_random_quote, get_random_color} from '../helpers.js'

class QuoteCard extends React.Component{

    constructor(props){
      super(props)

      this.state = {
         quote : "",
         author: "",
         color: '' 
      }
    }
    
    set_random_state(){

      let random_quote = get_random_quote()
      let color = get_random_color()
      
      while( random_quote.quote == this.state.quote){
        random_quote = get_random_quote()
      }

      document.querySelector('body').style.background = color
      document.querySelector('#tweet-quote').style.background = color
      document.querySelector('#tumblr-quote').style.background = color
      //document.querySelector('#new-quote').style.background = color

      this.setState({
        quote: random_quote.quote,
        author: random_quote.author,
        color: color
      })

     
    }

    componentDidMount(){
      this.set_random_state()
    }

    handleClick = () => {
      this.set_random_state()
    }

    
    render(){
      return(
        <div id="quote-box" className="card p-3">

            <p id="text" className="h3 mb-2">
              <i className="fa fa-quote-left"></i>
              <span className="m-3">{this.state.quote}</span>
            </p>

            <span id="author" className="text-end mb-2 h6">-{this.state.author}</span>

            <div className="d-flex justify-content-between">
              <div>
                <a href="http://twitter.com/intent/tweet" id="tweet-quote" target="_blank" className="btn btn-sm btn-info">
                  <i className="fab fa-twitter" ></i>  
                </a>
                <a href="http://" id="tumblr-quote" target="_blank" className="btn btn-sm btn-info ">
                    <i className="fab fa-tumblr" ></i>  
                </a>
            </div>
              <button id="new-quote" onClick={this.handleClick} className="btn btn-sm btn-primary">New Quote</button>
            </div>
        </div>
        )
    }
}

export default QuoteCard




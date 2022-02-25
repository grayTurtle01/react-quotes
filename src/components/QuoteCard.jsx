import { useState } from "react"
import { get_random_quote, get_random_color } from "../helpers"

import './QuoteCard.css'


function QuoteCard(){

    const [quote, setQuote] = useState(get_random_quote())
    const [color, setColor] = useState(get_random_color())

    const handleClick = ()=>{
        setQuote( get_random_quote() )
        setColor( get_random_color() )

    }

    document.querySelector('body').style.background = color

    return(
        <div id="quote-box" className="card p-3">

            <p id="text" className="h3 mb-2">
            <i className="fa fa-quote-left"></i>
            <span className="m-3">{quote.quote}</span>
            </p>

            <span id="author" className="text-end mb-2 h6">-{quote.author}</span>

            <div className="d-flex justify-content-between">

            <div>
                <a href="http://twitter.com/intent/tweet" target="_blank" 
                   id="tweet-quote"  className="btn btn-sm btn-info"
                   style={ {background: color } }
                   >
                    <i className="fab fa-twitter" ></i>  
                </a>

                <a href="http://"  target="_blank"
                   id="tumblr-quote"  className="btn btn-sm btn-info "
                   style={ {background: color } }    
                   >
                    <i className="fab fa-tumblr" ></i>  
                </a>


            </div>
            <button id="new-quote" onClick={handleClick} className="btn btn-sm btn-primary">New Quote</button>
            </div>
    </div>
    )
}

export default QuoteCard
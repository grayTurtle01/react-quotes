import { useState } from "react"
import { get_random_quote, get_random_color } from "../helpers"
import Quote from "./Quote"

import './QuoteCard.css'
import SocialButton from "./SocialButton"



function QuoteCard(){

    const [quote, setQuote] = useState(get_random_quote())
    const [color, setColor] = useState(get_random_color())

    const handleClick = ()=>{
        setQuote( get_random_quote() )
        setColor( get_random_color() )

    }

    document.querySelector('body').style.background = color

    const twitter_url = `http://twitter.com/intent/tweet?hashtags=quotes&text=${quote.text}. -${quote.author}`
    const tumblr_url = `http://tublr.com/widgets/share/tool?posttype=quotes&tags=quotes&caption=${quote.author}&content=${quote.text}`

    return(
        
        <div id="quote-box" className="card p-3">

            <Quote text={quote.text} author={quote.author} />

            <div className="d-flex justify-content-between mt-3">

                <div>



                    <SocialButton 
                                  url={twitter_url}
                                  id="twett-quote" 
                                  color={color} 
                                  icon="fab fa-twitter"
                                  title="tweet this quote" 
                                  />


                    <SocialButton url={tumblr_url} 
                                  id="tumblr-quote" 
                                  color={color} 
                                  icon="fab fa-tumblr" 
                                  title="post this quote on tumblr!"
                                  />

                </div>

                <button id="new-quote" 
                        onClick={handleClick} 
                        className="btn btn-sm btn-primary">
                    New Quote
                </button>

            </div>
    </div>
    )
}

export default QuoteCard
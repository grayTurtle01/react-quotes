const Quote = (props)=> {

    return(
        <>
            <p id="text" className="h3 mb-2">
                <i className="fa fa-quote-left"></i>
                <span className="m-3">{props.text}</span>
            </p>

            <span id="author" className="text-end mb-2 h6">-{props.author}</span>
        </>
    )
}

export default Quote
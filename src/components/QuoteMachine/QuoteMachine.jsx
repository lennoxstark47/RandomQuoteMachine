import React from 'react';
import Button from "../button/button"

const QuoteMachine = (props) => {
    return (
        <>
        {props.selectedQuote ? `"${props.selectedQuote.quote}" -- ${props.selectedQuote.author}` : '' }
        <Button className="button" 
        displayName="Next Quote" 
        id="new-quote" 
        handleClick={props.generateRandomQuoteIndex}  
        />      
        </>
    )
}

export default QuoteMachine;
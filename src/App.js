import React, { Component } from 'react';
import {random} from 'lodash';
import Button from './components/button/button';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quotes : [],
      selectedQuoteIndex : ''
    }
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({quotes}, this.generateRandomQuoteIndex))
  }

  generateRandomQuoteIndex = () => {
    this.setState({selectedQuoteIndex: this.selectQuoteIndex()})
  }

  get selectedQuote(){
    if (!this.state.quotes.length) {
      return null;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectQuoteIndex = () => {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1)
  }


  render () {
    
    return (
      <div id="quote-box">
        { this.selectedQuote ? `"${this.selectedQuote.quote}" -- ${this.selectedQuote.author}` : '' }
        <Button className="button" 
        displayName="Next Quote" 
        id="new-quote" 
        handleClick={this.generateRandomQuoteIndex}  
        />
      </div>
    );
  }

}

export default App;

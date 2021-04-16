import React, { Component } from "react";
import { random } from "lodash";
import QuoteMachine from "./components/QuoteMachine/QuoteMachine";
import {
  Grid,
  withStyles,
} from "@material-ui/core";

import "typeface-roboto";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
  },
  creator: {
    display: "flex",
    alignItems: "center",
    color: "red",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) =>
        this.setState(
          { quotes },
          this.generateRandomQuoteIndex
        )
      );
  }

  generateRandomQuoteIndex = () => {
    this.setState({
      selectedQuoteIndex: this.generateNewIndex(),
    });
  };

  get selectedQuote() {
    if (!this.state.quotes.length) {
      return null;
    }
    return this.state.quotes[
      this.state.selectedQuoteIndex
    ];
  }

  generateNewIndex = () => {
    if (!this.state.quotes.length) {
      return;
    }
    return random(
      0,
      this.state.quotes.length - 1
    );
  };

  render() {
    return (
      <Grid
        id='quote-box'
        container
        justify='center'
        className={this.props.classes.container}>
        <Grid item lg={4} xs={8} md={4}>
          {this.selectedQuote ? (
            <QuoteMachine
              selectedQuote={this.selectedQuote}
              generateRandomQuoteIndex={
                this.generateRandomQuoteIndex
              }
            />
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);

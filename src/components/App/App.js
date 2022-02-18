import React from 'react';
import './App.css'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: '',
        }
        this.handleQuotes = this.handleQuotes.bind(this);
    }
    componentDidMount(){
        this.handleQuotes()
    }
    handleQuotes(){
        fetchApiQuotes().then(value => {
            if(value === undefined){
                this.setState({
                    quote: "There's no quote",
                    author: "There's no author"
                })
            } else {
                this.setState({
                    quote: value[0],
                    author: value[1]
                })
            }
        });

    }
    render(){
        return(
            <div id="quote-box">
                <h2 id="text">{this.state.quote}</h2>
                <p id="author" >{this.state.author}</p>
                <div>
                    <button>
                        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
                        </a>
                        <i className="bi bi-twitter"></i>
                    </button>
                    <button id="new-quote" type="button" className="btn btn-primary" onClick={this.handleQuotes}>Get new quote</button>
                </div>
            </div>
        )
    }
}

async function fetchApiQuotes(){
    let quote = ""
    let author = ""
    await fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(response => response.json())
        .then(data => {
            let promiseLen = data['quotes'].length
            let quoteNumber = randomNumbers(promiseLen)
            quote = data['quotes'][quoteNumber]['quote'];
            author = data['quotes'][quoteNumber]['author'];
        })
        .catch(error => {
            console.error(error);
        });
    return [quote, author]
}
function randomNumbers(maxNumber){
    return Math.floor(Math.random()*maxNumber)
}
export default App;
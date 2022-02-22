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
        this.changeBkgColor = this.changeBkgColor.bind(this);
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
    changeBkgColor(){
        let color = chooseColor();
        return color
    }
    render(){
        let color = this.changeBkgColor()
        let url = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
      encodeURIComponent('"' + this.state.quote + '" ' + this.state.author)
        return(
            <div id="bkg-color" style={{backgroundColor: color}}>
                <div id="quote-box">
                    <div>
                        <i id="float-element" className="bi bi-quote" style={{color: color}}></i>
                        <h2 id="text" onChange={this.changeBkgColor} style={{color: color}}>{this.state.quote}</h2>
                    </div>
                    <h4 id="author" style={{color: color}} >{this.state.author}</h4>
                    <div id="button-sec">
                        <button id="tweet-quote" type="button" className="btn btn-primary" style={{backgroundColor: color}}>
                            <a href={url} target="_blank">
                                <i id="tweet-icon" className="bi bi-twitter"></i>
                            </a>
                        </button>
                        <button id="new-quote" type="button" className="btn btn-primary" onClick={this.handleQuotes} style={{backgroundColor: color}}>
                            Get new quote
                        </button>
                    </div>
                </div>
                <p style={{color:'white'}}>by Gustavo Lira</p>
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
function chooseColor (){
    const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ];
    let numberOfColor = colors.length
    let color = colors[randomNumbers(numberOfColor)]
    return color
}
export default App;
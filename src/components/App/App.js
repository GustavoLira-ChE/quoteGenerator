import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote = '',
            authort = '',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){

    }
    render(){
        return(
            <div>
                <div id="quote-box">
                    <h2 id="text" ></h2>
                    <p id="author"></p>
                    <div>
                        <a id="tweet-quote"></a>
                        <button id="new-quote"></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
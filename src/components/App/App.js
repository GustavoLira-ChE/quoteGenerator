import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div id="quote-box">
                    <h2 id="quote-box">Hello World!</h2>
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
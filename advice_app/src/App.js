import React from "react";
import axios from "axios";

import "./App.css"

class App extends React.Component {
    state = {
        advice: ''
    }

    // We have to call the function advice for the first time when the page loads
    componentDidMount() {
        this.fetchAdvice()
    }

    //This is a method of the class, we don't need to add const
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                // Access the advice from the API = data.slip.advice
                const { advice } = response.data.slip
                // If the name of the state and the variable have the same name we can ommit advice: advice
                this.setState({ advice })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { advice } = this.state
        return(
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>GIVE ME AN ADVICE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App
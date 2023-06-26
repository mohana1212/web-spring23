import { Component } from "react";
import "./App.css";
import ClockA from "./ClockA";
import Palindrome from "./Palindrome";
import TestEffectCounter from "./TestEffectCounter";

class App extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        showClockA: false,
                };
                this.handleToggleClockA = this.handleToggleClockA.bind(this);
        }
        handleToggleClockA(event) {
                this.setState({
                        showClockA: !this.state.showClockA,
                });
        }
        handleClick(event) {
                this.setState({
                        showGreeting: "hello World!",
                });
        }
        render() {
                console.log("App rendering");
                console.log("state", this.state.showClockA);
                console.log("state", this.state.showGreeting);
                return (
                        <div>
                                {/* {this.state.showClockA ? <ClockA /> : null}
                                <button onClick={this.handleToggleClockA}>
                                        Toggle ClockA
                                        
                                </button> */}
                                <div>
                                        {/* <Palindrome /> */}
                                        <TestEffectCounter />
                                </div>
                                <div>
                                        <button onClick={this.handleClick}>
                                                Update Greeting
                                        </button>
                                </div>
                        </div>
                );
        }
}

export default App;

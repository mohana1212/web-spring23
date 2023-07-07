import { Component } from "react";
import "./App.css";
import ClockA from "./ClockA";
import Fetch from "./Fetch";
import FetchA from "./FetchA";
import FetchUser from "./FetchUser";
import FetchUserOne from "./FetchUserOne";
import Loginform from "./LoginForm";
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
                                        {/* <TestEffectCounter /> */}
                                        {/* <Fetch /> */}
                                        {/* <FetchA /> */}
                                        {/* <FetchUserOne /> */}
                                        <Loginform />
                                        {/* <FetchUser /> */}
                                        {/* <FetchUserOne /> */}
                                        {/* <dice /> */}
                                </div>
                        </div>
                );
        }
}

export default App;

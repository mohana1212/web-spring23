import { Component } from "react";

class Homework1 extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        greeting: "",
                };
        }

        handleClick = () => {
                this.setState({ greeting: "Hello World!" });
        };

        render() {
                return (
                        <div>
                                <h1>
                                        {this.state.greeting === ""
                                                ? "Click the button below"
                                                : this.state.greeting}
                                </h1>
                                <button onClick={this.handleClick}>
                                        Update Greeting
                                </button>
                        </div>
                );
        }
}

export default Homework1;

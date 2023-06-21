import React from "react";
class ClockA extends React.Component {
        constructor(proops) {
                this.state = {
                        date: new Date(),
                        counter: 0,
                };
        }
        componentDidMount() {
                console.log("componenetDidMount");
                this.timerID = setInterval(() => {
                        this.tick();
                }, 1000);
        }
        componentWillUnmount() {
                console.log("about to Unmount");
                clearInterval(this.timerID);
        }
        tick() {
                const newState = {
                        date: new Date(),
                };
                this.setState(newState);
        }
        incrementCounter() {}
        render() {
                console.log("ClockA rendering");
                console.log("clock state", this.state);
                return (
                        <div>
                                <h1> Hello World!</h1>
                                <formatedDate date={this.state.date} />
                                <div>Counter:{this.state.counter}</div>
                                <button
                                        onClick={this.incrementCounter()}
                                ></button>
                        </div>
                );
        }
}
export default ClockA;

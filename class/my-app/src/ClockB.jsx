import React, { useCallback, useEffect, useState } from "react";
import { FormattedDate } from "./ClockA";

const clockB = () => {
        const [date, setDate] = useState(new Date());
        const [counter, setCounter] = useState(0);

        const tick = useCallback(() => {
                setDate(new Date());
        }, []);

        useEffect(() => {
                // const tick = () => {
                //     setDate(new Date())  ///// one way of doing
                // };

                console.log("component mounted & setting up timer");
                const timerID = setInterval(() => {
                        tick();
                }, 1000);

                return () => {
                        //performs any cleaning
                        clearInterval(timerID);
                };
        }, [tick]);

        console.log("rendering Clock B");

        return (
                <div>
                        ClockB
                        <h1> Hello World!</h1>
                        <FormattedDate date={date} />
                        {/* <formatedDate date={this.state.date} />
                                <div>Counter:{this.state.counter}</div>
                                <button
                                        onClick={this.incrementCounter}
                                ></button> */}
                </div>
        );
};

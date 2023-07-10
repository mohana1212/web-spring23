import React, { useMemo, useState } from "react";

/**
 * A function that generates and returns a number between 1 and 6.
 */
function generateDiceNumber() {
        return Math.floor(Math.random() * 6) + 1;
}

/**
 * TODO: Explain in detail (step-by-step) what happens when the user clicks on the Reroll button.
 * Write it below:
 * Step 1: User clicks on reroll
 * Step 2: The onClick event handler attached to the button, handleClick, is triggered.
 * Step 3: Inside the handleClick function, the setCounter function is called. It takes a callback function as an
 *  argument, which receives the current value of counter as its parameter. This callback function increments the
 *  current value of counter by 1 and returns the updated value. 
 * Step4: The setCounter function updates the counter state with the new value returned by the callback function.
 * as a result of the sate update of the counter state with a new value return by the callbackfunctiuon.
 * Step5: As a result of the state update, React re-renders the component.
 * Step6: After the component re-renders, and the updated counter value is displayed in the 
 * <h2> element: {You have rolled ${counter} times}.The ${counter} expression is evaluated to the current value of counter.
 * Step7: Now the useMemo hook is called during the re-render to calculate the memoized value of diceRolls.
 * the dependency array [handleClick] is provided to useMemo, the memoized value of diceRolls will be recalculated whenever the 
 * handleClick function reference changes. In this case, because handleClick is defined inside the component, it gets recreated on every render. 
 * Here when ever the button got clicked "Reroll". The memoized value of diceRolls will be recalculated.
 
* Inside the useMemo callback function, a new array of length 6 is created using new Array(6). The array is filled with null values using the fill(null) method.

* The map method is called on the array, and for each element, the generateDiceNumber function is invoked to generate a random dice number between 1 and 6.
 
* The map method transforms each null value to a randomly generated dice number.
 
* The memoized diceRolls value is returned by the useMemo hook and assigned to the diceRolls constant.
 
* The memoized diceRolls value is displayed in the <h2> element: {JSON.stringify(diceRolls)}. The JSON.stringify function is used to convert the array to a string 
  representation for display purposes.

  *The component renders a button labeled "Reroll".
The process described above repeats every time the user clicks on the "Reroll" button, triggering a re-render of the component and recalculating the diceRolls value with updated dice numbers.

 * 
 * ... Add more steps as you need
 *
 *
 * TODO: Explain: What is the difference between useCallback and useMemo
 *
 * useCallback: is used to memoize functions. It returns a memoized version of the provided function.
 * It is particularly useful when passing callbacks to child components to prevent unnecessary re-renders.
 * useCallback takes two arguments: the function to be memoized and an array of dependencies.
 * The memoized function is only recalculated when one of the dependencies in the dependency array changes.
 * If the dependencies remain the same, useCallback returns the same memoized function instance, reducing the 
    need for child components to re-render unnecessarily.
 *
 * TODO: After you're done with the above. Make sure you play around with the component to
 * make sure you understand how useMemo is working with and without the dependency array.
 */
const Dice = () => {
        const [counter, setCounter] = useState(0);
        const age = 10;

        const handleClick = () => {
                setCounter((currCounter) => currCounter + 1);
        };

        // const diceRolls = new Array(6).fill(null).map((el) => generateDiceNumber());

        const diceRolls = useMemo(
                () => new Array(6).fill(null).map((el) => generateDiceNumber()),
                [handleClick]
        );

        return (
                <div>
                        <h1>Dice Roller</h1>

                        <h2>{`You have rolled ${counter} times`}</h2>

                        <h2>{JSON.stringify(diceRolls)}</h2>

                        <button onClick={handleClick}>Reroll</button>
                </div>
        );
};

export default Dice;

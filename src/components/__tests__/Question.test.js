import React from "react";
import { create, act } from "react-test-renderer";
import Question from "../Question";

const pollQuestion = {
    id: "1",
    question: "How do you guys feel about glaucoma?",
    choices: [
        { id: 1, text: "I feel great!" },
        { id: 2, text: "I do not feel good, at all." },
        { id: 3, text: "Confused by this question." },
    ],
};

describe("Question", () => {
    it("handles an input change", async () => {
        let component;
        let selection = 1;
        const selectionHandler = jest.fn(x => selection=x); // mocking a state update
        const clickHandler = jest.fn(); // empty mock function to pass as prop
        act( () => {
            component = create(<Question question={pollQuestion} selection={selection} setSelection={selectionHandler} updateResults={clickHandler} />);
        });
        const instance = component.root;
        const button = instance.findByProps({name: 2}); // find the input where the id is 2
        await act( async() => button.props.onChange()); // execute a change
        expect(selection).toEqual(2) // selection should now be 2 - the id of the element called
    })

    it("handles a submit", () => {
        // does the submit button execute the function passed into updateResults prop?
        let component;
        const selectionHandler = jest.fn();
        const clickHandler = jest.fn();
        act( () => {
            component = create(<Question question={pollQuestion} selection={1} setSelection={selectionHandler} updateResults={clickHandler} />);
        });
        const instance = component.root;
        const button = instance.findByType("button");
        act(() => button.props.onClick());
        expect(clickHandler.mock.calls.length).toBe(1)
    })
})
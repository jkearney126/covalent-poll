import React from "react";
import { create, act } from "react-test-renderer";
import Results from "../Results";

const currentResults = [
    { id: 1, text: "I feel great!", votes: 50 },
    { id: 2, text: "I do not feel good, at all.", votes: 25 },
    { id: 3, text: "Confused by this question.", votes: 25 },
];

describe("Results", () => {
    it("renders progress bars to correct width", () => {
        let component;
        let status = 'answered';
        const setStatus = jest.fn(x => status=x);
        act( () => {
            component = create(<Results results={currentResults} setStatus={setStatus} />);
        });
        const instance = component.root;
        const bar1 = instance.findByProps({id: '1-pb'}) // find the progress bar for result 1
        expect(bar1.props.style.width).toBe('50%') // total votes is 100, so this should be 50% for 50 votes
    })

    it("updates status", async () => {
        let component;
        let status = 'answered';
        const setStatus = jest.fn(x => status=x);
        act( () => {
            component = create(<Results results={currentResults} setStatus={setStatus} />);
        });
        const instance = component.root;
        const button = instance.findByType('a'); // find the anchor tag
        await act( async () => button.props.onClick()); // execute a click
        expect(status).toEqual('not-answered') // status should now be not-answered
    })

})
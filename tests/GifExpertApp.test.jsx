import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Test on <GifExpertApp />', () => {
    test('It should', () => {
        render( <GifExpertApp />);
        screen.debug()
    });
});



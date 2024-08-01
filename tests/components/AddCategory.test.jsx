import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => {
    
    test('It shoul change de value of the textBox', () => {
        render( <AddCategory onNewCategory={() => {}}/>,)
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Saitama'} } );
        expect(input.value).toBe('Saitama'); 
    });

    test('It shoul call onNewCategory if input has a value', () => {
        const inputValue = 'saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: inputValue} } );
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('It shoul no call onNewCategory if input is emty', () => {
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: ''} } );
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});
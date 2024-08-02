import { render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { GifGrid } from '../../src/components/GifGrid';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test on <GifGrid />', () => {
    
    const category = 'One Punch';

    test('It should the loading', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render( <GifGrid category={category} /> );
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();

    });

    test('It should render items from useFetchGifs when load the images', () => {

        const gifs = [
            {
                id:'1',
                title:'Giux',
                url:'https://locahost/giux.jpg',
            },
            {
                id:'2',
                title:'Thoranz',
                url:'https://locahost/thoranz.jpg',
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })
        render( <GifGrid category={category} /> );
        const images = screen.getAllByRole('img');
        const fisrtImage = images[0];
        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
        expect( fisrtImage.alt ).toBe('Giux');
        expect( fisrtImage.src ).toBe('https://locahost/giux.jpg');

    });
});
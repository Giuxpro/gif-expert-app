import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en < GifItem/>', () => {
  const title = 'titulo'
  const url = 'https://one-punch.com/saitama.jpg/'
  test('It should pass the snapshot', () => {
      const { container } = render( <GifItem title={title} url={url}/>)
      expect(container).toMatchSnapshot();
  });

  test('It should show the correct img with the url and alt', () => {
      render( <GifItem title={title} url={url}/>)
      // screen.debug()
      // expect(screen.getByRole('img').src).toBe(url);
      // expect(screen.getByRole('img').alt).toBe(title);
      const { src, alt } = screen.getByRole('img');
      expect( src ).toBe( url );
      expect( alt ).toBe( title );
  });

  test('It should return the title on the component', () => {
    render(<GifItem title={title} url={url}/>)
    expect( screen.getByText( title )).toBeTruthy();
  });
});
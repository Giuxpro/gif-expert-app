import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test on useFetchGifs', () => {

    test('It should return the initial state', () => {
       const { result } = renderHook( () => useFetchGifs('One Punch'));
       const { images, isLoading } = result.current;
       expect(images.length).toBe(0);
       expect(isLoading).toBeTruthy();
    
    });

    test('It should return an array of images and isLoading has to be false', async () => {
       const { result } = renderHook( () => useFetchGifs('One Punch'));
       await waitFor(
        () => expect( result.current.images.length).toBeGreaterThan(0),
       )
       const { images, isLoading } = result.current;
       
       expect(images.length).toBeGreaterThan(0);
       expect(isLoading).toBeFalsy();
    
    });
})
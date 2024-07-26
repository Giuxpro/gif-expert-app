import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs.js';



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

  
  return (
    <>  
        {
            isLoading && ( <h2>Cargando...</h2>)
        }
        <h3>{category}</h3>
        <div className='card-grid'>
            {
                images.map((images) =>(
                    <GifItem key={images.id} {...images} />
                ))
            }
        </div>
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string,
}
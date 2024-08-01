import PropTypes from 'prop-types'
import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onAddInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue('');
  };

 
  return (
    <form onSubmit={onHandleSubmit} aria-label="form">
      <input 
          type="text" 
          placeholder="Buscar gifs"
          value={ inputValue }
          onChange={onAddInputValue}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
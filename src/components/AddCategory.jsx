


const AddCategory = ({categories, setCategories, inputValue, setInputValue}) => {

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if( inputValue.trim().length<= 2 ) return
        if( categories.includes(inputValue) ) return 
        setCategories([inputValue, ...categories]);
        setInputValue('')
        
                      
    }

  return (
    <form onSubmit={onSubmit}>
      <input
        className="search-bar"
        type="search"
        placeholder="Buscar imagenes..."
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
};

export default AddCategory;

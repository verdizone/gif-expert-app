import { useState } from "react"
import AddCategory from "./components/AddCategory"
import Footer from "./components/Footer"
import GifGrid from "./components/GifGrid"


const GifExpertApp = () => {
    const [categories, setCategories] = useState([])
    const [inputValue, setInputValue] = useState('')

  return (
    <div>
        <h1>GifExpertApp</h1>
        
        <AddCategory 
          categories={categories}
          setCategories={setCategories}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
       
        <div className="card">
        {
          categories.map( category => (
            <GifGrid key={category} category={category}/>  
          ))
        }
        </div>
        <div>
          <Footer />
        </div>

    </div>
  )
}

export default GifExpertApp
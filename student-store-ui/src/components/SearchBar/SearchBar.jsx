import * as React from "react"
import "./SearchBar.css"

export default function SearchBar(props) {
  
    // const { handleOnSearchChange } = props

    return (
        <div className="search-container">
            <form className="search-bar">
                <input className="search-input" placeholder="search..." onChange={props.handleOnSearchChange} />
            </form>
            <SearchCategories handleCategory={props.handleCategory} />
        </div>
    )
}

export function SearchCategories(props) {

    return (
        <div className="category-buttons">
            <button className="category" onClick={() => props.handleCategory("")}>All Items</button>
            <button className="category" onClick={() => props.handleCategory("clothing")}>Clothing</button>
            <button className="category" onClick={() => props.handleCategory("food")}>Food</button>
            <button className="category" onClick={() => props.handleCategory("accessories")}>Accessories</button>
            <button className="category" onClick={() => props.handleCategory("tech")}>Tech</button>
        </div>
        
    )

}

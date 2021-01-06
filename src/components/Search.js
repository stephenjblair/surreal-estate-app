import React from 'react';
import '../styles/Search.css'

const Search = () => {
    return (
        <div className="form-wrapper">
            <h2>Search Properties</h2>
            <form>
                    <label className="search-label" for="search"><i class="fas fa-search-location"></i></label><br /> 
                    <input className="search-input" name="search" id="search" type="text"  /> <br />  
                <label for="minPrice">Minimum Price</label>
                <select className="min-dropdown" id="minPrice" name="minPrice">
                    <option value="10000">£10,000</option>
                    <option value="20000">£20,000</option>
                    <option value="30000">£30,000</option>
                    <option value="40000">£40,000</option>
                    <option value="50000">£50,000</option>
                    <option value="60000">£60,000</option>
                    <option value="70000">£70,000</option>
                    <option value="80000">£80,000</option>
                    <option value="90000">£90,000</option>
                    <option value="100000">£100,000</option>
                    <option value="1100000">£110,000</option> 
                </select>
                <label for="maxPrice">Maximum Price</label>
                <select className="max-dropdown" id="maxPrice" name="maxPrice">
                    <option value="20000">£20,000</option>
                    <option value="30000">£30,000</option>
                    <option value="40000">£40,000</option>
                    <option value="50000">£50,000</option>
                    <option value="60000">£60,000</option>
                    <option value="70000">£70,000</option>
                    <option value="80000">£80,000</option>
                    <option value="90000">£90,000</option>
                    <option value="100000">£100,000</option>
                    <option value="1100000">£110,000</option> 
                </select>
                <label for="maxPrice">Maximum Price</label>
                <select className="max-dropdown" id="maxPrice" name="maxPrice">
                    <option value="20000">£20,000</option>
                    <option value="30000">£30,000</option>
                    <option value="40000">£40,000</option>
                    <option value="50000">£50,000</option>
                    <option value="60000">£60,000</option>
                    <option value="70000">£70,000</option>
                    <option value="80000">£80,000</option>
                    <option value="90000">£90,000</option>
                    <option value="100000">£100,000</option>
                    <option value="1100000">£110,000</option> 
                </select>
                <label for="maxPrice">Maximum Price</label>
                <select className="max-dropdown" id="maxPrice" name="maxPrice">
                    <option value="20000">£20,000</option>
                    <option value="30000">£30,000</option>
                    <option value="40000">£40,000</option>
                    <option value="50000">£50,000</option>
                    <option value="60000">£60,000</option>
                    <option value="70000">£70,000</option>
                    <option value="80000">£80,000</option>
                    <option value="90000">£90,000</option>
                    <option value="100000">£100,000</option>
                    <option value="1100000">£110,000</option> 
                </select>
                <button className="form-btn" type="submit" value="Submit">Search</button>
            </form> 
        </div>
    )
}

export default Search;
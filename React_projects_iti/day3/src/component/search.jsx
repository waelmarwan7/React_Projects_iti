import React, { useState } from 'react';

const Search = ({searchmovie}) => {
    let [state,setState] = useState(null)

    function handlesearch(e){

        setState(e.target.value)
        console.log(state)

    }

    function handlesubmit(e){
        e.preventDefault();
        searchmovie(state);
    }

    return (
        <div>
            <form onSubmit={handlesubmit} className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" onChange={handlesearch} aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;

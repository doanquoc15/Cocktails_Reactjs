import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();

    const searchValue = useRef('');
    useEffect(() => {
        searchValue.current.focus(); // focus vao input
    }, []);

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value); // get value hien tai cua the input
    }

    //handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <section className="section search">
            <form action="" className='search-form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Search your favorite cocktail</label>
                    <input type="search" name="name" id="name" ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm'
const Home = () => {
    return (
        <main>
            <SearchForm />
            <CocktailList />    
        </main>
    );
};

export default Home;
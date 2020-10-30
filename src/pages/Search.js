import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {useStateValue } from "./StateProvider";
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");

  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  
  const search = e => {
    e.preventDefault();

    console.log("you clicked the search button >> ", input)
    //do something with input... come back and fix

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
    history.push('/search')
  };
  
  return (
    <form className="search">
      
      <div className="search__input">
        <SearchIcon  className="search__inputicon"/>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit"
          onClick={search} variant="outlined">Google Search</Button>
          <Button variant="outlined">Feeling Lucky</Button>
        </div>
       ): (
          <div className="search__buttons">
            <Button className="search__buttonshiden" type="submit"
            onClick={search} variant="outlined">Google Search</Button>
            <Button className="search__buttonshiden" 
            variant="outlined">Feeling Lucky</Button>
          </div>
        )} 

    </form>
  );
}

export default Search;
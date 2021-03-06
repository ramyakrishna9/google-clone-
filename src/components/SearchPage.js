import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../pages/StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import { Link } from  "react-router-dom";
import Search from "../pages/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    //const data = Response;

 
  console.log(data)
  return (
    <div className="searchpage">
      <div className="searchpage__header">
            <Link to ="/">
            <img className="searchpage__logo" 
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt=""
            />
            </Link>
            <div className="searchpage__headerbody">
                <Search hideButtons />
                <div className="searchpage__options">
                    <div className="searchpage__optionsleft">
                        <div className="searchpage__option">
                            <SearchIcon />
                            <Link to="/all">All</Link>
                        </div>
                        <div className="searchpage__option">
                            <DescriptionIcon />
                            <Link to="/news">News</Link>
                        </div>
                        <div className="searchpage__option">
                            <ImageIcon />
                            <Link to="/images">Images</Link>
                        </div>
                        <div className="searchpage__option">
                            <LocalOfferIcon />
                            <Link to="/shopping">Shopping</Link>
                        </div>
                         <div className="searchpage__option">
                            <RoomIcon />
                            <Link to="/maps">Maps</Link>
                        </div>
                        <div className="searchpage__option">
                            <MoreVertIcon />
                            <Link to="/more">More</Link>
                        </div>
                        

                    </div>
                    <div className="searchpage__optionsright">
                        <div className="searchpage__options">
                            <Link to="/settings">Seetings</Link>
                        </div>
                        <div className="searchpage__options">
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        {term && (
            <div className="searchpage__results">
                <p className="searchpage__resultcount">
                    About {data?.searchInformation.formattedTotalResults} results 
                    ({data?.searchInformation.formattedSearchTime} seconds) 
                    for {term}

                </p>

                {data?.items.map(item => (
                    <div className="searchpage__result">
                        <a href={item.link}>
                            {item.pagemap?.cse_image?.
                            length > 0 && item.pagemap?.cse_image[0]?.src &&(
                               <img
                               className="searchpage__resultimage"
                               src={
                                   item.pagemap?.cse_image[0]?.src
                               }
                                alt=""
                               />
                            )}
                           {item.displayLink}
                        </a> 
                        <a className="searchpage__resulttitle" href={item.link}>
                           <h2>{item.title}</h2>
                        </a>
                        <p className="searchpage__resultsnippet">
                            {item.snippet}

                        </p>

                    </div>    

                ))}

            </div>
        )}    

     
    </div>
  );
}

export default SearchPage;
import React, { useEffect, useState } from 'react'
import HambergurMenu from "../images/menu_hamburger_burger_icon_176431.png";
import YoutubeLogo from "../images/youtube_logo.png";
import PersonIcon from "../images/icons8-person-24.png"
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice';
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/Constants';
import { cacheResults } from '../utils/SearchSlice';
const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([])
    const [showSuggesions, setShowSuggestions] = useState(false);
    const searchCache = useSelector(store => store.searchSlice)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            }
            else {
                getSearchSuggestions();
            }
        }, 300)
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);
    
    const getSearchSuggestions = async() => {
        console.log("Api call", searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log("json",json);
        setSuggestions(json[1])
        dispatch(cacheResults(
            {
                [searchQuery] : json[1]
            }
        ))
    }

    return (
        <div>
            <div className='d-flex justify-content-between m-3 p-3 shadow'>
                <div>
              <img src={HambergurMenu} alt="menu" width={36} height={36} onClick = {()=>dispatch(toggleMenu())}/>
              <Link to ="/"><img src={YoutubeLogo} alt="youtube logo"  height={36}/></Link>
                </div>
                <div>
                    <div class="input-group">
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
                        <div class="input-group-append">
                            <span class="input-group-text">Search</span>
                        </div>
                    </div>
               
                {showSuggesions &&<div className='bg-white position position-absolute text-start' style={{width:"18%"}}>
                    <ul style={{listStyleType:"none"}} className="ps-0">
                        {suggestions?.map((eachSuggesion) => {
                            return(

                                <li className='px-3 py-2'>{eachSuggesion}</li>
                            )
                        })}
                        {/* <li>iphone</li>
                        <li>iphone</li>
                        <li>iphone</li>
                        <li>iphone</li>
                        <li>iphone</li>
                        <li>iphone</li>
                        <li>iphone</li> */}
                    </ul>
                </div>}
                </div>
                <div>
                    <img src={PersonIcon} alt="Person"/>
                </div>
            </div>
        </div>
    )
}

export default Header
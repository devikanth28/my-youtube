import React from 'react'
import HambergurMenu from "../images/menu_hamburger_burger_icon_176431.png";
import YoutubeLogo from "../images/youtube_logo.png";
import PersonIcon from "../images/icons8-person-24.png"
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice';
import { Link } from 'react-router-dom';
const Header = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className='d-flex justify-content-between m-3 p-3 shadow'>
                <div>
              <img src={HambergurMenu} alt="menu" width={36} height={36} onClick = {()=>dispatch(toggleMenu())}/>
              <Link to ="/"><img src={YoutubeLogo} alt="youtube log"  height={36}/></Link>
                </div>
                <div>
                    <div class="input-group">
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                        <div class="input-group-append">
                            <span class="input-group-text">Search</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={PersonIcon} alt="Person"/>
                </div>
            </div>
        </div>
    )
}

export default Header
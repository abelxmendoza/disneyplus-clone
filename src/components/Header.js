import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    
    <Nav>
        <Logo src = "/images/logo.svg" alt = "" />
        <NavMenu>
            <a>
                <img src = "/images/home-icon.svg " alt = "" />
            </a>
            <span>HOME</span>

            
            <a>
                <img src = "/images/search-icon.svg " alt = "" />
            </a>
            <span>SEARCH</span>

            <a>
                <img src = "/images/watchlist-icon.svg" alt = ""/>
            </a>
            <span>WATCHLIST</span>

            <a>
                <img src = "/images/original-icon.svg " alt = "" />
            </a>
            <span>ORIGINALS</span>

            <a>
                <img src = "/images/movie-icon.svg " alt = "" />
            </a>
            <span>MOVIES</span>

            <a>
                <img src = "/images/series-icon.svg " alt = ""/>
            </a>
            <span>SERIES</span>

        

        </NavMenu>

        <Avatar
            
                src = "/images/Abel ProfilePic.jpg"
                alt = ""
        
        />

       
    </Nav>
   
  )
}



export default Header

const Nav = styled.div`

    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`

   display: flex;
   flex: 1;
   margin-left: 25px;
   align-items: center;
   cursor: pointer;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
            //margin-right: 5px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            
            &:after {

                content: "";
                height: 2px;
                background: white;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);

            }
            
        }

        &:hover {
            span:after {

                transform: scaleX(1);
                opacity: 1;
            }
        }

        
    }


`

const Avatar = styled.img`
    
        height: 48px;
        width: 48px;
        border-radius: 50%; 
        cursor: pointer;

`





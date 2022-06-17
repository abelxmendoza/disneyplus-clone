import React from 'react'
import styled from 'styled-components'


const Detail = () => {
  return (
    
    <Container>
        <Background>
            <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97CF58508B9F4944B017A46CCD2DEFDC9B7A8FF8F26C186C5722164CF78F916C/scale?width=2880&aspectRatio=1.78&format=jpeg" />
        </Background>
        <ImageTitle>
            <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0CE0946899AB5F45F8649A9ACDFEF0ADFC0F52D25D0A394EB0A8448167EAC752/scale?width=1920&aspectRatio=1.78&format=png"/>
        </ImageTitle>
        <Controls>


            <PlayButton>
                <img src = "/images/play-icon-black.png"/>
                <span>PLAY</span>
            </PlayButton> 
            
            <TrailerButton>
                <img src = "/images/play-icon-white.png"/>
                <span>TRAILER</span>
            </TrailerButton>
            
            <AddButton>
                <span>+</span>
            </AddButton>

            <GroupWatchButton>
                <img src = "/images/group-icon.png"/>

            </GroupWatchButton>

        </Controls>
        <SubTitle>
            2017 • 2h 12m • Science Fiction, Comedy, Fantasy, Super Hero, Action-Adventure
        </SubTitle>
        <Description>
            Thor must race against time to stop the seemingly imminent Ragnarok, a cataclysmic event that could end all of Asgardian civilization. Imprisoned on the other side of the universe and without his mighty hammer, Thor must overcome the odds to ensure that Asgard does not fall into the hands of the ruthless Hela. But first, he must face off against a fellow Avenger in a gladiatorial contest.
        </Description>

    </Container>
  )
}

export default Detail



const Container = styled.div`

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`

const ImageTitle = styled.div`

    height: 30vh;
    min-height: 170px;
    width: 35vh;
    min-width: 200px;
    margin-top: 60px;

    img {

        width: 100%;
        height: 100%;
        object-fit: contain;

    }


`

const Controls = styled.div`

    display: flex;


`

const PlayButton = styled.button`

    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;

`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        
        font-size: 30px;
        margin-bottom: 8px;
        color: white;

    }

`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);

`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    margin-bottom: 26px;

`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    color: rgb(249, 249, 249);
    max-width: 760px;


`



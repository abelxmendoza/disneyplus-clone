import React from 'react'
import styled from 'styled-components'

function Movies() {
  

return (
    
    
    <Container>
        <h4> Recommended for You</h4>
        <Content>
            <Wrap>
                <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/40AF23095A7A1B0C46F854B7C11411C0D5EB693C16699D4B76DC88A6EEFF2AB3/scale?width=1200&aspectRatio=1.78&format=jpeg" />
            </Wrap>
        </Content>
    </Container>
    
  )
}

export default Movies

const Container = styled.div`


`

const Content = styled.div`

    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

`

const Wrap = styled.div`

    img {
        width: 100%;
    }

`
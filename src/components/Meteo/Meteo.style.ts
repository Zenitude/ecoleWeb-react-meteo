import styled from 'styled-components';

export const MeteoContainer = styled.div`
    width: 100%;
    max-width: 500px;
    min-width: 260px;
    max-height: 350px;
    margin: auto;
    background: linear-gradient(45deg, #0ff, #f0f);
    box-shadow: inset 0 0 5px #000 ;
    color: #f1f1f1;
    text-align: center;
    border-radius: 15px;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 50px) 1fr 200px;
    align-items: center;

    h1, h2, h3, p, img {
        filter: drop-shadow(0 0 1px #000);
    } 
`;

export const City = styled.h1`
    grid-area: 1 / 1 / 2 / span 2 ;
    align-self: center;
`;

export const Country = styled.h2`
    grid-area: 2 / 1 / 3 / span 2 ;
`;

export const State = styled.h3`
    grid-area: 3 / 1 / 4 / span 2 ;
`;

export const Temp = styled.p`
    grid-area: 4 / 1 / 6 / 2;
    width: 100%;
    height: 100%;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Symbol = styled.img`
    grid-area: 4 / 2 / 6 / 3 ;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
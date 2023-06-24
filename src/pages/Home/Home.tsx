import { useState, useEffect } from "react";
import { HomeContainer, GlobalStyle } from "./Home.style";
import Meteo from "../../components/Meteo/Meteo";
import descriptions from "../../utils/describSymbol.json";

type MeteoDatas = {
    city: string;
    country: string;
    state: string;
    temp: number;
    symbol: string;
    wind: {
        degrees: number,
        speed: number
    }
}

type DescriptionDatas = {
    symbol: string;
    description: string;
}

export default function Home () {
    const [ datasMeteo, setDatasMeteo ] = useState<MeteoDatas>({
        city: "Cambrai",
        country: "France",
        state: "Hauts-de-France",
        temp: 30,
        symbol: "01d",
        wind: {
            degrees: 265,
            speed: 2.19 
        }
    });
    const [ descript ] = useState<DescriptionDatas[]>(descriptions);
    const [ descripFiltered, setDescription ] = useState<DescriptionDatas[]>([{symbol: "01d", description:"Ensoleillé"}])
    const API_KEY = process.env.API_KEY;

    function fetchApi (apiKey: string | undefined) {
        fetch(`http://api.airvisual.com/v2/nearest_city?&country=france&city=cambrai&key=${apiKey}`)
        .then(response => response.json())
        .then(datas => {
            const { data } = datas;
            setDatasMeteo({
                city: "Cambrai",
                country: data.country,
                state: data.state,
                temp: data.current.weather.tp,
                symbol: data.current.weather.ic,
                wind: {
                    degrees: data.current.weather.wd,
                    speed: data.current.weather.ws 
                }
            });
        })
        const filteredDescription = descript.filter(description => description.symbol === datasMeteo?.symbol);
        setDescription(filteredDescription)
    }
    
    useEffect(() => {
        fetchApi(API_KEY);       

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <>
            <GlobalStyle />
            <HomeContainer>
                <Meteo city={datasMeteo.city} country={datasMeteo.country} state={datasMeteo.state} temp={datasMeteo.temp} symbol={datasMeteo.symbol} description={descripFiltered[0].description}/>
            </HomeContainer>
        </>
    )
}
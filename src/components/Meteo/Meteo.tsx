import { MeteoContainer, City, Country, State, Temp, Symbol } from "./Meteo.style";

type MeteoProps = {
    city: string;
    country: string;
    state: string;
    temp: number;
    symbol: string;
    description: string;
}

export default function Meteo({ city, country, state, temp, symbol, description }: MeteoProps) {
    return (
        <MeteoContainer>
            <City>{city}</City>
            <Country>{country}</Country>
            <State>{state}</State>
            <Temp>{temp}°</Temp>
            <Symbol src={`images/icons/${symbol}.svg`} alt={description} title={description}/>
        </MeteoContainer>
    )
}

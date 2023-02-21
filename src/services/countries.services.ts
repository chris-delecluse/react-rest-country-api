import axios from "axios";

export const getCountry = async (countryName: string|undefined) => {
    return await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
}

export const fetchFilteredCountries = async (region?: string) => {
    if (region !== '') {
        return await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    }
    return await axios.get("https://restcountries.com/v3.1/all");
}

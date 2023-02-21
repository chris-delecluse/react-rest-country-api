import React, { FC, useEffect, useState } from 'react';
import Header from "../../components/header";
import { InputSelect, InputText } from "../../components/inputs";
import { fetchFilteredCountries } from "../../services/countries.services";
import { Card } from "../../components/card";
import { CardContainer, InputContainer, InputSelectWrapper, InputTextWrapper } from "./country.styles";
import { useNavigate } from 'react-router';

const continent: Array<any> = [
    { label: 'Europe', value: 'EU' },
    { label: 'Asia', value: 'AS' },
    { label: 'North America', value: 'NA' },
    { label: 'South America', value: 'SA' },
    { label: 'Africa', value: 'AF' },
    { label: 'Oceania', value: 'OC' },
    { label: 'Antarctica', value: 'AN' }
]

const Countries: FC<any> = (): JSX.Element => {
    const [filteredCountries, setFilteredCountries] = useState<any>([])
    const [countries, setCountries] = useState<any>([])
    const [selectedValue, setSelectedValue] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetchFilteredCountries(selectedValue)
            setCountries(response.data)
            setFilteredCountries(response.data)
        }

        if (loading) {
            fetchCountries()
            setLoading(false)
        }
    }, [loading, selectedValue])


    const handleSelect = (selectedValue: string) => {
        setSelectedValue(selectedValue);
        setLoading(true)
    };

    return (
        <div>
            <Header/>
            <InputContainer>
                <InputTextWrapper>
                    <InputText onChange={(e) => {
                        const filtered = countries.filter((country: any) => {
                            return country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
                        })
                        setFilteredCountries(filtered)
                    }}/>
                </InputTextWrapper>
                <InputSelectWrapper>
                    <InputSelect values={continent} onSelectedVal={handleSelect}/>
                </InputSelectWrapper>
            </InputContainer>

            <CardContainer>
                {filteredCountries.map((country: any, key: number) => {
                    return (
                        <React.Fragment key={key}>
                            <Card country={country}
                                  onClick={() => navigate(`/country/${country.name.common.toLowerCase()}`)}/>
                        </React.Fragment>
                    )
                })}
            </CardContainer>
        </div>
    );
};

export default Countries;

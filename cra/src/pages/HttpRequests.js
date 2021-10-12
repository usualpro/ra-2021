import Axios from 'axios';
import { useState, useEffect } from 'react';
import { CustomMap } from '../components/CustomMap';

const getCountries = () => Axios.get("https://restcountries.com/v3.1/all");
export const HttpRequests = () => {
    //équivalent de setState()
    const [countries, setCountries] = useState([]);
    //équivalent de componentDidMount()
    useEffect(
        () => getCountries()
            .then(
                results => {
                    setCountries(results.data);
                }
            )
            .catch(
                error => {
                    console.log(error);
                    throw error;
                }
            )
        , []);
    return <>
        <h1>Http requests</h1>
        <CustomMap countries={countries} />
    </>
};
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { CustomMap } from '../components/CustomMap';

const getCountries = () => Axios.get("https://restcountries.com/v3.1/all");
export const HttpRequests = () => {
    const [countries, setCountries] = useState([]);
    useEffect(
        () => getCountries()
            .then(
                results => {
                    console.log('promesse résolue !', results.data);
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
        <CustomMap />
    </>
};
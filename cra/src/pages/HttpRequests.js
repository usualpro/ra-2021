import Axios from 'axios';
import { useState, useEffect } from 'react';
import { ParagrapheClass } from '../components/ParagrapheClass';

//import allCountries from '../data/all.json';


const getCountries = () => Axios.get("https://restcountries.com/v3.1/all")


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
        {
            countries.length
        } countries
        <ParagrapheClass />
    </>
};